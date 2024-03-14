import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../../layouts/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodoChecked } from '../../redux/Project/TodoList/action';
import TodoModal from '../../components/Project/Todo/TodoModal';
import DeletePopUp from '../../components/DeletePopUp';

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo.todoList);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const getPriorityColor = priority => {
    const lowerCasePriority = priority.toLowerCase();

    switch (lowerCasePriority) {
      case 'high':
        return '#DF84A4';

      case 'med':
      case 'medium':
        return '#F9F511';

      case 'low':
        return '#62ee7a ';

      default:
        return '#ffffff';
    }
  };

  const handleCheckboxChange = itemId => {
    dispatch(toggleTodoChecked(itemId));
  };

  const handleDelete = itemId => {
    setDeleteItemId(itemId); // Set the id of the item to delete
  };

  const confirmDelete = () => {
    if (deleteItemId !== null) {
      dispatch(deleteTodo(deleteItemId));
      setDeleteItemId(null);
    }
  };

  const handleCloseDeletePopUp = () => {
    setDeleteItemId(null);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <>
      <div className='main d-flex'>
        <Sidebar />
        <div className='pagewidth px-3'>
          <Header />

          <div className='section mt-4'>
            <div className='container-fluid'>
              <div className='row d-flex flex-wrap'>
                <div className='col-12'>
                  <div className='card d-flex flex-column'>
                    <div className='card-body'>
                      <div className='table-responsive todo_list'>
                        <table className='table table-striped table-vcenter mb-0'>
                          <thead>
                            <tr>
                              <th>
                                <button className='btn btn-info btn-sm text-white' onClick={handleShow}>
                                  Add New
                                </button>
                              </th>
                              <th className='text-right'><strong>Due</strong></th>
                              <th><strong>Priority</strong></th>
                              <th>
                                <div className='mx-2'>
                                  <FontAwesomeIcon icon={faUser} className='text-primary'/>
                                </div>
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {(todoList || []).map(todo => (
                              <tr key={todo.id}>
                                <td>
                                  <label className='custom-control custom-checkbox'>
                                    <input
                                      type='checkbox'
                                      className='form-check-input'
                                      name={`example-checkbox${todo.id}`}
                                      value={`option${todo.id}`}
                                      checked={todo.checked}
                                      onChange={() => handleCheckboxChange(todo.id)}
                                    />
                                    <span
                                      className={`custom-control-label mx-2 ${
                                        todo.checked ? 'completed' : ''
                                      }`}
                                    >
                                      {todo.task}
                                    </span>
                                  </label>
                                </td>
                                <td className='text-right'>{formatDate(todo.dueDate)}</td>
                                <td>
                                  <span
                                    className='ml-0 mr-0'
                                    style={{
                                      backgroundColor: getPriorityColor(todo.priority),
                                      padding: '4px',
                                      borderRadius: '5px',
                                      color: 'white',
                                    }}
                                  >
                                    <small>{todo.priority}</small>
                                  </span>
                                </td>
                                <td>
                                  {todo.img ? (
                                    <img
                                      src={todo.img}
                                      alt=''
                                      className='avatar rounded-circle avatar-sml'
                                    />
                                  ) : (
                                    <span className='avatar rounded-circle avatar-sml'>
                                      {todo.imgname}
                                    </span>
                                  )}
                                </td>
                                <td>
                                  <button
                                    className='btn btn-sm'
                                    onClick={() => handleDelete(todo.id)}>
                                    <FontAwesomeIcon icon={faTrash} className='text-danger' />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <DeletePopUp
        show={deleteItemId !== null}
        handleClose={handleCloseDeletePopUp}
        handleDelete={confirmDelete}
      />

      <TodoModal show={show} handleClose={handleClose} />
    </>
  );
};

export default TodoList;
