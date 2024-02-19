import React, {useState} from 'react'
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ListView from '../../components/Department/ListView';
// import Gridlist from '../../components/Department/Gridlist';
import { Button, Modal } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default function Department() {
  const [activeButton, setActiveButton] = useState('listview');

    const [currentComponent, setCurrentComponent] = useState('listview');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    


    const initialValues = {
      departmentName: '',
      departmentHead: '',
      numberOfEmployees: ''
    };
  
    const validationSchema = Yup.object().shape({
      departmentName: Yup.string().required('Department Name is required'),
      departmentHead: Yup.string().required('Department Head is required'),
      numberOfEmployees: Yup.number().required('Number of Employees is required').positive('Number of Employees must be positive').integer('Number of Employees must be an integer')
    });
  
    const handleSubmit = (values, { resetForm }) => {
      const newErrors = {};
      if (!values.departmentName) {
        newErrors.departmentName = 'Department Name is required';
      }
      if (!values.departmentHead) {
        newErrors.departmentHead = 'Department Head is required';
      }
      if (!values.numberOfEmployees) {
        newErrors.numberOfEmployees = 'Number of Employees is required';
      }
    
  
      if (Object.keys(newErrors).length === 0) {
        // If no errors, handle form submission
        console.log(values);
        resetForm();
        handleClose();
      }
    };


  return (

    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='department-main px-3'>
    <Header/>

    <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('listview')} className={`top-bar-btn mx-2 ${activeButton === 'listview' ? 'text-secondary border-top-2' : ''}`}>ListView</button>
        {/* <button onClick={() => handleButtonClick('gridlist')} className={`top-bar-btn mx-2 ${activeButton === 'gridlist' ? 'text-secondary border-top-2' : ''}`}>GridView</button> */}
      </div>

      <div className='d-flex pt-2'>
        <Button variant="primary" className='mx-3 btn-top' onClick={handleShow}>
          +Add
        </Button>
      </div>
    </div>

    <div>
      {currentComponent === 'listview' && <ListView />}
      {/* {currentComponent === 'gridlist' && <Gridlist />} */}
    </div>
   
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Department</Modal.Title>
            </Modal.Header>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ dirty, isValid }) => (
                <Form>
                  <Modal.Body>
                    <div className="mb-3">
                      <label htmlFor="departmentName" className="form-label">Department Name</label>
                      <Field type="text" className="form-control" id="departmentName" name="departmentName" placeholder="Department Name" />
                      <ErrorMessage name="departmentName" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="departmentHead" className="form-label">Department Head</label>
                      <Field type="text" className="form-control" id="departmentHead" name="departmentHead" placeholder="Department Head" />
                      <ErrorMessage name="departmentHead" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="numberOfEmployees" className="form-label">Number of Employees</label>
                      <Field type="number" className="form-control" id="numberOfEmployees" name="numberOfEmployees" placeholder="Number of Employees" />
                      <ErrorMessage name="numberOfEmployees" component="div" className="text-danger" />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} className='bg-danger border-0'>
                      Close
                    </Button>
                    <Button variant="primary btn-top" type="submit" className='border-0'>
                      Add
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>


    <Footer/>
    </div>
    </div>
    </>
  )
}
