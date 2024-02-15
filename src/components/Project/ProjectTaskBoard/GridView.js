import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faX, faEye ,faEllipsisVertical, faTrash, faEdit,faShare, faDownload, faFilePdf, faFolder } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../../assets/images/avatar1.jpg'
import { FaFolder } from 'react-icons/fa';

export default function GridView() {
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggleDropdown = (cardNumber) => {
        switch (cardNumber) {
        case 1:
            setDropdownOpen1(!dropdownOpen1);
            break;
        case 2:
            setDropdownOpen2(!dropdownOpen2);
            break;
        case 3:
            setDropdownOpen3(!dropdownOpen3);
            break;
        default:
            break;
        }
    };
  return (
    <div className='pagewidth'>
        <div className='row mx-2 mt-4'>
            <div className="col-lg-4 col-md-12 mb-2">
                <div className="card planned_task">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                        <h5 className="card-title">PLANNED</h5>
                        <div className="card-options d-flex">
                            <span className="card-options-collapse" data-toggle="card-collapse">
                                <FontAwesomeIcon icon={faChevronUp} />
                            </span>
                            <span className="card-options-remove mx-2" data-toggle="card-remove">
                                <FontAwesomeIcon icon={faX} />
                            </span>

                            <div className="item-action dropdown ml-2 mx-2">
                                <a href="fake_url" data-toggle="dropdown">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </a>
                                
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faEye} />View Details
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faShare} />Share
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faDownload} />Download
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faFilePdf} />Copy to
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={FaFolder} />Move to
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faEdit} />Rename
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faTrash} />Delete
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                            
                            <li className="dd-item" data-id="1">
                                <div className="dd-handle">
                                <h6>Dashbaord</h6>
                                <span className="time text-secondary">
                                    <span className='text-secondary'>Start: 5 Aug</span> to{' '}
                                    <span className='text-secondary'>Complete: 15 Aug</span>
                                </span>
                                <p className='text-secondary'>Lorem Ipsum is simply dummy text...</p>
                                <ul className="list-unstyled team-info"> 
                                    <li>
                                        <img
                                            src={avatar1}
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Avatar"
                                            alt="Avatar"
                                            className='avatar-sml rounded-circle'
                                        />
                                    </li>
                                    
                                </ul>
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="2">
                                <div className="dd-handle">
                                <h6>New Project</h6>
                                <span className="time text-secondary">
                                    <span className="text-secondary">Start: 6 Aug</span> to{' '}
                                    <span className="text-secondary">Complete: 28  Aug</span>
                                </span>
                                <p className='text-secondary'>It is a long established fact that a reader will be distracted.</p>       
                                </div>
                            </li>

                            <li className="dd-item" data-id="3">
                                <div className="dd-handle">
                                <h6>Feed Details</h6>
                                <p className='text-secondary'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-2">
                <div className="card planned_task">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                        <h5 className="card-title">IN PROGRESS</h5>
                        <div className="card-options d-flex">
                            <span className="card-options-collapse" data-toggle="card-collapse">
                                <FontAwesomeIcon icon={faChevronUp} />
                            </span>
                            <span className="card-options-remove mx-2" data-toggle="card-remove">
                                <FontAwesomeIcon icon={faX} />
                            </span>

                            <div className="item-action dropdown ml-2 mx-2">
                                <a href="fake_url" data-toggle="dropdown">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faEye} />View Details
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faShare} />Share
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faDownload} />Download
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faFilePdf} />Copy to
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={FaFolder} />Move to
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faEdit} />Rename
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faTrash} />Delete
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                            
                            <li className="dd-item" data-id="1">
                                <div className="dd-handle">
                                <h6>New Code update</h6>
                                <p className='text-secondary'>Lorem Ipsum is simply dummy text...</p>
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="2">
                                <div className="dd-handle">
                                <h6>Meeting</h6>
                                <span className="time text-secondary">
                                    <span className="text-secondary">Start: 6 Aug</span> to{' '}
                                    <span className="text-secondary">Complete: 28  Aug</span>
                                </span>
                                <p className='text-secondary'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p> 
                                    <ul className="list-unstyled team-info"> 
                                        <li>
                                            <img
                                                src={avatar1}
                                                data-toggle="tooltip"
                                                data-placement="top"
                                                title="Avatar"
                                                alt="Avatar"
                                                className='avatar-sml rounded-circle'
                                            />
                                        </li>    
                                    </ul>      
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="3">
                                <div className="dd-handle">
                                <h6>New Project</h6>
                                <p className='text-secondary'>It is a long established fact that a reader will be distracted.</p>
                                </div>
                            </li>

                            <li className="dd-item" data-id="3">
                                <div className="dd-handle">
                                <h6>Feed Details</h6>
                                <p className='text-secondary'>here are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                </div>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-2">
                <div className="card planned_task">
                    <div className="card-header bg-white border-0 d-flex justify-content-between">
                        <h5 className="card-title">COMPLETED</h5>
                        <div className="card-options d-flex">
                            <span className="card-options-collapse" data-toggle="card-collapse">
                                <FontAwesomeIcon icon={faChevronUp} />
                            </span>
                            <span className="card-options-remove mx-2" data-toggle="card-remove">
                                <FontAwesomeIcon icon={faX} />
                            </span>

                            <div className="item-action dropdown ml-2 mx-2">
                                <a href="fake_url" data-toggle="dropdown">
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faEye} />View Details
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faShare} />Share
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faDownload} />Download
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faFilePdf} />Copy to
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={FaFolder} />Move to
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faEdit} />Rename
                                    </a>
                                    <a href="fake_url" className="dropdown-item">
                                        <FontAwesomeIcon  icon={faTrash} />Delete
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="dd" data-plugin="nestable">
                            <ol className="dd-list">
                            
                            <li className="dd-item" data-id="1">
                                <div className="dd-handle">
                                <h6>Job title</h6>                                
                                <p className='text-secondary'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                <ul className="list-unstyled team-info"> 
                                    <li>
                                        <img
                                            src={avatar1}
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Avatar"
                                            alt="Avatar"
                                            className='avatar-sml rounded-circle'
                                        />
                                    </li>
                                    
                                </ul>
                                </div>
                            </li>

                            <li className="dd-item mt-3" data-id="2">
                                <div className="dd-handle">
                                <h6>Event Done</h6>
                                <p className='text-secondary'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>       
                                </div>
                            </li>

                            <li className="dd-item" data-id="3">
                                <div className="dd-handle">
                                <h6>New Code Update</h6>
                                <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </li>
                            
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
