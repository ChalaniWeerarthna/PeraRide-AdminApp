import {combineReducers} from 'redux';
import notification from './notificationReducer';
import rider from './riderReducer';


const rootReducer = combineReducers({
    notification,
    rider
})

export default rootReducer;