import React, {useState} from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Employeelist from '../../components/Employee/Employeelist';
import LeaveEmployee from '../../components/Employee/LeaveEmployee';
import { Button } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';
import AddModal from '../../components/Employee/AddModal';
import LeaveModal from '../../components/Employee/LeaveModal';



export default function Employee() {
  const [activeButton, setActiveButton] = useState('employeelist');
  const [currentComponent, setCurrentComponent] = useState('employeelist');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

    
  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
    setActiveButton(componentName);
    // Close modals when switching components
    setShow1(false);
    setShow2(false);
  };

    
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleAddButtonClick = () => {
    if (currentComponent === 'employeelist') {
      handleShow1();
    } else if (currentComponent === 'leaveemployee') {
      handleShow2();
    }
  };




  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='employee-main px-3'>
    <Header/>
    
    <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('employeelist')} className={`top-bar-btn mx-2 ${activeButton === 'employeelist' ? 'text-secondary border-top-2' : ''}`}>All</button>
        <button onClick={() => handleButtonClick('leaveemployee')} className={`top-bar-btn mx-2 ${activeButton === 'leaveemployee' ? 'text-secondary border-top-2' : ''}`}>Leave</button>
      </div>

      {(currentComponent === 'employeelist' || currentComponent === 'leaveemployee') && (
        <div className='d-flex pt-2'>
          <Button variant="primary" className='mx-3 btn-top' onClick={handleAddButtonClick}>
            +Add
          </Button>
        </div>
      )}
    </div>


    <div className='mt-4 mx-3'>
      {currentComponent === 'employeelist' && <Employeelist />}  
      {currentComponent === 'leaveemployee' && <LeaveEmployee />}
    </div>


    
    <AddModal show={show1} handleClose={handleClose1} />

    <LeaveModal show={show2} handleClose={handleClose2} />
    
    <Footer/>
    </div>
    </div>
    </>
  )
}
