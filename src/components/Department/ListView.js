import React, { useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepartment } from '../../redux/HRMS/Department/action';
import DeletePopUp from '../DeletePopUp'; 

const ListView = () => {
  const dispatch = useDispatch();
  const departmentList = useSelector(state => state.department.departmentList);
  
  //  visibility of the delete popup
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null); // State to store the index of the department to delete
  
  // Function to handle showing the delete popup
  const handleShowDeletePopup = (index) => {
    setShowDeletePopup(true);
    setDeleteIndex(index);
  };
  
  // Function to close the delete popup
  const handleCloseDeletePopup = () => {
    setShowDeletePopup(false);
    setDeleteIndex(null);
  };
  
  // Function to handle deleting a department
  const handleDeleteDepartment = () => {
    dispatch(deleteDepartment(deleteIndex));
    handleCloseDeletePopup(); // Close the delete popup after deletion
  };

  return (
    <div className='mt-4 mx-3'>
      <div className='card p-3'>
        <div className='d-flex justify-content-between mx-2 switch-top'>
          <h6 className='mx-2 mt-3'>DEPARMENTS LIST</h6>
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
                {(departmentList || []).map((user, index) => (
                  <tr key={user}>
                    <td>{user.no}</td>
                    <td>{user.departmentname}</td>
                    <td>{user.departmenthead}</td>
                    <td>{user.totalemployee}</td>
                    <td>
                      {(
                        <>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faEdit} className='text-success'/>
                          </button>
                          <button className='btn btn-sm mx-1' onClick={() => handleShowDeletePopup(index)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                          </button>
                        </>
                      )}
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
      
    </div>
  );
};

export default ListView;
