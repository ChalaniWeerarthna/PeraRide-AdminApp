import sessionApi from 'api/sessionApi';
import { push }      from 'react-router-redux';  
import * as types from './actionTypes';  

const loginFail = (message) => {  
  return {type: types.LOG_IN_FAIL, message: message}
}

const clearAlert = () => {
  return {type: types.CLEAR_ALERT}
}
export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      const res = response;
      if(res.res){
        localStorage.setItem('jwt', res.jwt);
        dispatch(push('/'));
      }else{        
        dispatch(loginFail("Login Failed"));
      }
    }).catch(error => {
      dispatch(loginFail("Problem with connection!"));
    });
  };
}
export const clearAlertNotification = () =>{
  return (dispatch) =>{
    dispatch(clearAlert())
  }
}