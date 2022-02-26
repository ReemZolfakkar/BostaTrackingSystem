import React,{useContext} from 'react'
import ProgressBar from './ProgressBar'
import getDay from '../../Utilities/getDay';
import { LanguageContext } from '../../Translation/LanguageContext';
function OrderDetails(props) {
    const shipment=props.order.order;
    const langaugeType=useContext(LanguageContext)
    const lang=langaugeType.userLang
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
                            {shipment.CurrentStatus.state==='DELIVERED'?
                                <span style={{color:'#75ce69'}}>
                                     {lang[`${shipment.CurrentStatus.state}`]}
                                </span>
                                : shipment.CurrentStatus.state=='DELIVERED_TO_SENDER' ?
                                <span style={{color:'#ff0000'}}>
                                    {lang[`${shipment.CurrentStatus.state}`]}
                                </span>:
                                <span style={{color:'#f9c32d'}}>
                                     {lang[`${shipment.CurrentStatus.state}`]}
                                </span>
                            }
                           
                        </div>
                    </li>
                    <li >
                        <div className='top'>
                            اخر تحديث 
                        </div>
                        <div style={{flexWrap:'wrap'}}> 
                            <div>
                            {getDay(shipment.CurrentStatus.timestamp)[0]}
                            </div>
                            <div>
                            {getDay(shipment.CurrentStatus.timestamp)[1]}

                            </div>
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