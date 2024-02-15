import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Expenses from '../../components/Report/Expenses'
import Invoice from '../../components/Report/Invoice'
import Detail from '../../components/Report/Detail'
import Sidebar from '../../layouts/Sidebar'
export default function Report() {

    const [activeButton, setActiveButton] = useState('expenses');

    const [currentComponent, setCurrentComponent] = useState('expenses');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };

  
  

  return (
   <>
   <div className='main d-flex'>
    <Sidebar/>
    <div className='report-main px-3'>
      <Header/>

        
        <div className='d-flex justify-content-between top-change-btn'>
          <div className='all-top'>
            <button onClick={() => handleButtonClick('expenses')} className={`top-bar-btn mx-2 mb-2 ${activeButton === 'expenses' ? 'text-secondary border-top-2' : ''}`}>Expenses</button>
            <button onClick={() => handleButtonClick('invoice')} className={`top-bar-btn mx-2 ${activeButton === 'invoice' ? 'text-secondary border-top-2' : ''}`}>invoice</button>
            <button onClick={() => handleButtonClick('details')} className={`top-bar-btn mx-2 ${activeButton === 'details' ? 'text-secondary border-top-2' : ''}`}>Details</button>
          </div>

          <div className='d-flex pt-2'>
           <select class="custom-select p-2 mx-1">
              <option>Year</option>
              <option>Month</option>
              <option>Week</option>
            </select>
            <Button variant="primary" className='mx-3 btn-top'>
              +Add
            </Button>
          </div>
        </div>

      <div>
      {currentComponent === 'expenses' && <Expenses />}
      {currentComponent === 'invoice' && <Invoice />}
      {currentComponent === 'details' && <Detail />}
      </div>

      



       
      <Footer/>  
    </div>
   </div>
   </>
  )
}
