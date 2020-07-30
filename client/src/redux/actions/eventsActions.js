export const LIST_EVENTS_REQUEST = 'LIST_EVENTS_REQUEST'
export const LIST_EVENTS_SUCCESS = 'LIST_EVENTS_SUCCESS'
export const LIST_EVENTS_FAIL = 'LIST_EVENTS_FAIL'

export const listEventsRequest = (payload) => ({
    type: LIST_EVENTS_REQUEST,
    payload: payload,
  });

  export const listEventsSuccess = (payload) => ({
    type: LIST_EVENTS_SUCCESS,
    payload: payload,
  });


  export const listEventsFail = (payload) => ({
    type: LIST_EVENTS_FAIL,
    payload: payload,
  });