import sessionApi from 'api/sessionApi';
import { push }      from 'react-router-redux';  
import * as types from './actionTypes';  

const loginFail = (message) => {  
  return {type: types.LOG_IN_FAIL, message: message}
}


export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if(response.res){        
        localStorage.setItem('jwt', response.token);
        dispatch(push('/'));
      }else{        
        dispatch(loginFail("Login Failed"));
      }
    }).catch(error => {
      dispatch(loginFail("Problem with connection!"));
    });
  };
}

export function logoutUser(credentials) {  
  return function(dispatch) {    
    localStorage.removeItem('jwt');    
    dispatch(push('/'));
  };
}