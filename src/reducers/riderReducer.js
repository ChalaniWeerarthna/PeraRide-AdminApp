import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function riderReducer(state = initialState.rider,action) {
  switch(action.type) {
    case types.GET_RIDERS_SUCCESS:
      state = {...state,
        riders:action.riders
      }
      return state

      case types.GET_CURRENT_USERS:
      state = {...state,
        currentUsers:action.currentUsers
      }
      return state

    default:
      return state;
  }
}
