import { combineReducers } from 'redux';
import objBB  from './reducers/objReducer';
import arrBB  from './reducers/arrReducer';

export default combineReducers({
  objBB,
  arrBB 
});