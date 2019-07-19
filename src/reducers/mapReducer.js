import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function mapReducer(state = initialState.gmap,action) {
  switch(action.type) {
    case types.GET_MARKERS_SUCCESS:
      state = {...state,
        markers:action.markers
      }
      return state

    default:
      return state;
  }
}
