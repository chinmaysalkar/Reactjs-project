import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddClient = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add Client</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="inputGroupFile01">Upload Image</label>
              <input type="file" className="form-control" id="clientimg" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input id="email" className="form-control"></input>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="companyname">Company Name</label>
              <input id="companyname" className="form-control"></input>
            </div>

            <div className="form-group mb-3">
              <label>Social Links</label>
              <div class="mb-3 mt-1">
                <input
                  type="email"
                  class="form-control"
                  id="facebook"
                  placeholder="Facebook "
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="twitter"
                  placeholder="Twitter "
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="linkedin"
                  placeholder="Linkedin"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="instagram"
                  placeholder="Instagram"
                />
              </div>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="bg-danger border-0">
            Close
          </Button>
          <Button type="submit" variant="primary" className="btn-top border-0">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddClient;
