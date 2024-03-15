import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addTicketList,
  updateTicketList,
  deleteTicketList,
} from "../../redux/Project/TicketList/action";
import AddTicket from "../../components/Project/TicketList/AddTicket";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Button from "react-bootstrap/Button";
import DeletePopUp from "../../components/DeletePopUp";

const TicketList = () => {
  const dispatch = useDispatch();
  const ticketList = useSelector((state) => state.ticket.ticketList);

  const [show, setShow] = useState(false);
  const [editTicket, setEditTicket] = useState(null);

  const handleClose = () => {
    setShow(false);
    setEditTicket(null);
  };

  const handleShow = () => setShow(true);

  const handleAddTicket = (ticketData) => {
    if (editTicket) {
      dispatch(updateTicketList(ticketData));
    } else {
      dispatch(addTicketList(ticketData));
    }
    handleClose();
  };

  const handleEditTicket = (ticket) => {
    setEditTicket(ticket);
    setShow(true);
  };

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [ticketToDeleteIndex, setTicketToDeleteIndex] = useState(null);

  const showDeletePopupHandler = (index) => {
    setTicketToDeleteIndex(index);
    setShowDeletePopup(true);
  };

  const hideDeletePopupHandler = () => {
    setShowDeletePopup(false);
  };

  const handleDeleteTicket = () => {
    dispatch(deleteTicketList(ticketToDeleteIndex));
    hideDeletePopupHandler();
  };

  return (
    <>
      <div className="main d-flex">
        <Sidebar />
        <div className="pagewidth px-3">
          <Header />
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ID"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                        <div className="input-group">
                          <select name="priority" className="form-select">
                            <option value="">Select Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Department"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agent"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Date"
                          />
                        </div>
                      </div>

                      <div className="col-lg-2 col-md-4 col-sm-6 d-grid">
                        <button
                          href="fake_url"
                          className="btn btn-sm btn-primary btn-top"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <Button
                  variant="primary"
                  className="btn-top mb-2"
                  onClick={handleShow}
                >
                  + Add Ticket
                </Button>
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-striped table-vcenter ticket-table mb-0">
                      <thead>
                        <tr>
                          <th className="bg-secondary">&nbsp;</th>
                          <th className="bg-secondary">ID</th>
                          <th className="bg-secondary">Title</th>
                          <th className="bg-secondary">Priority</th>
                          <th className="bg-secondary">Department</th>
                          <th className="bg-secondary">Agent</th>
                          <th className="bg-secondary">Date</th>
                          <th className="bg-secondary">Activity</th>
                          <th className="bg-secondary">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ticketList.map((ticket, index) => (
                          <tr key={index}>
                            <td>
                              <label className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input mx-1"
                                  name={`example-checkbox${index}`}
                                  value={`option${index}`}
                                  checked={ticket.checked}
                                />
                                <span className="custom-control-label">
                                  &nbsp;
                                </span>
                              </label>
                            </td>
                            <td>
                              <a
                                className="text-secondary"
                                href={`/#${ticket.id}`}
                              >
                                {ticket.id}
                              </a>
                            </td>
                            <td>
                              <span className="text-secondary">
                                {ticket.title}
                              </span>
                            </td>
                            <td>
                              <span
                                className={`text-secondary tag ${ticket.priorityClass}`}
                              >
                                {ticket.priority}
                              </span>
                            </td>
                            <td>
                              <span className="text-secondary">
                                {ticket.department}
                              </span>
                            </td>
                            <td>
                              <span className="text-secondary">
                                {ticket.agent}
                              </span>
                            </td>
                            <td>
                              <span className="text-secondary">
                                {ticket.date}
                              </span>
                            </td>
                            <td className="text-secondary">
                              {ticket.activity}
                            </td>
                            <td>
                              <>
                                <button
                                  className="btn btn-sm mx-1"
                                  onClick={() => handleEditTicket(ticket)}
                                >
                                  <FontAwesomeIcon
                                    icon={faEdit}
                                    className="text-success"
                                  />
                                </button>
                                <button
                                  className="btn btn-sm mx-1"
                                  onClick={() => showDeletePopupHandler(index)}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    className="text-danger"
                                  />
                                </button>
                              </>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddTicket
        show={show}
        handleClose={handleClose}
        initialValues={
          editTicket || {
            id: "",
            title: "",
            priority: "",
            department: "",
            agent: "",
            date: "",
            activity: "",
          }
        }
        isEditMode={editTicket ? true : false}
        handleAddTicket={handleAddTicket}
      />

      <DeletePopUp
        show={showDeletePopup}
        handleClose={hideDeletePopupHandler}
        handleDelete={handleDeleteTicket}
      />
    </>
  );
};

export default TicketList;
