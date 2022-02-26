import React , {useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { selectedorder } from '../redux/actions/orderActions'
import OrderDetails from './TrackingShipment/OrderDetails'
import OrderDetailsTable from './TrackingShipment/OrderDetailsTable'
import OrderAddress from './TrackingShipment/OrderAddress'
import Complains from './TrackingShipment/Complains'
import TrackingNumber from './NavBar/TrackingNumber'
function Tracking() {
  const order=useSelector((state)=>state.order)
  const [error,setError]=useState(false)
  const {track_num}=useParams()
  const dispatch=useDispatch();
  
  useEffect(()=>{
    const fetchOrder=async()=>{
      const response=await axios.get(`https://tracking.bosta.co/shipments/track/${track_num}`)
      .catch((err)=>{
          setError(true)
        });
       dispatch(selectedorder(response.data));
       setError(false)
    }
    if(track_num && track_num!=="")
    fetchOrder();
    
  },[track_num])
  return (<>
    <div className='tracking'>
      {order.order.length!==0  && error==false &&<>
        <div>
          <OrderDetails order={order} />
        </div>
        <div className='row tracking-item' >
          <div className='col-8 order-details-table-div'>
              <OrderDetailsTable order={order}/>
          </div>
          <div className='col-4'>
             <div>
               <OrderAddress/>
             </div>
             <div>
                <Complains></Complains>
             </div>
          </div>
        </div>
        </>
        }
        {(order.order.length==0  || error==true )&&
        <>
        <div>
            لا يوجد شحنة بهذا الرقم {track_num}
        </div>
        <div>
          <TrackingNumber/>
        </div>
        </>
      }
    </div>
    </>
  )
}

export default Tracking