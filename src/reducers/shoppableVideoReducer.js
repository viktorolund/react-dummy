import * as actionTypes from "../actions/actionTypes";

const initialState = {
    shoppablevideos: {}
};

export default function shoppableVideoReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPPABLE_VIDEOS_SUCCESS: {

        const newState = { ...state, shoppablevideos: action.shoppablevideos };
        return newState;
    }
    default:
      return state;
  }
}