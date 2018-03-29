import riderApi from 'api/riderApi';
import * as types from './actionTypes';  

const updateRiders = (riders) => {  
  return {type: types.GET_RIDERS_SUCCESS, riders: riders}
}

const success = (message) => {  
  return {type: types.SUCCESS_NOTIFICATION, message: message}
}


export function addRider(details) {  
  return function(dispatch) {
    return riderApi.add(details).then(response => {
      const res = response;
      if(res.res){
        dispatch(success("Successfully Added!"));
        riderApi.getAll().then(response => {    

          if(response.riders){
            const res = response.riders.map((obj) => {
              return [obj.rider_regNo, obj.rider_phoneNo]
            });        
            dispatch(updateRiders(res));        
          }else{        
          }
    
        }).catch(error => {
            throw error
        });
      }else{        
      }
    }).catch(error => {
        throw error
    });
  };
}

export function getRiders() {  

  return function(dispatch) {

    return riderApi.getAll().then(response => {    

      if(response.riders){
        const res = response.riders.map((obj) => {
          return [obj.rider_regNo, obj.rider_phoneNo]
        });        
        dispatch(updateRiders(res));        
      }else{        
      }

    }).catch(error => {
        throw error
    });

  };

}
