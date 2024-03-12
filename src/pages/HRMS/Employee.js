import React, {useState} from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Employeelist from '../../components/Employee/Employeelist';
import LeaveEmployee from '../../components/Employee/LeaveEmployee';
import { Button, Modal, Form } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';



export default function Employee() {
  const [activeButton, setActiveButton] = useState('employeelist');
  const [currentComponent, setCurrentComponent] = useState('employeelist');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

    
  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
    setActiveButton(componentName);
    // Close modals when switching components
    setShow1(false);
    setShow2(false);
  };

    
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleAddButtonClick = () => {
    if (currentComponent === 'employeelist') {
      handleShow1();
    } else if (currentComponent === 'leaveemployee') {
      handleShow2();
    }
  };




  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='employee-main px-3'>
    <Header/>
    
    <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('employeelist')} className={`top-bar-btn mx-2 ${activeButton === 'employeelist' ? 'text-secondary border-top-2' : ''}`}>All</button>
        <button onClick={() => handleButtonClick('leaveemployee')} className={`top-bar-btn mx-2 ${activeButton === 'leaveemployee' ? 'text-secondary border-top-2' : ''}`}>Leave</button>
      </div>

      {(currentComponent === 'employeelist' || currentComponent === 'leaveemployee') && (
        <div className='d-flex pt-2'>
          <Button variant="primary" className='mx-3 btn-top' onClick={handleAddButtonClick}>
            +Add
          </Button>
        </div>
      )}
    </div>


    <div className='mt-4 mx-3'>
      {currentComponent === 'employeelist' && <Employeelist />}  
      {currentComponent === 'leaveemployee' && <LeaveEmployee />}
    </div>


    <Modal show={show1} onHide={handleClose1}>
      <Modal.Header closeButton>
      <Modal.Title>Add Employee</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={{
          employeeId: '',
          email: '',
          firstName: '',
          lastName: '',
          phoneNo: '',
          startDate: '',
          role: '',
          gender: '',
          facebook: '',
          twitter: '',
          linkedin: '',
          instagram: ''
        }}
        validate={(values) => {
          const errors = {};
          if (!values.employeeId) {
            errors.employeeId = 'Required';
          }

          if (!values.email) {
            errors.email = 'Required';
          }

          if (!values.firstName) {
            errors.firstName = 'Required';
          }


          if (!values.lastName) {
            errors.lastName = 'Required';
          }

          if (!values.startDate) {
            errors.startDate = 'Required';
          }

          if (!values.role) {
            errors.role = 'Required';
          }

          if (!values.gender) {
            errors.gender = 'Required';
          }
         
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Modal.Body>
              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="employeeId">Employee ID <span className='text-danger'>*</span></label>
                    <Field type="text" className="form-control" id="employeeId" name="employeeId" />
                    <ErrorMessage name="employeeId" component="div" className="text-danger" />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="email">Email ID <span className='text-danger'>*</span></label>
                    <Field type="email" className="form-control" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="firstName">First Name <span className='text-danger'>*</span></label>
                    <Field type="text" className="form-control" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" className="text-danger" />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="lastName">Last Name <span className='text-danger'>*</span></label>
                    <Field type="text" className="form-control" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" className="text-danger" />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="phoneNo">Phone No</label>
                    <Field type="text" className="form-control" id="phoneNo" name="phoneNo" />
                    <ErrorMessage name="phoneNo" component="div" className="text-danger" />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="startDate">Start Date <span className='text-danger'>*</span></label>
                    <Field type="date" className="form-control" id="startDate" name="startDate" />
                    <ErrorMessage name="startDate" component="div" className="text-danger" />
                  </div>
                </div>
              </div>

              <div className='row'>
              <div className='col-md-6'>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Role <span className='text-danger'>*</span></label>
                  <Field as="select" className="form-select" id="role" name="role">
                    <option value="">Web Designer</option>
                    <option value="">Team Lead</option>
                    <option value="">HR</option>
                  </Field>
                  <ErrorMessage name="role" component="div" className="text-danger" />
                </div>
              </div>

              <div className='col-md-6'>
              <label htmlFor="gender" className="form-label mb-2">Gender <span className='text-danger'>*</span></label>
                <Form>
                  {['radio'].map((type) => (
                    <div key={`gender-${type}`} className="mb-3 d-flex">
                      <Form.Check
                        type={type}
                        id={`male-${type}`}
                        name="gender"
                        label={`Male`}
      
                      />
                      <Form.Check 
                        type={type}
                        id={`female-${type}`}
                        name="gender"
                        label={`Female`}
                        className='mx-2'
                      /> 
                    <ErrorMessage name="gender" component="div" className="text-danger" />   
                    </div>
                  ))}
                </Form>
              </div>
              </div>


              {/* <div>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Control type="file" />
                  <Form.Label className='employeeinputbtn'>This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</Form.Label>
                </Form.Group>
              </div> */}

              <div>
              <label htmlFor="sociallinks" className="form-label mb-2">Social Links</label>
                
                <div className="mb-3">
                  <Field type="text" className="form-control" id="linkedin" name="linkedin" placeholder="Linkedin" />
                </div>
                <div className="mb-3">
                  <Field type="text" className="form-control" id="instagram" name="instagram" placeholder="Instagram" />
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose1} className='bg-danger border-0'>
                Cancel
              </Button>
              <Button type="submit" variant="primary btn-top" className='border-0' disabled={isSubmitting}>
                {isSubmitting ? 'Adding...' : 'Add'}
              </Button>
            </Modal.Footer>
          </FormikForm>
        )}
      </Formik>      
    </Modal>



    <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
      <Modal.Title>Leave Employee</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={{
          employeeId: '',
          fullName: '',
          startDate: '',
          endDate: '',
          numberOfDays: '',
          leaveType: ''
        }}
        validate={(values) => {
          const errors = {};
          if (!values.employeeId) {
            errors.employeeId = 'Required';
          }

          if (!values.fullName) {
            errors.fullName = 'Required';
          }

          if (!values.startDate) {
            errors.startDate = 'Required';
          }

          if (!values.endDate) {
            errors.endDate = 'Required';
          }

          if (!values.numberOfDays) {
            errors.numberOfDays = 'Required';
          }

          if (!values.leaveType) {
            errors.leaveType = 'Required';
          }
          
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Modal.Body>
              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="employeeId" className="form-label">Employee ID <span className='text-danger'>*</span></label>
                    <Field type="text" className="form-control" id="employeeId" name="employeeId" />
                    <ErrorMessage name="employeeId" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <Field type="text" className="form-control" id="fullName" name="fullName" />
                    <ErrorMessage name="fullName" component="div" className="text-danger" />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="startDate" className="form-label">From <span className='text-danger'>*</span></label>
                    <Field type="date" className="form-control" id="startDate" name="startDate" />
                    <ErrorMessage name="startDate" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="endDate" className="form-label">To <span className='text-danger'>*</span></label>
                    <Field type="date" className="form-control" id="endDate" name="endDate" />
                    <ErrorMessage name="endDate" component="div" className="text-danger" />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="numberOfDays" className="form-label">Numbers of Days <span className='text-danger'>*</span></label>
                    <Field type="number" className="form-control" id="numberOfDays" name="numberOfDays" />
                    <ErrorMessage name="numberOfDays" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="leaveType" className="form-label">Leave Types <span className='text-danger'>*</span></label>
                    <Field as="textarea" className="form-control" id="leaveType" name="leaveType" />
                    <ErrorMessage name="leaveType" component="div" className="text-danger" />
                  </div>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose2} className='bg-danger border-0'>
                Cancel
              </Button>
              <Button type="submit" variant="primary btn-top" disabled={isSubmitting} className='border-0'>
                {isSubmitting ? 'Applying...' : 'Apply'}
              </Button>
            </Modal.Footer>
          </FormikForm>
        )}
      </Formik>       
    </Modal>
    
    <Footer/>
    </div>
    </div>
    </>
  )
}
