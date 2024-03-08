import { createStore, combineReducers } from 'redux';
import userReducer from '../redux/HRMS/UserList/reducer';
import departmentReducer from '../redux/HRMS/Department/reducer';
import employeelistReducer from '../redux/HRMS/Emplyoee/reducer';
import holidayReducer from '../redux/HRMS/Holiday/reducer';

const rootReducer = combineReducers({
    department: departmentReducer,
    user: userReducer,
    employee: employeelistReducer,
    holiday: holidayReducer,
});

const store = createStore(rootReducer);



export default store;
