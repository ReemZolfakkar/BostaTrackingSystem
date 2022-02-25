import React , {useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectedorder } from '../redux/actions/orderActions'
import OrderDetails from './TrackingShipment/OrderDetails'
import OrderDetailsTable from './TrackingShipment/OrderDetailsTable'
function Tracking() {
  const order=useSelector((state)=>state.order)
  const {track_num}=useParams()
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const fetchOrder=async()=>{
      const response=await axios.get(`https://tracking.bosta.co/shipments/track/${track_num}`)
      .catch((err)=>{
        console.log(err)
        });
       dispatch(selectedorder(response.data));
    }
    if(track_num && track_num!=="")
    fetchOrder();
  },[track_num])
console.log(order)
  return (<>
    <div className='tracking'>
      {order.order.length!==0 &&<>
        <div>
          <OrderDetails order={order} />
        </div>
        <div className='row tracking-item' >
          <div className='col order-details-table-div'>
              <OrderDetailsTable order={order}/>
          </div>
          <div className='col'>
             
          </div>
        </div>
        </>
      }
    </div>
    </>
  )
}

export default Tracking