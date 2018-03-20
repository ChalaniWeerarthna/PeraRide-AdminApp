import sessionApi from 'api/sessionApi';
import { push }      from 'react-router-redux';  


export function logInUser(credentials) {  
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      localStorage.setItem('jwt', response.jwt);
      dispatch(push('/'));
    }).catch(error => {
      throw(error);
    });
  };
}