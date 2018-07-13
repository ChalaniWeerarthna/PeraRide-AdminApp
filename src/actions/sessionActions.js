import sessionApi from 'api/sessionApi';
import { push }      from 'react-router-redux';  
import * as types from './actionTypes';  

const unsuccess = (message) => {  
  return {type: types.UNSUCCESS, message: message}
}


export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      if(response.res){        
        localStorage.setItem('jwt', response.token);
        dispatch(push('/'));
      }else{        
        dispatch(unsuccess("Login Failed"));
      }
    }).catch(error => {
      dispatch(unsuccess("Problem with the connection!"));
    });
  };
}

export function logoutUser(credentials) {  
  return function(dispatch) {    
    localStorage.removeItem('jwt');    
    dispatch(push('/'));
  };
}