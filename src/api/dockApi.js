import formurlencoded from "form-urlencoded";

class DockApi {  
  static addStation(details) {
    const request = new Request('/admin/addstation', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': localStorage.getItem('jwt')
      }), 
      body: formurlencoded({station_id : details.stationID,
        lock_id: details.lockID,
        name: details.dockName,
        lat: details.lat,
        lon: details.lon
      })
    });

    return fetch(request).then(response => { 
      return response.json();
      
    }).catch(error => {
      throw error;
    });
  } 

    static addLock(details) {
        const request = new Request('/admin/addstation', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
          }), 
          body: formurlencoded({station_id : details.stationID,
              lock_id: details.lockID,
            token: localStorage.getItem('jwt')
          })
        });
    
    
        return fetch(request).then(response => {        
          return response.json();
        }).catch(error => {
          throw error;
        });
      } 

      static getDocks() {      
      
        const request = new Request('/admin/fetchstations', {
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
  
  
  export default DockApi;  