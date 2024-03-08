import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Sidebar from '../../layouts/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {deleteHoliday, addHoliday} from '../../redux/HRMS/Holiday/action';

const Holidays=()=> {


    const dispatch = useDispatch();
    const holidays = useSelector(state => state.holiday.holidayList);
    const [show, setShow]= useState(false);
    const [holidayData, setHolidayData] = useState({
      name: '',
      date: '',
      day: '' 
    });
    
    const handleDeleteHoliday = (index) =>{
      dispatch(deleteHoliday(index));
    }   

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEdit = (index) => {
      console.log("Edit holiday at index:", index);
    };
    

    const handleChange = (e) => {
      const { name, value } = e.target;
      setHolidayData({ ...holidayData, [name]: value });
   };

    const handleSubmit = () => {
        dispatch(addHoliday(holidayData)); 
        handleClose(); 
        setHolidayData({ name: '', date: '', day: '' });
    };
   

  return (
    <>
    <div className='main d-flex'>
    <Sidebar/>
    <div className='holiday-main px-3'>

        <div>
        <Header/>
        </div>

        <div className='d-flex justify-content-end mx-3'>
            <Button variant="primary" className='btn-top' onClick={handleShow}>
              +  Add Holiday
            </Button>
        </div>

        <div className='holidays card p-4 mt-4 mx-3 table-responsive'>
            <table className="table table_custom spacing5 table-hover">
                <thead>
                <tr>
                    <th scope="col">DAY</th>
                    <th scope="col">DATE</th>
                    <th scope="col">HOLIDAY</th>
                    <th scope="col">ACTION</th>
                </tr>
                </thead>
                <tbody>
                {(holidays || []).map((holiday, index) => (
                    <tr key={index}>
                    <td>{holiday.day}</td>
                    <td>{holiday.date}</td>
                    <td>{holiday.holiday}</td>
                    <td>
                        <button className='btn btn-sm mx-1' onClick={() => handleEdit(index)}>
                            <FontAwesomeIcon icon={faEdit} className='text-success'/>
                        </button>

                        <button className='btn btn-sm mx-1' onClick={() => handleDeleteHoliday(index)}>
                            <FontAwesomeIcon icon={faTrash} className='text-danger'/>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        <div>
        <Footer/>
        </div>  
    </div>
    </div>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Holiday</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Holiday Name</Form.Label>
                    <Form.Control type="text" name="holiday" value={holidayData.holiday} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Holiday Date</Form.Label>
                    <Form.Control type="date" name="date" value={holidayData.date} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Holiday Day</Form.Label>
                    <Form.Select name="day" value={holidayData.day} onChange={handleChange}>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                        <option value="Sunday">Sunday</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Add
            </Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}

export default Holidays;
