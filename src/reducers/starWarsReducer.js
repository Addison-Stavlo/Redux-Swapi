import {FETCHING, SUCCESS, FAILURE} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    case FETCHING:
      return {
        ...state,
        fetching: true
      }
    case SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        characters: action.payload
      }
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
