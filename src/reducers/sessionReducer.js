import * as types from 'actions/actionTypes';  
import initialState from './initialState';  

export default function sessionReducer(state = initialState.session,action) {  
  switch(action.type) {
    case types.LOG_IN_FAIL:
      state = {...state,
        failNotification:true,
        message:action.message
      }
      return state
    case types.CLEAR_ALERT:
      state = {...state,failNotification:false}
      return state
    default: 
      return state;
  }
}
