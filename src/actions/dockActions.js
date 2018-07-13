import dockApi from 'api/dockApi';
import * as types from './actionTypes';  

const success = (message) => {  
  return {type: types.SUCCESS_NOTIFICATION, message: message}
}

const unsuccess = (message) => {  
  return {type: types.UNSUCCESS, message: message}
}

const updateDocks = (docks) => {  
  return {type: types.GET_DOCKS_SUCCESS, docks: docks}
}

export function addStation(details) {  
  return function(dispatch) {
    return dockApi.addStation(details).then(response => {
      const res = response;
      if(res.res){
        dispatch(success("Successfully Added!"));
      }else{        
      }
    }).catch(error => {
      dispatch(unsuccess("Problem with the connection!"));
    });
  };
}

export function addLock(details) {  
    return function(dispatch) {
      return dockApi.addLock(details).then(response => {
        const res = response;
        if(res.res){
          dispatch(success("Successfully Added!"));
        }else{        
        }
      }).catch(error => {
        dispatch(unsuccess("Problem with the connection!"));
      });
    };
  }


export function Docks() {  

  return function(dispatch) {

    return dockApi.getDocks().then(response => {          
      if(response.response){
        const res = response.response.map((obj) => {
          return [obj.name,`${obj.location.lat}`,`${obj.location.lon}`,`${obj.noOfBikes}`,`${obj.noOfEmpty}`]
        });        
        dispatch(updateDocks(res));        
      }else{        
      }

    }).catch(error => {
      dispatch(unsuccess("Problem with the connection!"));
    });

  };

}
