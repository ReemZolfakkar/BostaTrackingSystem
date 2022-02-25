import React, { useEffect, useState } from 'react'
import {FaCheck} from 'react-icons/fa';
import {FaShippingFast,FaClipboardCheck} from 'react-icons/fa'
import ProgressBarStatus from '../../Utilities/ProgressBarStatus';

function ProgressBar(props) {
  const shipment=props.shipment;
  const [style,setStyle]=useState({class:"",step:[]})
  
  useEffect(()=>{
    const barStyle=ProgressBarStatus(shipment.CurrentStatus.state)
    if(barStyle.length !==0)
    {
    setStyle({...style,class:barStyle.class,step:barStyle.step})
    }
  },[shipment.CurrentStatus.state])
  
  return (  <div>
      <div id="progress">
      <ul id={`${style.class}`}>
        { style.class=="DELIVERED" &&
          style.step.map((value,index)=>
            <li key={index} className={`${value}`} >
            <FaCheck className='progress-icon'></FaCheck>
            
            </li>
            )
        }
          {  style.class!=="DELIVERED" &&<>
          <li className={`step ${style.step[0]}`} >
              <FaCheck className='progress-icon'></FaCheck>
              
          </li>
          <li className={`step ${style.step[1]}`}>
              <FaCheck className='progress-icon'></FaCheck>
              
          </li>
          <li className={`step2 ${style.step[2]}`} style={{transform:"scaleX(-1)"}}>
              <FaShippingFast className='progress-icon2' />
          
          </li>
          <li className={`step2 ${style.step[3]}`}>
            <FaClipboardCheck className='progress-icon2' />
          </li>
          </>
        }
      </ul>
    </div> 
    <div id="progress">
      <ul id="progress-bar-header">
        <li >
            تم إنشاء الشحنة
            
        </li>
        <li >
        تم إستلام الشحنة من التاجر     
            
        </li>
        <li >
            <div>
            الشحنة خرجت للتسليم
            </div>
            <div>
            { shipment.CurrentStatus.state =="WAITING_FOR_CUSTOMER_ACTION" &&
              <span style={{color:'#f9c32d'}}>
                {shipment.CurrentStatus.reason}
              </span>
            }
            { shipment.CurrentStatus.state =="DELIVERED_TO_SENDER" &&
              <span style={{color:'#ff0000'}}>
                  تم إلغاء الشحنة 
              </span>
            }
            </div>
        </li>
        <li >
            تم التسليم
        </li>
      </ul>
      </div>
  
</div> 

  )
}

export default ProgressBar