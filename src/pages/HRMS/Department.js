import React, {useState} from 'react'
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import ListView from '../../components/Department/ListView';
// import Gridlist from '../../components/Department/Gridlist';
import { Button, } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';
import AddDepartment from '../../components/Department/AddDepartment';


export default function Department() {
  const [activeButton, setActiveButton] = useState('listview');

    const [currentComponent, setCurrentComponent] = useState('listview');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

  return (

    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='department-main px-3'>
    <Header/>

    <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('listview')} className={`top-bar-btn mx-2 ${activeButton === 'listview' ? 'text-secondary border-top-2' : ''}`}>ListView</button>
        {/* <button onClick={() => handleButtonClick('gridlist')} className={`top-bar-btn mx-2 ${activeButton === 'gridlist' ? 'text-secondary border-top-2' : ''}`}>GridView</button> */}
      </div>

      <div className='d-flex pt-2'>
        <Button variant="primary" className='mx-3 btn-top' onClick={handleShow}>
          +Add
        </Button>
      </div>
    </div>

    <div>
      {currentComponent === 'listview' && <ListView />}
      {/* {currentComponent === 'gridlist' && <Gridlist />} */}
    </div>
   

    <AddDepartment
    show={show}
    handleClose={handleClose}
    />


    <Footer/>
    </div>
    </div>
    </>
  )
}
