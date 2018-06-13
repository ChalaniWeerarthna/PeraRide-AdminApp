import {combineReducers} from 'redux';
import notification from './notificationReducer';
import rider from './riderReducer';
import gmap from './mapReducer';
import dock from './dockReducer';


const rootReducer = combineReducers({
    notification,
    rider,
    gmap,
    dock
})

export default rootReducer;