import {combineReducers} from 'redux'
import projectReducer from './Project/ProjectList/ProjectOnGoing/reducer';
import departmentReducer from './HRMS/Department/reducer';
import userReducer from './HRMS/UserList/reducer';
import employeelistReducer from './HRMS/Emplyoee/reducer';
import holidayReducer from './HRMS/Holiday/reducer';
import clientReducer from './Project/Client/reducer';

const rootReducer = combineReducers({
    department: departmentReducer,
    user: userReducer,
    employee: employeelistReducer,
    holiday: holidayReducer,
    project: projectReducer,
    client: clientReducer,
});

export default rootReducer;