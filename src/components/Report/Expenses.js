import React,{useState} from 'react'
import avatar1 from '../../assets/images/avatar1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal, faCcMastercard } from '@fortawesome/free-brands-svg-icons';

import { faEdit, faTrash, } from '@fortawesome/free-solid-svg-icons';

export default function Expenses() {

  const itemsPerPage = 10;
  const [currentPage] = useState(1);

  const [userList] = useState([
    {  purchasedate: '07 March, 2018',item: 'HP Laptop',imageSrc:  avatar1,orderby: 'Marshall Nichols',amount: '$200', status: 'Pending',    paidby:'Paypal', purchasefrom: 'Paytm',action: '' },
    {  purchasedate: '25 Jun, 2018',item: 'iMack Desktop ',imageSrc:  avatar1,orderby: ' Marshall Nichols', amount: '$378', status: 'Pending',   paidby:'Paypal', purchasefrom: 'ebay USA',action: '' },
    {  purchasedate: '12 July, 2018',item: 'Logitech USB Mouse, Keyboard ',imageSrc:  avatar1,orderby: ' Debra Stewart',amount: '$653', status: 'Approved',   paidby:'Paypal', purchasefrom: 'Amazon',action: '' },
    {  purchasedate: '13 July, 2018',item: 'MacBook Pro Air',imageSrc:  avatar1,orderby: ' Marshall Nichols',amount: ' $451', status: 'Approved',  paidby:'MasterCard', purchasefrom: 'Amazon',action: '' },
    {  purchasedate: '27 July, 2018',item: 'Dell Monitor 28 inch',imageSrc:  avatar1,orderby: ' Ava Alexander',amount: ' $989', status: 'Approved',  paidby:'Paypal', purchasefrom: 'Flipkart Uk',action: '' },
    {  purchasedate: '07 March, 2018',item: 'Logitech USB Mouse, Keyboard',imageSrc:  avatar1,orderby: ' Marshall Nichols',amount: ' $343', status: 'Approved',   paidby:'Paypal', purchasefrom: 'Amazon',action: '' },
    {  purchasedate: '25 Jun, 2018',item: 'MacBook Pro Air',imageSrc:  avatar1,orderby: ' Debra Stewart',amount: ' $653', status: 'Approved',   paidby:'MasterCard', purchasefrom: 'Amazon',action: '' },
  ]);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return '#6add10 '; 
      case 'pending':
        return '#FFC107'; 
      
      default:
        return '#ffffff'; 
    }
  };

  const renderPaidByIcon = (paidBy) => {
    if (paidBy === 'Paypal') {
      return <FontAwesomeIcon icon={faPaypal} />;
    }
    if (paidBy === 'MasterCard') {
        return <FontAwesomeIcon icon={faCcMastercard} />;
      }

    return null;
  };
  
  
  
  // Calculate start and end indices based on the current page and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentPageItems = userList.slice(startIndex, endIndex);

  return (
    <div>
      
      <div className="row mx-2 mt-3">
        <div className="col-lg-3 col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
              <div className="card-value d-flex justify-content-end text-primary">23%</div>
              <h4 className="mb-1">
                $<span className="counter"><span>552</span></span>
              </h4>
              <div>Computer</div>
              <div className="mt-4">
                <div className="progress progress-xs">
                  <div className="progress-bar bg-azure" style={{ width: '23%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
              <div className="card-value d-flex justify-content-end text-primary">52%</div>
              <h4 className="mb-1">
                $<span className="counter"><span>2450</span></span>
              </h4>
              <div>Laptop</div>
              <div className="mt-4">
                <div className="progress progress-xs">
                  <div className="progress-bar bg-cyan" style={{ width: '52%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-2">
          <div className="card">
            <div className="card-body">
              <div className="card-value d-flex justify-content-end">27%</div>
              <h4 className="mb-1">
                $<span className="counter"><span>1258</span></span>
              </h4>
              <div>Accessories</div>
              <div className="mt-4">
                <div className="progress progress-xs">
                  <div className="progress-bar bg-danger" style={{ width: '27%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="card-value d-flex justify-content-end text-danger">12%</div>
              <h4 className="mb-1">
                $<span className="counter"><span>562</span></span>
              </h4>
              <div>Others</div>
              <div className="mt-4">
                <div className="progress progress-xs">
                  <div className="progress-bar bg-pink" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='card mt-4 mx-3'>
          <div className='d-flex justify-content-between mx-2'>
            
          </div>

          <div className='p-3 employeeli'>
            <div className='table-responsive'>
              <table className='table table-striped p-2'>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Order By</th>
                    <th>Purchase From</th>
                    <th>Purchase Date</th>
                    <th>Paid By</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPageItems.map((user) => (
                    <tr key={user.orderby}>
                      <td>{user.item}</td>
                      <td>{user.orderby}</td>  
                      <td>{user.purchasefrom}</td>  
                      <td>{user.purchasedate}</td>
                      <td>{renderPaidByIcon(user.paidby)}</td>
                      <td>
                        <span style={{ backgroundColor: getStatusColor(user.status), padding: '4px', borderRadius:'5px', color:'white' }}>
                          <small>{user.status}</small>
                        </span>
                      </td>
                      <td>{user.amount}</td>
                      <td>{(
                        <>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button className='btn btn-sm mx-1'>
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </>
                        )}
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </div>


    </div>
  )
}
