import formurlencoded from "form-urlencoded";

class SessionApi {  
    static login(credentials) {
      const request = new Request('/login/admin', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded'
        }), 
        body: formurlencoded({admin_username: credentials.email,admin_password: credentials.password })
      });
  
  
      return fetch(request).then(response => {        
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 
  }
  
  export default SessionApi;  