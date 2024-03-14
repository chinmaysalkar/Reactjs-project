import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const AddDepartment=({show, handleClose}) =>{


    
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
                      Cancel
                    </Button>
                    <Button variant="primary btn-top" type="submit" className='border-0'>
                      Add
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
    </Modal>
    </>
  )
}

export default AddDepartment;