import React, {useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Link } from 'react-router-dom';
import Sidebar from '../../layouts/Sidebar';
import Clients from '../../components/Project/ProjectClients/Clients';
import AddClient from '../../components/Project/ProjectClients/AddClient';


export default function ProjectClients() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <>
    <div className='main d-flex'>
        <Sidebar/>
        <div className='pagewidth px-3'>
        <Header/>

        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="row">
                                
                                <div className="col-lg-4 col-md-4 col-sm-6  mb-2">
                                    <div className="input-group mx-2">
                                    <input type="text" className="form-control" placeholder="Client Name" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-2">
                                    <div className="input-group mx-2">
                                    <input type="text" className="form-control" placeholder="Project" />
                                    </div>
                                </div>
                            
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Link to="" className="btn btn-sm btn-primary btn-block btn-top mx-2">
                                    Search
                                    </Link>
                                    
                                    <Link to="" className="btn btn-sm btn-primary btn-block btn-top" onClick={handleShow}>
                                    Add New
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Clients/>

            </div>           
        </div>

       

        <Footer/>
    </div>
    </div>


        {/* Modal For Add Clients */}
        <AddClient
         show={show} 
         handleClose={handleClose}
        />
    </>
  )
}
