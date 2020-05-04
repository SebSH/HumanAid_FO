const INITIAL_STATE = {
  events: [],
  loading: false,
  error: ""
};

const events = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_EVENTS_SUCCESS':
      return {
        events: action.events,
        loading: false,
        error: ""
      }
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: ""
      }
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state
  }
}

export default events;
