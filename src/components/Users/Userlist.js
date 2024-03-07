import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';
import { deleteUser } from '../../redux/HRMS/UserList/action';
import { useSelector, useDispatch } from 'react-redux';


const Userlist = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.userList);
  
  const getPositionColor = (position) => {
    switch (position.toLowerCase()) {
      case 'super admin':
        return '#DF84A4 ';
      case 'admin':
        return '#3C4087';
      case 'employee':
        return '#1ddfe2 ';
      case 'hr':
        return '#69d613 ';
      default:
        return '#ffffff';
    }
  };

  const handleDeleteUser = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div className='mx-3 mt-4'>
      <div className='card p-3'>
        <div className='d-flex justify-content-between mx-2 switch-top'>
          <h6 className='mx-2 mt-3'>User LIST</h6>
          <Form className='mt-2 d-flex'>
            <Form.Control
              type='search'
              placeholder='Search something...'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </div>

        <div className='p-3 userlist'>
          <div className='table-responsive'>
            <table className='table table-striped p-2'>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th></th>
                  <th></th>
                  <th>CREATED DATE</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {(users || []).map((user, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        className="img-thumbnail rounded-circle avatar-sml"
                        src={user.imageSrc}
                        alt=''
                      />
                    </td>
                    <td>
                      <strong>{user.name}</strong>
                      <br />
                      {user.email}
                    </td>
                    <td>
                      <div className='mt-3'>
                        <span
                          style={{
                            backgroundColor: getPositionColor(user.position),
                            padding: '3px',
                            borderRadius: '5px',
                            color: 'white',
                          }}
                        >
                          {user.position}
                        </span>
                      </div>
                    </td>
                    <td><div className='mt-3'>{user.createddate}</div></td>
                    <td><div className='mt-3'>{user.role}</div></td>
                    <td>
                      <div className='mt-2'>
                        {index !== 0 && (
                          <>
                            <button className='btn btn-sm mx-1'>
                              <FontAwesomeIcon icon={faEdit} className='text-success'/>
                            </button>
                            <button
                              className='btn btn-sm mx-1'
                              onClick={() => handleDeleteUser(index)}
                            >
                              <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
