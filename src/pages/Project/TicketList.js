import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Sidebar from '../../layouts/Sidebar';

export default function TicketList() {
    const ticketData = [
        {
          id: 'ASD-5258',
          title: 'It is a long established fact that a reader',
          priority: 'lower',
          priorityClass: 'tag-default',
          department: 'Pre-Sales',
          agent: 'Archie Cantones',
          date: '6 hours ago',
          activity: 'No reply yet',
          
        },
        {
          id: 'ASD-8793',
          title: 'Measures your Current Assets / Current',
          priority: 'High',
          priorityClass: 'tag-danger',
          department: 'Pre-Sales',
          agent: 'Rose Orcullo',
          date: '9 hours ago',
          activity: '2 reply',
          
        },
        {
          id: 'ASD-2500',
          title: 'There are many variations of passages',
          priority: 'Medium',
          priorityClass: 'tag-info',
          department: 'Pre-Sales',
          agent: 'Charize Cericoz',
          date: '10 hours ago',
          activity: '1 reply',
          
        },

        {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
           
          },

          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
           
          },
          
          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },


          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },


          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },

          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
            
          },

          {
            id: 'ASD-2500',
            title: 'There are many variations of passages',
            priority: 'Medium',
            priorityClass: 'tag-info',
            department: 'Pre-Sales',
            agent: 'Charize Cericoz',
            date: '10 hours ago',
            activity: '1 reply',
           
          },
       
      ];
  return (
    <>
    <div className='main d-flex'>
        <Sidebar/>
        <div className='pagewidth px-3'>
        <Header/>

        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className="row">
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="id" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Priority" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Department" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Agent" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 mb-1">
                                    <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Date" />
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6 d-grid">
                                    <button href="fake_url" className="btn btn-sm btn-primary btn-top">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <div className='card'>
                        <div className="table-responsive">
                            <table className="table  table-striped table-vcenter ticket-table mb-0">
                                <thead>
                                <tr>
                                    <th colSpan="5"> <span className='mx-5'>Ticket Detail</span></th>
                                    <th colSpan="3"> Activity</th>
                                </tr>
                                <tr>
                                    <th className='bg-secondary'>&nbsp;</th>
                                    <th className='bg-secondary'>ID</th>
                                    <th className='bg-secondary'>Title</th>
                                    <th className='bg-secondary'>Priority</th>
                                    <th className='bg-secondary'>Department</th>
                                    <th className='bg-secondary'>Agent</th>
                                    <th className='bg-secondary'>Date</th>
                                    <th className='bg-secondary'>Activity</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ticketData.map((ticket, index) => (
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
                                        <span className="custom-control-label">&nbsp;</span>
                                        </label>
                                    </td>
                                    <td>
                                        <a className='text-secondary' href={`/#${ticket.id}`}>{ticket.id}</a>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.title}</span>
                                    </td>
                                    <td>
                                        <span className={`text-secondary tag ${ticket.priorityClass}`}>{ticket.priority}</span>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.department}</span>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.agent}</span>
                                    </td>
                                    <td>
                                        <span className='text-secondary'>{ticket.date}</span>
                                    </td>
                                    <td className='text-secondary'>{ticket.activity}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
    </div>
    </>
  )
}
