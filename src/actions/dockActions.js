import dockApi from 'api/dockApi';
import * as types from './actionTypes';  

// const updateDockstations= (stations) => {  
//   return {type: types.GET_DOCKS_SUCCESS, stations: stations}
// }

const success = (message) => {  
  return {type: types.SUCCESS_NOTIFICATION, message: message}
}


export function addDock(details) {  
  return function(dispatch) {
    return dockApi.addDock(details).then(response => {
      const res = response;
      if(res.res){  
        dispatch(success("Successfully Added!"));
      }else{        
      }
    }).catch(error => {
        throw error
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
          throw error
      });
    };
  }


// export function Docks() {  

//   return function(dispatch) {

//     return dockApi.getAll().then(response => {          
//       if(response.riders){
//         const res = response.riders.map((obj) => {
//           return [obj.rider_regNo,obj.rider_firstName,obj.rider_lastName, obj.rider_phone, obj.rider_email]
//         });        
//         dispatch(updateRiders(res));        
//       }else{        
//       }

//     }).catch(error => {
//         throw error
//     });

//   };

// }
