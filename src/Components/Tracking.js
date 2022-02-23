import React , {useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectedorder } from '../redux/actions/orderActions'
function Tracking() {
  const order=useSelector((state)=>state.order)
  const {track_num}=useParams()
  const dispatch=useDispatch();
  const fetchOrder=async()=>{
    const response=await axios.get(`https://tracking.bosta.co/shipments/track/${track_num}`)
    .catch((err)=>{
      console.log(err)
      });
     dispatch(selectedorder(response.data));
     console.log(response.data)
  }
  useEffect(()=>{
    if(track_num && track_num!=="")
    fetchOrder();
  },[track_num])
  return (
    <div>{track_num}</div>
  )
}

export default Tracking