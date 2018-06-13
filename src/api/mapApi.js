
class MapApi{
    static getMarkers() {      
      
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

export default MapApi