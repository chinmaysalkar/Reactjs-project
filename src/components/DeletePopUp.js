import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';


const DeletePopUp=({ show, handleClose, handleDelete })=> {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='border-0'>
        </Modal.Header>
        <div className='text-center'><FontAwesomeIcon icon={faTrash} className='text-danger delete-popup'/></div>
        <Modal.Body>            
          <div className='text-center'><h2>Are you sure?</h2></div>
          <div className='text-center'><p>Do you really want to delete these records? This process cannot be undone.</p></div>
        </Modal.Body>
        <Modal.Footer className='border-0'>
         <div className='d-flex justify-content-center m-auto'>
         <Button variant="secondary" className='border-0' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" className='border-0 mx-1' onClick={handleDelete} >
            Delete
          </Button>
         </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default DeletePopUp;
