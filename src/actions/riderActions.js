import riderApi from 'api/riderApi';
// import * as types from './actionTypes';  

export function addRider(details) {  
  return function(dispatch) {
    return riderApi.add(details).then(response => {
      const res = response;
      if(res.res){
        
      }else{        
      }
    }).catch(error => {
        throw error
    });
  };
}
