import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Tracking from '../Tracking';
import {useNavigate} from "react-router-dom"
function TrackingNumber() {
   const [ordernumber,setOrderNumber]=useState("")
   const [submit,setSubmit]=useState(false)
   const navigate = useNavigate();
   const handleKeyDown=(e)=> {
        if (e.key === 'Enter') {
                setSubmit(true)
                document.getElementById("trackin").placeholder= `${ordernumber}`;
                navigate(`/tracking-shipment/track_num=${ordernumber}`);
        }
       
      };
      const handlebutton=(e)=> {
            navigate(`/tracking-shipment/track_num=${ordernumber}`);
        
      };
  return (
    <div className="number-card" id="number-card" style={{backgroundColor:'white'}}>
        <div className="number-card-title">
            Track your Shipment
        </div>
        <div className="number-card-subtitle">
            Enter your tracking number
        </div>
        <div className='d-flex'>
            <input type="text" className='number-card-input' placeholder="Tracking No."  id='trackin' onKeyDown={handleKeyDown} onChange={(e)=>setOrderNumber(e.target.value)}></input>
            <button className='number-card-button' onClick={handlebutton}>
            <FaSearch  style={{margin:'1px -4px'}} />
        </button>
        </div>
    </div>
  )
}

export default TrackingNumber