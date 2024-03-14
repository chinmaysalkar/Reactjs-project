import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/Project/TodoList/action';

const TodoModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    setDueDate(currentDate);
  }, [show]);

  const handleAddTodo = () => {
    dispatch(addTodo({
      task,
      dueDate,
      priority
    }));
    setTask(''); //For Reset field after Add Todo
    setDueDate(''); 
    setPriority(''); 
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTask">
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Enter task" value={task} onChange={(e) => setTask(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className='bg-danger border-0'>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddTodo} className='btn-top border-0'>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TodoModal;
