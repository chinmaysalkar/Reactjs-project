import React, { useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepartment, addDepartment, updateDepartment } from '../../redux/HRMS/Department/action';
import DeletePopUp from '../DeletePopUp'; 
import AddDepartment from './AddDepartment';

const ListView = () => {
  const dispatch = useDispatch();
  const departmentList = useSelector(state => state.department.departmentList);
  
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // State to store the index of the department being edited

  const handleShowDeletePopup = (index) => {
    setShowDeletePopup(true);
    setDeleteIndex(index);
  };
  
  const handleCloseDeletePopup = () => {
    setShowDeletePopup(false);
    setDeleteIndex(null);
  };

  const handleDeleteDepartment = () => {
    dispatch(deleteDepartment(deleteIndex));
    handleCloseDeletePopup();
  };

  const handleEditDepartment = (index) => {
    setEditIndex(index); // Set the index of the department being edited
    setShowAddModal(true); // Show the AddDepartment modal for editing
  };

  const handleAddOrUpdateDepartment = (newDepartmentData) => {
    if (editIndex !== null) {
      // If editIndex is not null, it means we are updating an existing department
      dispatch(updateDepartment(departmentList[editIndex].id, newDepartmentData)); // Dispatch updateDepartment action
    } else {
      // Otherwise, we are adding a new department
      dispatch(addDepartment(newDepartmentData)); // Dispatch addDepartment action
    }
    setShowAddModal(false); // Close the AddDepartment modal
    setEditIndex(null); // Reset editIndex state
  };

  return (
    <div className='mt-4 mx-3'>
      <div className='card p-3'>
        <div className='d-flex justify-content-between mx-2 switch-top'>
          <h6 className='mx-2 mt-3'>DEPARTMENTS LIST</h6>
          <Form className='mt-2 d-flex'>
            <Form.Control
              type='search'
              placeholder='Search something...'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </div>
        
        <div className='p-3 department'>
          <div className='table-responsive'>
            <table className='table table-striped p-2'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>DEPARTMENT</th>
                  <th>DEPARTMENT HEAD</th>
                  <th>TOTAL EMPLOYEE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {(departmentList || []).map((department, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{department.departmentname}</td>
                    <td>{department.departmenthead}</td>
                    <td>{department.totalemployee}</td>
                    <td>
                      <button className='btn btn-sm mx-1' onClick={() => handleEditDepartment(index)}>
                        <FontAwesomeIcon icon={faEdit} className='text-success'/>
                      </button>
                      <button className='btn btn-sm mx-1' onClick={() => handleShowDeletePopup(index)}>
                        <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Render the delete popup */}
      <DeletePopUp 
        show={showDeletePopup} 
        handleClose={handleCloseDeletePopup} 
        handleDelete={handleDeleteDepartment} 
      />

      {/* Render the AddDepartment modal */}
      <AddDepartment 
        show={showAddModal} 
        handleClose={() => setShowAddModal(false)} 
        handleAddOrUpdate={handleAddOrUpdateDepartment} 
        departmentData={editIndex !== null ? departmentList[editIndex] : null} 
      />
    </div>
  );
};

export default ListView;
