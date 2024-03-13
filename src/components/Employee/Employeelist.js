import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch, faEye } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';
import Employeeindex from './Employeeindex';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../../redux/HRMS/Emplyoee/action';
import DeletePopUp from '../DeletePopUp';
import AddModal from './AddModal'; 
import { Link } from 'react-router-dom';


const Employeelist = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); 
  const dispatch = useDispatch();
  const employeeList = useSelector(state => state.employee.employeeList);

  const handleDeleteEmployee = (index) => {
    dispatch(deleteEmployee(index));
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (index) => {
    setSelectedEmployee(employeeList[index]); 
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleEditEmployee = (index) => {
    setSelectedEmployee(employeeList[index]); 
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <>
      <div>
        <div>
          <Employeeindex />
          <div className='card mt-3 p-3 border-0'>
            <div className='d-flex justify-content-between mx-2 switch-top'>
              <h6 className='mx-2 mt-3'>EMPLOYEE LIST</h6>
              <Form className="mt-2 d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search something..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </div>

            <div className='p-3 employeeli mt-2 col-lg-12 col-md-12 col-sm-12'>
              <div className='table-responsive'>
                <table className='table table-striped p-2'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>NAME</th>
                      <th>EMPLOYEE ID</th>
                      <th>PHONE</th>
                      <th>JOIN DATE</th>
                      <th>ROLE</th>
                      <th><div className='mx-2'>ACTION</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(employeeList || []).map((employee, index) => (
                      <tr key={employee.id}>
                        <td><input className='form-check-input' type="checkbox" /></td>
                        <td>
                          <strong>{employee.firstName} {employee.lastName}</strong>
                          <br />
                          {employee.email}
                        </td>
                        <td>{employee.employeeid}</td>
                        <td>{employee.phone}</td>
                        <td>{formatDate(employee.joindate)}</td>
                        <td>{employee.role}</td>
                        <td>
                          <div className='d-flex'>
                            <button className='btn btn-sm' onClick={() => handleEditEmployee(index)}>
                              <FontAwesomeIcon icon={faEdit} className='text-success' />
                            </button>
                            <Link to={`/employeeview/${employee.id}`}>
                              <button className='btn btn-sm'>
                                <FontAwesomeIcon icon={faEye} className='text-muted' />
                              </button>
                            </Link>
                            <button className='btn btn-sm' onClick={() => handleShowDeleteModal(index)}>
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
      </div>

      {/* DeletePopUp component */}
      <DeletePopUp
        show={showDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleDelete={() => handleDeleteEmployee(employeeList.indexOf(selectedEmployee))}
      />

      {/* AddModal component */}
      {showEditModal && (
        <AddModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          selectedEmployee={selectedEmployee}
        />
      )}
    </>
  );
}

export default Employeelist;
