import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Adduser() {
    const [userList] = useState([
        {  role: 'Super Admin', read: '', write: '', delete: '' },
        {  role: 'Admin', read: '', write: '',  delete: '', },
        {  role: 'Employee', read: '', write: '',  delete: '', },
        {  role: 'HR Admin', read: '', write: '',  delete: '', },
      ]);
  return (
    <div>  
        <div>
            <div className='card mt-4 mx-3 p-3'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                    <Form.Control type="email" placeholder="Employee ID*" />
                </Form.Group>
            </Form>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                    <Form.Control type="email" placeholder="First Name*" />
                </Form.Group>
                </div>
                    
                <div className='col-lg-6 col-md-6 col-sm-12'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                    <Form.Control type="email" placeholder="Last Name" />
                </Form.Group>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                        <Form.Control type="email" placeholder="Eamil ID" />
                    </Form.Group>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                        <Form.Control type="email" placeholder="Mobile No" />
                    </Form.Group>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-6 mb-3'>
                    <Form.Select aria-label="Default select example">
                        <option>select write Type</option>
                        <option value="1">Super Admin</option>
                        <option value="2">Admin</option>
                        <option value="3">Employee</option>
                    </Form.Select>
                </div>

            </div> 
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                        <Form.Control type="email" placeholder="Username*" />
                    </Form.Group>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                        <Form.Control type="email" placeholder="Password" />
                    </Form.Group>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-6'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">                  
                        <Form.Control type="email" placeholder="Confirm Password" />
                    </Form.Group>
                </div>
            </div>    
            <hr />
            <h6>Module Permission</h6>

            <div className='p-3 userlist table-responsive'>
                <table className='table table-striped p-2'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>READ</th>
                        <th>WRITE</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody> 
                    {userList.map((user, index) => (
                        <tr key={index}>
                        <td>{user.role}</td>
                        <td><input className='form-check-input' type="checkbox"/></td>                        
                        <td><input className='form-check-input' type="checkbox" /></td>
                        <td><input className='form-check-input' type="checkbox" /></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-2'>
            <Button variant="primary">Add</Button>{' '}
            <Button variant="primary">Close</Button>{' '}
            </div>

            </div>
        </div>   
    </div>
  )
}
