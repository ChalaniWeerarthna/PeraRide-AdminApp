import mapApi from '../api/mapApi';
import * as types from './actionTypes';

const updateMap = (markers) => {
    return { type: types.GET_MARKERS_SUCCESS, markers: markers }
}

const unsuccess = (message) => {
    return { type: types.UNSUCCESS, message: message }
}

export function getMap() {

    return function (dispatch) {

        return mapApi.getMarkers().then(response => {
            if (response.response) {

                dispatch(updateMap(response.response));
            } else {
            }

        }).catch(error => {
            dispatch(unsuccess("Problem with the connection!"));
        });

    };

}
