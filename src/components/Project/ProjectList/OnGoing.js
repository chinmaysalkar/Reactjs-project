// OnGoing.js
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faEllipsisVertical, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProjectlist, toggleCardCollapse, toggleDropdown } from '../../../redux/Project/ProjectList/ProjectOnGoing/action';
import DeletePopUp from '../../DeletePopUp';

const OnGoing = () => {
  const [deleteIndex, setDeleteIndex] = useState(null);

  const projectData = useSelector(state => state.project.projectList);
  const isCardCollapsed = useSelector(state => state.project.isCardCollapsed || []);
  const isOpenDropdown = useSelector(state => state.project.isOpenDropdown || []);
  const dispatch = useDispatch();

  const getTechColor = (tag) => {
    if (!tag) return '#ffffff'; 
    switch (tag.toLowerCase()) {
      case 'web design':
        return '#3C4087';
      case 'angular':
        return '#DF84A4';
      case 'android':
        return '#B5E850';
      case 'wordpress':
        return ' #72c4f7 ';
      case 'ios app':
        return ' #383a3b ';
      default:
        return '#ffffff';
    }
  };

  const handleDeleteProject = index => {
    setDeleteIndex(index);
  };

  const handleToggleCardCollapse = index => {
    dispatch(toggleCardCollapse(index));
  };

  const handleToggleDropdown = index => {
    dispatch(toggleDropdown(index));
  };

  const confirmDelete = () => {
    dispatch(deleteProjectlist(deleteIndex));
    setDeleteIndex(null);
  };

  return (
    <div className='pagewidth'>
      <div className="row mt-3 mx-1">
        {projectData.map((project, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-12">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between bg-white border-0 mt-3">
                <h6 className="card-title">{project.title}</h6>
                <div className="card-options d-flex">
                  <Form.Check type="switch" id="custom-switch" />
                  <span
                    className="card-options-collapse mx-2"
                    onClick={() => handleToggleCardCollapse(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    {isCardCollapsed[index] ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronUp} />
                    )}
                  </span>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <FontAwesomeIcon icon={faEllipsisVertical} onClick={() => handleToggleDropdown(index)} style={{ cursor: 'pointer', zIndex: '1' }} />
                    {isOpenDropdown[index] && (
                      <div className='p-4 mx-2 d-flex' style={{ position: 'absolute', top: '100%', left: '100%', transform: 'translateX(-100%)', zIndex: '1' }}>
                        <Dropdown.Item href="" className='mb-2 mx-2'><FontAwesomeIcon icon={faEdit} className='mx-1 text-success' /></Dropdown.Item>
                        <Dropdown.Item href="" className='mb-2' onClick={() => handleDeleteProject(index)}><FontAwesomeIcon icon={faTrash} className='mx-1 text-danger' /></Dropdown.Item>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {!isCardCollapsed[index] && (
                <>
                  <div className="card-body">
                    <small> <span className='px-2' style={{
                      backgroundColor: getTechColor(project.tag),
                      padding: '3px',
                      borderRadius: '5px',
                      color: 'white',
                    }}>{project.tag}</span></small>
                    <p className='mt-4'>{project.description}</p>
                    <div className="row">
                      {/* Other project details */}
                      <div className=""><strong>Created:</strong>
                      <p className='text-secondary'>{project.created}</p>
                      </div>
                      <div className=""><strong>Creator:</strong>
                      <p className='text-secondary'>{project.creator}</p>
                      </div>
                      <div className="py-1"><strong>Team:</strong></div>
                      <div className="col-7 py-1">

                        <div class="avatar-container d-flex">
                            {project.team.slice(0, 3).map((avatar, avatarIndex) => (
                                <img
                                key={avatarIndex}
                                class="img-thumbnail rounded-circle avatar-sml avatar-img-stack"
                                src={avatar}
                                alt={`Team member ${avatarIndex + 1}`}
                                />
                            ))}
                            {project.team.length > 3 && (
                              <span class="remaining-count">{project.team.length - 3} more</span>
                            )}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="card-footer bg-white mb-3">
                    <div className="d-flex justify-content-between">
                      <div className=""><strong>{project.progress}%</strong></div>
                      <div className=""><small className="text-muted">Progress</small></div>
                    </div>
                    <div className="progress progress-xs">
                      <div className={`progress-bar ${project.progressColor}`} role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <DeletePopUp
        show={deleteIndex !== null}
        handleClose={() => setDeleteIndex(null)}
        handleDelete={confirmDelete}
      />
    </div>
  );
}

export default OnGoing;
