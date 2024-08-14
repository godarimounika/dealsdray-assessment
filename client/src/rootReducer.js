import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

const rootReducer = combineReducers({
  employee: employeeReducer,
  // other reducers can be added here
});

export default rootReducer;
