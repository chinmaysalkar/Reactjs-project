import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch , faEye} from '@fortawesome/free-solid-svg-icons';
import { Form, Button  } from 'react-bootstrap';
import Employeeindex from './Employeeindex';
import Modal from 'react-bootstrap/Modal';
import {useDispatch, useSelector} from 'react-redux';
import {deleteEmployee} from '../../redux/HRMS/Emplyoee/action';

const Employeelist=()=> {
    
  const dispatch = useDispatch();
  const employeeList = useSelector(state=>state.employee.employeeList);

  
  const handleDeleteEmployee = (index) => {
    dispatch(deleteEmployee(index));
  };
    

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


  return (
   <>
    <div>
        <div>
          <Employeeindex/>

         
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
                  {(employeeList || []).map((user, index) => (
                    <tr key={user.name}>
                      <td><input className='form-check-input' type="checkbox" /></td>
                      <td>
                        <strong>{user.name}</strong>
                        <br />
                        {user.email}
                      </td>
                      <td>{user.employeeid}</td>
                      <td>{user.phone}</td>
                      <td>{user.joindate}</td>
                      <td>{user.role}</td>
                      <td>
                        {(
                          <>
                            <div className='d-flex'>
                              <button className='btn btn-sm'>
                                <FontAwesomeIcon icon={faEye} />
                              </button>
                              <button className='btn btn-sm mx-1'>
                                <FontAwesomeIcon icon={faEdit} className='text-success'  onClick={handleShow}/>
                              </button>
                              <button className='btn btn-sm mx-1' onClick={() => handleDeleteEmployee(index)}>
                                <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                              </button>
                            </div>
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
        </div>
    </div>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='border-0'>
        </Modal.Header>
        <div className='text-center'><FontAwesomeIcon icon={faTrash} className='text-danger delete-popup'/></div>
        <Modal.Body>            
          <div className='text-center'><h2>Are you sure?</h2></div>
          <div className='text-center'><p>Do you really want to delete these records? This process cannot be undone.</p></div>
        </Modal.Body>
        <Modal.Footer className='border-0'>
         <div className='d-flex justify-content-center m-auto'>
         <Button variant="secondary" className='border-0' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" className='border-0 mx-1' >
            Delete
          </Button>
         </div>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default Employeelist;
