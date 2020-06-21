import {
  ADD_HIKE,
  GET_HIKES,
  DELETE_HIKE,
  UPDATE_HIKE,
  GET_HIKE_DETAILS,
  SET_LOADING,
  HIKE_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HIKES:
      return {
        ...state,
        hikes: action.payload,
        loading: false,
      };
    case ADD_HIKE:
      return {
        ...state,
        hikes: [action.payload, ...state.contacts],
      };
    case DELETE_HIKE:
      return {
        ...state,
        hikes: state.hikes.filter((hike) => hike.id !== action.payload),
      };
    case HIKE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
