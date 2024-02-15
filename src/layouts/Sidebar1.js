import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faComment, faFolder, faCalendar, faCreditCard, faSearch,faGear,faRocket,faMugHot, faSuitcase, faLock, faMapLocation, faBarChart,faTag, faLayerGroup, faPuzzlePiece, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'; 
import logo from '../assets/images/command-symbol-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import avatar from '../assets/images/avatar1.jpg'



const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="wrapper">
    
      <aside id="sidebar" className={` sid ${isSidebarExpanded ? 'expand' : ''}`}>

       
      <div className='mt-3 d-flex justify-content-between'>
        <div className='logo mx-3'>
        <Link to="/"><img src={logo} alt="" className='logo1 mx-2  mt-2'/></Link>
        </div>  
        
        <div className='mx-5' style={{ display: isSidebarExpanded ? 'block' : 'none' }}>
        <h5 className='d-flex'>Epic<span className='mx-1'>HR</span></h5> 
        </div>    
      </div>
       
      
      
      <ul className="sidebar-nav">

        <div className='row'>
          <div className='col-md-2'>
            <li className="sidebar-item">
            <Link to="/search" className="sidebar-link">
            <FontAwesomeIcon icon={faSearch} className='sideicon'/>
              
            </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/calender" className="sidebar-link">
              <FontAwesomeIcon icon={faCalendar}className='sideicon' />
                
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/contact" className="sidebar-link">
              <FontAwesomeIcon icon={faCreditCard} className='sideicon'/>
              
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/friendgroup" className="sidebar-link">
              <FontAwesomeIcon icon={faComment} className='sideicon'/>
                <i className="lni lni-agenda"></i>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/filemanager" className="sidebar-link">
              <FontAwesomeIcon icon={faFolder} className='sideicon'/>
                <i className="lni lni-agenda"></i>
              </Link>
            </li>
          </div>

          <div className='col-md-3 sidebar-menu' style={{ display: isSidebarExpanded ? 'block' : 'none' }}>
            {/* <div className="d-flex">   
              <div className="sidebar-logo d-flex justify-content-end mx-4 position-absolute top-0 mt-3">  
                <h2 className='mx-5'>Epic HR</h2>            
              </div>
            </div> */}

            <div id="sidebar2">
            <small className='mx-4 text-secondary'>DIRECTORIES</small>
            <li className="sidebar-item">
              <a
                href="/side"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#hrms"
                aria-expanded="false"
                aria-controls="hrms"
              > 
                <FontAwesomeIcon icon={faRocket} style={{color:'black'}}/>
                <span className='mx-1'>HRMS</span>
              </a>
              <ul
                id="hrms"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link to="/" className="sidebar-link">
                    Dashboard
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/users" className="sidebar-link">
                    Users
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/department" className="sidebar-link">
                    Department
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/employee" className="sidebar-link">
                    Employee
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/activities" className="sidebar-link">
                    Activities
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/holidays" className="sidebar-link">
                    Holidays
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/events" className="sidebar-link">
                    Events
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/payroll" className="sidebar-link">
                    Payroll
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/accounts" className="sidebar-link">
                    Accounts
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/report" className="sidebar-link">
                    Report
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-item">
              <a
                href="/side"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#project"
                aria-expanded="false"
                aria-controls="project"
              >
                <FontAwesomeIcon icon={faMugHot} style={{color:'black'}}/>
                <span className='mx-1'>Project</span>
              </a>
              <ul
                id="project"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link to="/projectdashboard" className="sidebar-link">
                    Dashboard
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/projectlist" className="sidebar-link">
                    Project List
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/projecttaskboard" className="sidebar-link">
                    Taskboard
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/ticketlist" className="sidebar-link">
                    Ticket List
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/ticketdetails" className="sidebar-link">
                    Ticket Details
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/clients" className="sidebar-link">
                    clients 
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/todolist" className="sidebar-link">
                    Todo List
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-item">
              <a
                href="/side"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#jobPortal"
                aria-expanded="false"
                aria-controls="jobPortal"
              >
                <FontAwesomeIcon icon={faSuitcase} style={{color:'black'}}/>
                <span className='mx-1'>Job Portal</span>
              </a>
              <ul
                id="jobPortal"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link to="/jobdashboard" className="sidebar-link">
                    Job Dashboard
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/positions" className="sidebar-link">
                    Positions
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/applicants" className="sidebar-link">
                    Applicant
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/resumes" className="sidebar-link">
                    Resumes
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/settings" className="sidebar-link">
                    Settings
                  </Link>
                </li>

              </ul>
            </li>

            <li className="sidebar-item">
              <a
                href="/side"
                className="sidebar-link collapsed has-dropdown"
                data-bs-toggle="collapse"
                data-bs-target="#authentication"
                aria-expanded="false"
                aria-controls="authentication"
              >
                <FontAwesomeIcon icon={faLock} style={{color:'black'}}/>
                <span className='mx-1'>Authentication</span>
              </a>
              <ul
                id="authentication"
                className="sidebar-dropdown list-unstyled collapse"
                data-bs-parent="#sidebar"
              >
                <li className="sidebar-item">
                  <Link to="/login" className="sidebar-link">
                    Login
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/register" className="sidebar-link">
                    Register
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/forgotpassword" className="sidebar-link">
                    Forgot Password
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/error404" className="sidebar-link">
                    404 error
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link to="/error500" className="sidebar-link">
                    500 Error
                  </Link>
                </li>
              </ul>
            </li>


            <small className='mx-4 text-secondary'>UI ELEMENTS</small>
            <li className="sidebar-item mx-4">
              <div className='side-icon-ui'>
                <Link to="/icons">
                <FontAwesomeIcon icon={faTag} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Icons</span>
                </Link>
                
              </div>

              <div className='side-icon-ui'>
                <Link to="/charts">
                <FontAwesomeIcon icon={faBarChart} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Charts</span>
                </Link>
                
              </div>

              <div className='side-icon-ui'>
                <Link to="/forms">
                <FontAwesomeIcon icon={faLayerGroup} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Form</span>
                </Link>
                
              </div>

              <div className='side-icon-ui'>
                <Link to="/tables">
                <FontAwesomeIcon icon={faTag} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Tables</span>
                </Link>
                
              </div>

              <div className='side-icon-ui'>
                <Link to="/widgets">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Widgets</span>
                </Link>
                
              </div>

              <div className='side-icon-ui'>
                <Link to="/maps">
                <FontAwesomeIcon icon={faMapLocation} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Maps</span>
                </Link>
                
              </div>

              <div className='side-icon-ui'>
                <Link to="/gallery"><FontAwesomeIcon icon={faPhotoFilm} style={{color:'black'}} className='mt-3'/>
                <span className='mx-1'>Gallery</span></Link>               
              </div>
              

            </li>

            </div>
          </div>
        </div>  

      </ul>


      <div className="sidebar-footer pb-3">  
        
        <button className="toggle-btn mx-1" type="button" onClick={toggleSidebar} >
          <FontAwesomeIcon icon={faAlignLeft}/>
        </button>

        <Link to="/side" className="sidebar-link">
          <FontAwesomeIcon icon={faGear} className='side-setting-icon'/>      
        </Link>

        <Link to=""><img src={avatar} alt="" className='avatar rounded-circle avatar-sml mx-3' /></Link>

      </div>

      </aside>

    </div>
  );
};

export default Sidebar;
