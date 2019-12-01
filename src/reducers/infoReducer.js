import { FETCH_INFO, SET_ACTIVITY } from "../actions/types";

const initialState = {
  info: [],
  fetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
        ...state,
        info: action.payload
        
      };
    case SET_ACTIVITY: {
      return {
        ...state,
        fetching: action.payload
      };
    }
    default:
      return state;
  }
}
