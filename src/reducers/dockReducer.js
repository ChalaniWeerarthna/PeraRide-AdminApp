import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function riderReducer(state = initialState.dock,action) {
  switch(action.type) {
    case types.GET_DOCKS_SUCCESS:
      state = {...state,
        docks:action.docks
      }
      return state

    default:
      return state;
  }
}
