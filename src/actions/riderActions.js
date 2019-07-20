import riderApi from 'api/riderApi';
import * as types from './actionTypes';  
var moment = require('moment');

const updateRiders = (riders) => {  
  return {type: types.GET_RIDERS_SUCCESS, riders: riders}
}

const success = (message) => {  
  return {type: types.SUCCESS_NOTIFICATION, message: message}
}

const updateCurrentUsers = (currentUsers) => {  
  return {type: types.GET_CURRENT_USERS, currentUsers: currentUsers}
}

const unsuccess = (message) => {  
  return {type: types.UNSUCCESS, message: message}
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
              return [obj.rider_regNo,obj.rider_firstName,obj.rider_lastName, obj.rider_phone, obj.rider_email, obj.nic]
            });        
            dispatch(updateRiders(res));        
          }else{        
          }
    
        }).catch(error => {
          dispatch(unsuccess("Problem with the connection!"));
        });
      }else{  
        dispatch(unsuccess("Add new rider failed!"));      
      }
    }).catch(error => {
      dispatch(unsuccess("Problem with the connection!"));
    });
  };
}

export function getRiders() {  

  return function(dispatch) {

    return riderApi.getAll().then(response => {  
      if(response.riders){
        const res = response.riders.map((obj) => {
          return [obj.rider_regNo,obj.rider_firstName,obj.rider_lastName, obj.rider_phone, obj.rider_email, obj.nic]
        });        
        dispatch(updateRiders(res));        
      }else{        
      }

    }).catch(error => {
      dispatch(unsuccess("Problem with the connection!"));
    });

  };

}

export function getCurrentUsers() {  

  return function(dispatch) {

    return riderApi.getCurrentUsers().then(response => {   
      
      if(response.currentusers){
        const res = response.currentusers.map((obj) => {
            return [obj.bike_id,moment(obj.date_time).format('MMMM Do YYYY, h:mm:ss a'),obj.rider_regNo]
        });       

        dispatch(updateCurrentUsers(res));        
      }else{        
      }

    }).catch(error => {
      dispatch(unsuccess("Problem with the connection!"));
    });

  };

}