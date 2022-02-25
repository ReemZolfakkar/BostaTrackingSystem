import React from 'react'
import ProgressBar from './ProgressBar'
import getDay from '../../Utilities/getDay';
function OrderDetails(props) {
    const shipment=props.order.order;
  return (
    <div className='row orderdetails'>
        <div className='orderdetails-box1'>
            <div className='orderdetails-box1-item' style={{display:'inline-grid'}} >
            <div id="order-details">
                <ul id="order-details-header">
                    <li >
                        <div className='top'>
                            رقم الشحنة
                            {shipment.TrackingNumber}
                        </div>
                        <div>
                            {shipment.CurrentStatus.state}
                        </div>
                    </li>
                    <li >
                        <div className='top'>
                            اخر تحديث 
                        </div>
                        <div> 
                            {getDay(shipment.CurrentStatus.timestamp)}
                        </div>  
                    </li>
                    <li >
                        <div className='top'>
                            اسم التاجر
                        </div>
                        <div>
                            SOUQ.com
                        </div>
                    </li>
                    <li >
                        <div className='top'>
                            موعد التسليم خلال
                        </div>
                        <div>
                            11/5
                        </div>
                    </li>
                </ul>
             </div>
             </div>
        </div>
        <div className='orderdetails-box2'>
            <ProgressBar shipment={shipment}/>
        </div>
    </div>
  )
}

export default OrderDetails