import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../../redux/HRMS/Emplyoee/LeaveEmployee/action';
import DeletePopUp from '../DeletePopUp';
import LeaveModal from './LeaveModal';


const LeaveEmployee = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);
  const dispatch = useDispatch();
  const leaveemployeeList = useSelector(state => state.leaveEmployee.leaveemployeeList);

  const handleDeleteEmployee = (index) => {
    dispatch(deleteEmployee(index));
    setShowDeleteModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleOpenDeleteModal = (index) => {
    setSelectedEmployeeIndex(index);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div>
        <div className='card mt-3 p-3'>
          <div className='p-3 employeeli'>
            <div className='table-responsive'>
              <table className='table  table-striped p-2'>
                <thead>
                  <tr>
                    <th></th>
                    <th>NAME</th>
                    <th>EMPLOYEE ID</th>     
                    <th>DATE</th>
                    <th>REASON</th>
                    <th>No. Days</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {(leaveemployeeList || []).map((leaveEmployee, index) => (
                    <tr key={leaveEmployee.id}>
                      <td><img className="img-thumbnail rounded-circle avatar-sml" src={leaveEmployee.employeeimg} alt='' /></td>
                      <td><div className='mt-3'><strong>{leaveEmployee.firstName} {leaveEmployee.lastName}</strong></div></td>
                      <td><div className='mt-3'>{leaveEmployee.employeeid}</div></td>
                      <td><div className='mt-3'>{leaveEmployee.startdate}<strong className='mx-1'> To </strong>{leaveEmployee.enddate}</div></td>
                      <td><div className='mt-3'>{leaveEmployee.reason}</div></td>
                      <td><div className='mt-3'>{leaveEmployee.duration}</div></td>
                      <td>
                        <div className='mt-2'>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faCheck} className='text-success' />
                          </button>
                          <button className='btn btn-sm mx-1' onClick={() => handleOpenDeleteModal(index)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* DeletePopUp component */}
      <DeletePopUp
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={() => handleDeleteEmployee(selectedEmployeeIndex)}
      />
    </>
  );
}

export default LeaveEmployee;
