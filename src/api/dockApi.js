import formurlencoded from "form-urlencoded";

class DockApi {  
    static addDock(details) {
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
  }
  
  export default DockApi;  