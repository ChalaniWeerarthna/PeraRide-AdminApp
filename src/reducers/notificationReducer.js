import * as types from '../actions/actionTypes';
import initialState from './initialState';
import { ThumbUp } from "material-ui-icons";

export default function notificationReducer(state = initialState.notification,action) {
  switch(action.type) {
    case types.UNSUCCESS:
      state = {...state,
        isNotify:true,
        message:action.message
      }
      return state

    case types.SUCCESS_NOTIFICATION:
      state = {...state,
        isNotify:true,
        message:action.message,
        color:'success',
        icon: ThumbUp
      }
      return state

    case types.CLEAR_ALERT:
      state = {...state,isNotify:false}
      return state

    default:
      return state;
  }
}
