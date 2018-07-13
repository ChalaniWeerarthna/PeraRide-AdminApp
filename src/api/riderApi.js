import formurlencoded from "form-urlencoded";

class RiderApi {  
    static add(details) {
      const request = new Request('/user/register', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('jwt')
        }), 
        body: formurlencoded({rider_regNo : details.regNo,
          rider_phone: details.phoneNo,
          rider_firstName:details.fName,
          rider_lastName:details.lName,
          rider_email: details.email,
          rider_password: details.nic,
          nic: details.nic
        })
      });
  
      return fetch(request).then(response => {                
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 

    static getAll() {      
      
      const request = new Request('/users', {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('jwt')
        })
      });
  
      
      return fetch(request).then(response => {                         
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 

    static getCurrentUsers() {      
      
      const request = new Request('/admin/currentusers', {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': localStorage.getItem('jwt')
        })
      });
      
      return fetch(request).then(response => {                         
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 
  }
  
  export default RiderApi;  