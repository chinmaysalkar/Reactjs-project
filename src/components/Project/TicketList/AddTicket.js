import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddTicket = ({ show, handleClose, initialValues, isEditMode, handleAddTicket  }) => {


  initialValues.date = initialValues.date || new Date().toISOString().substr(0, 10);

 
  const validationSchema = Yup.object().shape({
    id: Yup.string().required("ID is required"),
    title: Yup.string().required("Title is required"),
    priority: Yup.string().required("Priority is required"),
    department: Yup.string().required("Department is required"),
    agent: Yup.string().required("Agent is required"),
    date: Yup.date().required("Date is required"),
    activity: Yup.string().required("Activity is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    handleAddTicket(values);
    handleClose();
    resetForm();
  };
 


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditMode ? "Edit Ticket" : "Create Ticket"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="id">
                  ID <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="id"
                />
                <ErrorMessage
                  name="id"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title">
                  Title <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="title"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="priority">
                  Priority <span className="text-danger">*</span>
                </label>
                <Field as="select" name="priority" className="form-select">
                  <option value="">Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Field>
                <ErrorMessage
                  name="priority"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="department">
                  Department <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="department"
                />
                <ErrorMessage
                  name="department"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="agent">
                  Agent <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="agent"
                />
                <ErrorMessage
                  name="agent"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date">
                  Date <span className="text-danger">*</span>
                </label>
                <Field
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  name="date"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="activity">
                  Activity <span className="text-danger">*</span>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder=""
                  name="activity"
                />
                <ErrorMessage
                  name="activity"
                  component="div"
                  className="text-danger"
                />
              </div>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="bg-danger border-0"
              >
                Close
              </Button>
              <Button
                variant="primary"
                className="mx-2 btn-top border-0"
                type="submit"
              >
                {isEditMode ? "Save Changes" : "Create"}
              </Button>
            </form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AddTicket;

