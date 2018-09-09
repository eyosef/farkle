import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import farkle from './farkleReducer'; 
import session from './sessionReducer';

const rootReducer = combineReducers({
  farkle,
  session,
  router: routerReducer
});

export default rootReducer;