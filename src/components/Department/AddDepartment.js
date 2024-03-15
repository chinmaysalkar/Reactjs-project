import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addDepartment, updateDepartment } from '../../redux/HRMS/Department/action';

const AddDepartment = ({ show, handleClose, selectedDepartment }) => {
  const dispatch = useDispatch();

  const initialValues = {
    departmentname: selectedDepartment ? selectedDepartment.departmentname : '',
    departmenthead: selectedDepartment ? selectedDepartment.departmenthead : '',
    totalemployee: selectedDepartment ? selectedDepartment.totalemployee : '',
  };

  const validationSchema = Yup.object().shape({
    departmentname: Yup.string().required('Department Name is required'),
    departmenthead: Yup.string().required('Department Head is required'),
    totalemployee: Yup.number()
      .required('Number of Employees is required')
      .positive('Number of Employees must be positive')
      .integer('Number of Employees must be an integer'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newErrors = {};
    if (!values.departmentname) {
      newErrors.departmentname = 'Department Name is required';
    }
    if (!values.departmenthead) {
      newErrors.departmenthead = 'Department Head is required';
    }
    if (!values.totalemployee) {
      newErrors.totalemployee = 'Number of Employees is required';
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, handle form submission
      console.log(values);
      resetForm();
      handleClose();

      // Dispatch addDepartment action
      if (selectedDepartment) {
        dispatch(updateDepartment(selectedDepartment.id, values));
      } else {
        dispatch(addDepartment(values));
      }
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedDepartment ? 'Edit Department' : 'Add Department'}</Modal.Title>
        </Modal.Header>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ dirty, isValid }) => (
            <Form>
              <Modal.Body>
                <div className="mb-3">
                  <label htmlFor="departmentname" className="form-label">Department Name</label>
                  <Field type="text" className="form-control" id="departmentname" name="departmentname" placeholder="Department Name" />
                  <ErrorMessage name="departmentname" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="departmenthead" className="form-label">Department Head</label>
                  <Field type="text" className="form-control" id="departmenthead" name="departmenthead" placeholder="Department Head" />
                  <ErrorMessage name="departmenthead" component="div" className="text-danger" />
                </div>

                <div className="mb-3">
                  <label htmlFor="totalemployee" className="form-label">Number of Employees</label>
                  <Field type="number" className="form-control" id="totalemployee" name="totalemployee" placeholder="Number of Employees" />
                  <ErrorMessage name="totalemployee" component="div" className="text-danger" />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className="bg-danger border-0">
                  Cancel
                </Button>
                <Button variant="primary btn-top" type="submit" className="border-0" disabled={!dirty || !isValid}>
                  {selectedDepartment ? 'Save Changes' : 'Add'}
                </Button>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddDepartment;
