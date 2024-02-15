import React from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import Sidebar from '../../layouts/Sidebar'
export default function Holidays() {
    



  return (
    <>
    <div className='main d-flex'>
    <Sidebar/>
    <div className='holiday-main px-3'>

        <div>
        <Header/>
        </div>


        <div className='holidays card p-4 mt-4 mx-3 table-responsive'>
            <table className="table table_custom spacing5 table-hover ">
                <thead>
                    <tr>
                    <th scope="col">DAY</th>
                    <th scope="col">DATE</th>
                    <th scope="col">HOLIDAY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Tuesday</td>
                    <td>Jan 01, 2019</td>
                    <td>New Year's Day</td>
                
                    
                    </tr>
                    <tr>
                    <td>Monday</td>
                    <td>Jan 14, 2019</td>
                    <td>Makar Sankranti / Pongal</td>
                    </tr>


                    
                    <tr>
                    <td>Saturday</td>
                    <td>Jan 26, 2019</td>
                    <td>Republic Day</td>              
                    </tr>

                    <tr>
                    <td>Monday</td>
                    <td>Mar 04, 2019</td>
                    <td>Maha Shivaratri</td>              
                    </tr>

                    <tr>
                    <td>Thursday</td>
                    <td>Mar 21, 2019</td>
                    <td>Holi</td>              
                    </tr>

                    <tr>
                    <td>Friday</td>
                    <td>Apr 19, 2019</td>
                    <td>Good Friday</td>              
                    </tr>

                    <tr>
                    <td>Wednesday</td>
                    <td>Jun 05, 2019</td>
                    <td>Eid-ul-Fitar</td>              
                    </tr>

                    <tr>
                    <td>Thursday</td>
                    <td>Aug 15, 2019</td>
                    <td>Independence Day</td>              
                    </tr>

                    <tr>
                    <td>Wednesday</td>
                    <td>Oct 02, 2019</td>
                    <td>Mathatma Gandhi Jayanti</td>              
                    </tr>

                    <tr>
                    <td>Wednesday</td>
                    <td>Dec 25, 2019</td>
                    <td>Christmas</td>              
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div>
        <Footer/>
        </div>  
    </div>
    </div>
    </>
  )
}
