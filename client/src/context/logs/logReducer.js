import {
  ADD_LOGS,
  DELETE_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOGS,
  FILTER_LOGS,
  CLEAR_FILTER,
  LOGS_ERROR,
  GET_LOGS,
  CLEAR_LOGS,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case ADD_LOGS:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
        loading: false,
      };
    case UPDATE_LOGS:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log._id === action.payload._id ? action.payload : log
        ),
        loading: false,
      };
    case DELETE_LOGS:
      return {
        ...state,
        logs: state.logs.filter((log) => log._id !== action.payload),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_LOGS:
      return {
        ...state,
        filtered: state.logs.filter((log) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return log.name.match(regex) || log.email.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case CLEAR_LOGS:
      return {
        ...state,
        logs: null,
        filtered: null,
        current: null,
        error: null,
      };
    default:
      return state;
  }
};
