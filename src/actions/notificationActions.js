import * as types from './actionTypes';  

const clearAlert = () => {
    return {type: types.CLEAR_ALERT}
  }

export const clearAlertNotification = () =>{
  return (dispatch) =>{
    dispatch(clearAlert())
  }
}