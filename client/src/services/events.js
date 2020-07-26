import request from './requests';
const path = 'api/events'

export async function listEvents(params) {
  return request(path, {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
