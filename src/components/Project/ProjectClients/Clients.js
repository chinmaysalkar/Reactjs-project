import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEllipsisVertical, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { deleteClientlist } from '../../../redux/Project/Client/action';
import DeletePopUp from '../../../components/DeletePopUp';

const Clients = () => {
    const clientdata = useSelector(state => state.client.clientList);
    const dispatch = useDispatch();

    const [isOpenDropdown, setIsOpenDropdown] = useState(Array(clientdata.length).fill(false));

    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteClient = () => {
        dispatch(deleteClientlist(deleteIndex));
        setShowDeleteModal(false);
        setDeleteIndex(null); 
    };    

    const toggleDropdown = (index) => {
        const newDropdownState = [...isOpenDropdown];
        newDropdownState[index] = !newDropdownState[index];
        setIsOpenDropdown(newDropdownState);
    };

    const handleShowDeleteModal = (index) => {
        setDeleteIndex(index);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setDeleteIndex(null);
    };


    const Card = ({ index, imgclient, name, email, socialLinks, projects, dealAmount, ribbonText, ribbonColor }) => (
        <div className="col-xl-3 col-lg-4 col-md-6 mt-3 mb-3">
            <div className="card">
                <div className="card-body text-center ribbon">
                    <div className='d-flex justify-content-end'>
                        <div style={{ position: 'relative', display: 'inline-block' }} onClick={() => toggleDropdown(index)}>
                            <FontAwesomeIcon icon={faEllipsisVertical}  style={{ cursor: 'pointer', zIndex: '1' }} />
                            {isOpenDropdown[index] && (
                                <div className='p-4 mx-2 d-flex' style={{ position: 'absolute', top: '100%', left: '100%', transform: 'translateX(-100%)', zIndex: '1' }}>
                                    <Dropdown.Item href="" className='mb-2 mx-2'><FontAwesomeIcon icon={faEdit} className='mx-1 text-success' /></Dropdown.Item>
                                    <Dropdown.Item href="" className='mb-2'  onClick={() => handleShowDeleteModal(index)}><FontAwesomeIcon icon={faTrash} className='mx-1 text-danger' /></Dropdown.Item>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`ribbon-box ${ribbonColor}`}>{ribbonText}</div>
                    <img className="rounded-circle w100" src={imgclient} alt="fake_url" />
                    <h6 className="mt-3 mb-0">{name}</h6>
                    <span>{email}</span>
                    <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <Link className="p-3" target="_blank" to={item.link}>
                                    <FontAwesomeIcon icon={item.icon} className='client-social-icon'/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="btn btn-default btn-sm client-view-btn">View Profile</button>
                    <button className="btn btn-default btn-sm client-view-btn mx-2" href={`mailto:${email}`}>Email</button>
                    <div className="row text-center mt-4">
                        <div className="col-lg-6 border-right">
                            <label className="mb-0">Project</label>
                            <h4 className="font-18">{projects}</h4>
                        </div>
                        <div className="col-lg-6">
                            <label className="mb-0">Deal</label>
                            <h4 className="font-18">${dealAmount}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="row">
            {clientdata.map((client, index) => (
                <Card key={index} index={index} {...client} />
            ))}

            <DeletePopUp
                show={showDeleteModal}
                handleClose={handleCloseDeleteModal}
                handleDelete={handleDeleteClient}
            />
        </div>
    );
};

export default Clients;
