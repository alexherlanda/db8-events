import axios from 'axios';
import http from 'http';
import https from 'https';
import { notification } from 'antd';

const codeMessage = {
  200: 'Petición exitosa',
  201: '',
  202: '',
  204: '',
  400: '',
  401: 'Sin autorización',
  403: 'No tiene permisos para realizar está acción',
  404: 'Not Found',
  406: '',
  410: '',
  422: '',
  500: 'Error de servidor 501',
  502: 'Error de servidor 502',
  503: 'Error de servidor 503',
  504: 'Error de servidor 504',
};

let instance = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: function (status) {
    return status < 500;
  },
});

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });
let isEnabled = false;

instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;
instance.defaults.timeout = 93000;
instance.httpAgent = httpAgent;
instance.httpsAgent = httpsAgent;
instance.defaults.headers.common['Accept'] = 'application/json';
instance.defaults.headers.put['Content-Type'] = 'application/json;';
instance.defaults.headers.post['Content-Type'] = 'application/json;';
instance.defaults.headers.post['Access-control-Allow-Origin'] = '*';

const isHandlerEnabled = (config) => {
  return config.hasOwnProperty('notInterceptor');
};

const requestHandler = (request) => {
  isEnabled = isHandlerEnabled(request);
  try {
    let token = localStorage.getItem('tkn');
    if (token && token !== '') {
      request.headers.common['Authorization'] = `Bearer ${token}`;
    }
  } catch (error) {
    delete request.headers.common['Authorization'];
    console.log(error);
  }
  return request;
};

//* Interceptor for Request
instance.interceptors.request.use((request) => {
  if (navigator.onLine) {
    return requestHandler(request);
  } else {
    notification.error({
      message: 'Sin conexión a internet',
      description: ':(',
    });
    return Promise.reject('Sin conexión a internet');
  }
});

//* Interceptor for Response
instance.interceptors.response.use(
  (response) => {
    if (isEnabled) {
      return response;
    }
    const { status } = response;
    if (typeof response !== 'undefined') {
      const httpStatusText = codeMessage[status];
      const errorServer = response.data.message || '';
      switch (status) {
        case 200:
          if (response.data.notInterceptor) {
            return response;
          }
          break;
        case 301:
          notification.warning({
            message: errorServer,
            description: 'Moved Permanently',
          });
          break;
        case 400:
          if (response.data.notInterceptor) {
            return response;
          }
          notification.destroy();
          if (!response.data.noMatch) {
            if (
              typeof response.data.errorList !== 'undefined' &&
              response.data.errorList.length > 0
            ) {
              response.data.errorList.forEach((e) => {
                notification.warning({
                  message: e,
                });
              });
            } else {
              notification.error({
                message: errorServer,
                description: httpStatusText,
              });
            }
          }

          break;
        case 401:
          notification.destroy();
          notification.error({
            message: `Su token ha expirado :(`,
          });
          instance.defaults.headers.common['Authorization'] = null;

          break;
        case 404:
          notification.error({
            message: ` ${status}: No se pudo encontrar lo que buscaba :( `,
            description: httpStatusText,
          });
          break;
        case 500:
          notification.error({
            message: ` ${status}: Error del Servidor :(`,
            description: httpStatusText,
          });
          break;
        default:
          notification.error({
            message: ` ${status}: ${errorServer}`,
            description: httpStatusText,
          });
          break;
      }
    } else {
      notification.destroy();
      console.log('response not defined', response);
      const httpStatusText = codeMessage[status];

      switch (status) {
        case 500:
          notification.error({
            message: ` ${status}: Error del Servidor`,
            description: httpStatusText,
          });
          break;
        case 503:
          notification.error({
            message: ` ${status}: (Service Temporarily Unavailable)`,
            description: httpStatusText,
          });
          break;

        default:
          console.log('Ocurrió un error');
          notification.error({
            message: ` ${status}: Ocurrio un error al tratar de obtener el clima :()`,
            description: httpStatusText,
          });
          break;
      }
    }
    return response;
  },
  (error) => {
    notification.destroy();
    if (instance.isCancel(error)) {
      console.log('Aborted Request Controlled');
    }
    if (navigator.onLine) {
      console.log('ocurrió un error');
    } else {
      notification.error({
        message: 'Sín conexión a internet',
        description: 'not network',
      });
    }
    return Promise.reject({ ...error });
  }
);

export default instance;