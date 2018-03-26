class SessionApi {  
    static login(credentials) {
      const request = new Request('/user/login/admin', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({admin_username: credentials.email,admin_password: credentials.password })
      });
  
  
      return fetch(request).then(response => {        
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 
  }
  
  export default SessionApi;  