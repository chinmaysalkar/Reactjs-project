import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../../redux/HRMS/Emplyoee/action";

const AddModal = ({ show, handleClose, selectedEmployee }) => {
  const dispatch = useDispatch();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedEmployee ? "Edit Employee" : "Add Employee"}
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          id: selectedEmployee ? selectedEmployee.id : null,
          employeeid: selectedEmployee ? selectedEmployee.employeeid : "",
          email: selectedEmployee ? selectedEmployee.email : "",
          firstName: selectedEmployee ? selectedEmployee.firstName : "",
          lastName: selectedEmployee ? selectedEmployee.lastName : "",
          phone: selectedEmployee ? selectedEmployee.phone : "",
          joindate: selectedEmployee
            ? selectedEmployee.joindate
            : new Date().toISOString().split("T")[0],
          role: selectedEmployee ? selectedEmployee.role : "",
          gender: selectedEmployee ? selectedEmployee.gender : "",
          linkedin: selectedEmployee ? selectedEmployee.linkedin : "",
          instagram: selectedEmployee ? selectedEmployee.instagram : "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.employeeid) {
            errors.employeeid = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.joindate) {
            errors.joindate = "Required";
          }
          if (!values.role) {
            errors.role = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (selectedEmployee){
            dispatch(updateEmployee(values)); 
          } else {
            dispatch(addEmployee(values));
          }  
          setSubmitting(false);
          handleClose();
        }}
      >
        {({ isSubmitting }) => (
          <FormikForm>
            <Modal.Body>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="employeeid">
                      Employee ID <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="employeeid"
                      name="employeeid"
                    />
                    <ErrorMessage
                      name="employeeid"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email">
                      Email ID <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastName">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone">Phone No</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="joindate">
                      Start Date <span className="text-danger">*</span>
                    </label>
                    <Field
                      type="date"
                      className="form-control"
                      id="joindate"
                      name="joindate"
                    />
                    <ErrorMessage
                      name="joindate"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role <span className="text-danger">*</span>
                    </label>
                    <Field
                      as="select"
                      className="form-select"
                      id="role"
                      name="role"
                    >
                      <option value="">Select Role</option>
                      <option value="Web Designer">Web Designer</option>
                      <option value="Team Lead">Team Lead</option>
                      <option value="HR">HR</option>
                    </Field>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label mb-2">
                    Gender <span className="text-danger">*</span>
                  </label>
                  <Form>
                    {["radio"].map((type) => (
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
                          className="mx-2"
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </div>

              <div>
                <label htmlFor="sociallinks" className="form-label mb-2">
                  Social Links
                </label>

                <div className="mb-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="linkedin"
                    name="linkedin"
                    placeholder="Linkedin"
                  />
                </div>
                <div className="mb-3">
                  <Field
                    type="text"
                    className="form-control"
                    id="instagram"
                    name="instagram"
                    placeholder="Instagram"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="bg-danger border-0"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary btn-top"
                className="border-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Updating..." : "Update"}
              </Button>
            </Modal.Footer>
          </FormikForm>
        )}
      </Formik>
    </Modal>
  );
};

export default AddModal;
