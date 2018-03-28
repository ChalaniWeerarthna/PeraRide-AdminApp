class RiderApi {  
    static add(details) {
      const request = new Request('/user/register/rider', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({rider_regNo : details.regNo, rider_phoneNo: details.phoneNo})
      });
  
  
      return fetch(request).then(response => {        
        return response.json();
      }).catch(error => {
        throw error;
      });
    } 
  }
  
  export default RiderApi;  