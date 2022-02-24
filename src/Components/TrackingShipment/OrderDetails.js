import React from 'react'
import ProgressBar from './ProgressBar'

function OrderDetails(props) {
    const shipment=props.order.payload;
  return (
    <div className='row orderdetails'>
        <div className='orderdetails-box1'>
            <div className='orderdetails-box1-item'>
                <table  className='orderdetails-box1-item' cellspacing="10" cellpadding="0">
                    <tr>
                        <td className='orderdetails-box1-item-header' >
                           رقم الشحنة {shipment.TrackingNumber}
                        </td>
                        <td className='orderdetails-box1-item-header'>
                            اخر تحديث
                        </td>
                        <td className='orderdetails-box1-item-header'>
                            اسم التاجر
                        </td>
                        <td className='orderdetails-box1-item-header'>
                            موعد التسليم خلال
                        </td>
                    </tr>
                    <tr>
                    <td className='orderdetails-box1-item-footer' >
                         {shipment.CurrentStatus.state}
                        </td>
                        <td className='orderdetails-box1-item-footer'>
                            {shipment.CurrentStatus.timestamp}
                           
                        </td>
                        <td className='orderdetails-box1-item-footer'>
                            اسم التاجر
                        </td>
                        <td className='orderdetails-box1-item-footer'>
                            موعد التسليم خلال
                        </td>
                    </tr>
                </table>
             </div>   
        </div>
        <div className='orderdetails-box2'>
            <ProgressBar/>
        </div>
    </div>
  )
}

export default OrderDetails