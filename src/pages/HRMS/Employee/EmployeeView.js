import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import Header from "../../../layouts/Header";
import Footer from "../../../layouts/Footer";
import Sidebar from "../../../layouts/Sidebar";
import { Button } from "react-bootstrap";


const ViewEmployee = () => {

  // Statistics
  const [isCardCollapsed, setCardCollapsed] = useState(false);

  const toggleCardCollapse = () => {
    setCardCollapsed(!isCardCollapsed);
  };

  const { id } = useParams();
  const employeeList = useSelector((state) => state.employee.employeeList);
  const employee = employeeList.find((emp) => emp.id === parseInt(id)); 

  if (!employee) {
    return <div>Employee not found</div>;
  }
  


  return (
    <>
      <div className='main d-flex'>
        <Sidebar />
        <div className='employee-main px-3'>
          <Header />
          <div>
            <Link to="/employee">
              <Button variant="primary" className='mx-3 btn-top'>
                Go Back
              </Button>
            </Link>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12 col-md-12 mb-3">
              <div className="card border-0">
                <div className="card-body">
                  <div className="media mb-4">
                    <img
                      className="mr-3 border rounded"
                      src={employee.employeeimg}
                      alt="avatar"
                    />
                    <div className="media-body">
                      <h5 className="m-0">{employee.firstName} {employee.lastName}</h5>
                      <h6 className="m-0 text-secondary">{employee.email}</h6>
                      <p className="text-muted mb-0">{employee.role}</p>
                      <ul className="social-links list-inline mb-0 mt-2">
                        {employee.social.map((socialLink, index) => (
                          <li className="list-inline-item" key={index}>
                            <a
                              href={socialLink.link}
                              data-toggle="tooltip"
                              data-original-title={socialLink.title}
                            >
                              <FontAwesomeIcon icon={socialLink.icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mb-4 text-muted">
                    {employee.introduction}
                  </p>
                  <button className="btn btn-outline-primary btn-sm">
                    <span>
                      <FontAwesomeIcon icon={faTwitter} />
                    </span>{" "}
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="card card-collapsed mt-3 border-0">
              <div className="card-header border-0 bg-white d-flex justify-content-between">
                <div>
                  <h6 className="card-title">STATISTICS</h6>
                </div>

                <div className="card-options">
                  <span
                    className="card-options-collapse mx-3"
                    data-toggle="card-collapse"
                    onClick={toggleCardCollapse}
                  >
                    {isCardCollapsed ? (
                      <FontAwesomeIcon icon={faChevronDown} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronUp} />
                    )}
                  </span>
                  <span
                    className="card-options-remove "
                    data-toggle="card-remove"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </div>
              </div>

              {!isCardCollapsed && (
                <div className="card-body">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-6 pb-3">
                        <label className="mb-0">Project</label>
                        <h4 className="font-30 font-weight-bold">45</h4>
                      </div>
                      <div className="col-6 pb-3">
                        <label className="mb-0">Growth</label>
                        <h4 className="font-30 font-weight-bold">87%</h4>
                      </div>
                    </div>
                  </div>

                  {/* Laravel Progress */}
                  <div className="form-group mb-3">
                    <label className="d-block">
                      Laravel<span className="float-right">77%</span>
                    </label>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-blue"
                        role="progressbar"
                        aria-valuenow="77"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "77%" }}
                      ></div>
                    </div>
                  </div>

                  {/* HTML Progress */}
                  <div className="form-group mb-3">
                    <label className="d-block">
                      HTML<span className="float-right">50%</span>
                    </label>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Photoshop Progress */}
                  <div className="form-group mb-3">
                    <label className="d-block">
                      Photoshop <span className="float-right">23%</span>
                    </label>
                    <div className="progress progress-xs">
                      <div
                        className="progress-bar bg-green"
                        role="progressbar"
                        aria-valuenow="23"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "23%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ViewEmployee;
