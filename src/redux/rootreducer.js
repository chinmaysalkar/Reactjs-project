import {combineReducers} from 'redux'
import projectReducer from './Project/ProjectList/ProjectOnGoing/reducer';
import departmentReducer from './HRMS/Department/reducer';
import userReducer from './HRMS/UserList/reducer';
import employeelistReducer from './HRMS/Emplyoee/reducer';
import leaveemployeelistReducer from './HRMS/Emplyoee/LeaveEmployee/reducer';
import holidayReducer from './HRMS/Holiday/reducer';
import clientReducer from './Project/Client/reducer';
import todoReducer from './Project/TodoList/reducer';
import ticketReducer from './Project/TicketList/reducer';

const rootReducer = combineReducers({
    department: departmentReducer,
    user: userReducer,
    employee: employeelistReducer,
    leaveEmployee: leaveemployeelistReducer,
    holiday: holidayReducer,
    project: projectReducer,    
    client: clientReducer,
    todo: todoReducer,
    ticket: ticketReducer,
});

export default rootReducer;