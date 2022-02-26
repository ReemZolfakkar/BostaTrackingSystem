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
                navigate(`/tracking-shipment/track_num=${ordernumber}`);
        }
      };
    
  return (
    <div style={{backgroundColor:'white'}}>
        <div>
            Track your Shipment
        </div>
        <div>
            Enter your tracking number
        </div>
        <div>
            <input type="number" onKeyDown={handleKeyDown} onChange={(e)=>setOrderNumber(e.target.value)}></input>
            <FaSearch />
        </div>
    </div>
  )
}

export default TrackingNumber