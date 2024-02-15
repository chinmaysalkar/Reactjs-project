import React, { useState } from 'react';
import { Button,Form } from 'react-bootstrap';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Link } from 'react-router-dom';
import Paylist from '../../components/Payroll/Paylist';
import Payslip from '../../components/Payroll/Payslip';
import Sidebar from '../../layouts/Sidebar';


export default function Payroll() {
    const [activeButton, setActiveButton] = useState('paylist');

    const [currentComponent, setCurrentComponent] = useState('paylist');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };

  
  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='payroll-main px-3'>
      
      <Header />

      <div>

      <div className='d-flex justify-content-between top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('paylist')} className={`top-bar-btn mx-2 ${activeButton === 'paylist' ? 'text-secondary border-top-2' : ''}`}>EmployeeSalary</button>
        <button onClick={() => handleButtonClick('payslip')} className={`top-bar-btn mx-2 ${activeButton === 'payslip' ? 'text-secondary border-top-2' : ''}`}>Payslip</button>
      </div>

      <div className='d-flex pt-2'>
        <Button variant="primary" className='mx-3 btn-top'>
          +Add
        </Button>
      </div>
    </div>
      
    <div className='mt-3'>
      {currentComponent === 'paylist' && <Paylist />}
      {currentComponent === 'payslip' && <Payslip />}
    </div>   

    </div>
    <Footer/>
        
    </div>
    </div>
    </>
  );
}
