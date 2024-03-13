import React from 'react'
import { Button, Modal, } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";


const LeaveModal=({show, handleClose, selectedleaveEmployee}) => {


  return (
    <>
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Leave Employee</Modal.Title>
      </Modal.Header>

      <Formik
        initialValues={{
          id: selectedleaveEmployee ? selectedleaveEmployee.id : null,
          employeeid: selectedleaveEmployee ? selectedleaveEmployee.employeeid : "",

          firstName: selectedleaveEmployee ? selectedleaveEmployee.firstName : "",
          lastName: selectedleaveEmployee ? selectedleaveEmployee.lastName : "",
          startdate: selectedleaveEmployee ? selectedleaveEmployee.startdate : "",
          enddate: selectedleaveEmployee ? selectedleaveEmployee.enddate : "",
          duration: selectedleaveEmployee ? selectedleaveEmployee.duration : "",
          reason: selectedleaveEmployee ? selectedleaveEmployee.reason : "",

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
                <div className='col-md-12'>
                  <div className="mb-3">
                    <label htmlFor="employeeId" className="form-label">Employee ID <span className='text-danger'>*</span></label>
                    <Field type="text" className="form-control" id="employeeId" name="employeeId" />
                    <ErrorMessage name="employeeId" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <Field type="text" className="form-control" id="firstname" name="firstname" />
                    <ErrorMessage name="firstname" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <Field type="text" className="form-control" id="lastname" name="lastname" />
                    <ErrorMessage name="lastname" component="div" className="text-danger" />
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="startdate" className="form-label">From <span className='text-danger'>*</span></label>
                    <Field type="date" className="form-control" id="startdate" name="startdate" />
                    <ErrorMessage name="startdate" component="div" className="text-danger" />
                  </div>
                </div>

                <div className='col-md-6'>
                  <div className="mb-3">
                    <label htmlFor="enddate" className="form-label">To <span className='text-danger'>*</span></label>
                    <Field type="date" className="form-control" id="enddate" name="enddate" />
                    <ErrorMessage name="enddate" component="div" className="text-danger" />
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
                    <label htmlFor="reason" className="form-label">Reason <span className='text-danger'>*</span></label>
                    <Field as="textarea" className="form-control" id="reason" name="reason" />
                    <ErrorMessage name="reason" component="div" className="text-danger" />
                  </div>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose} className='bg-danger border-0'>
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
    </>
  )
}

export default LeaveModal;
