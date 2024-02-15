import React, {useState} from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Employeelist from '../../components/Employee/Employeelist';
import LeaveEmployee from '../../components/Employee/LeaveEmployee';
import VIewEmplyoee from '../../components/Employee/VIewEmplyoee';
import { Button, Modal, Form } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';

export default function Employee() {
  const [activeButton, setActiveButton] = useState('employeelist');

    const [currentComponent, setCurrentComponent] = useState('employeelist');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='employee-main px-3'>
    <Header/>
    
    <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('employeelist')} className={`top-bar-btn mx-2 ${activeButton === 'employeelist' ? 'text-secondary border-top-2' : ''}`}>All</button>
        <button onClick={() => handleButtonClick('viewemplyoee')} className={`top-bar-btn mx-2 ${activeButton === 'viewemplyoee' ? 'text-secondary border-top-2' : ''}`}>View</button>
        <button onClick={() => handleButtonClick('leaveemployee')} className={`top-bar-btn mx-2 ${activeButton === 'leaveemployee' ? 'text-secondary border-top-2' : ''}`}>Leave</button>
      </div>

      <div className='d-flex pt-2'>
        <Button variant="primary" className='mx-1 btn-top' onClick={handleShow}>
          +Add
        </Button>
      </div>
    </div>


    <div className='mt-4 mx-3'>
      {currentComponent === 'employeelist' && <Employeelist />}  
      {currentComponent === 'viewemplyoee' && <VIewEmplyoee />}
      {currentComponent === 'leaveemployee' && <LeaveEmployee />}
    </div>


    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <div className='row'>
          <div className='col-md-6'>
              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Employee ID "/>
              </div>
              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Name "/>
              </div>
              <div class="mb-3">
              <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="Email ID "/>
              </div>
          </div>
          <div className='col-md-6'>
              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput4" placeholder="Phone Number "/>
              </div>
              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput5" placeholder="Start Date* "/>
              </div>
              <div class="mb-3">
              <input type="text" class="form-control" id="exampleFormControlInput6" placeholder="Role "/>
              </div>
          </div>
      </div>

      <div>
          <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" />
              <Form.Label className='employeeinputbtn'>This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</Form.Label>
          </Form.Group>
      </div>


      <div>
          <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Facebook "/>
          </div>
          <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Twitter "/>
          </div>
          <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Linkedin"/>
          </div>
          <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Instagram"/>
          </div>
      </div>   
      

      </Modal.Body>

      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
          Close
      </Button>
      <Button variant="primary btn-top" onClick={handleClose}>
          Save Changes
      </Button>
      </Modal.Footer>       
    </Modal>
    
    <Footer/>
    </div>
    </div>
    </>
  )
}
