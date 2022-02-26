import React,{useContext} from 'react'
import { LanguageContext } from '../../Translation/LanguageContext'
import getDay from '../../Utilities/getDay'
function OrderDetailsTable(props) {
  const details=props.order.order.TransitEvents
  const langaugeType=useContext(LanguageContext)
  const Lan=langaugeType.userLang
  return (
  
    <div >
        <div>
          تفاصيل الشحنة 
        </div>
        <div style={{marginTop:'10px'}}>
        <table className='order-details-table' > 
        <thead>
        <tr>
            <th className='order-details-table-th'>الفرع</th>
            <th  className='order-details-table-th'>التاريخ</th>
            <th  className='order-details-table-th'>الوقت</th>
            <th  className='order-details-table-th'>التفاصيل</th>
        </tr>
        </thead>
        {details.map((value,index)=>{
          return(<>
            { (value.state=="NOT_YET_SHIPPED"  || value.state=="RECEIVED_DELIVERY_LOCATION") ?<>
                 </>
           :
            <tr key={Math.random() * 1000}>
              { !value.hub &&<>
                 <td className='order-details-table-td'>مدينة نصر</td>
                 <td className='order-details-table-td'>{getDay(value.timestamp)[0]}</td>
                 <td className='order-details-table-td'>{getDay(value.timestamp)[1]}</td>
                 <td className='order-details-table-td'>{Lan[`${value.state}`]}</td>
                 </>
              }
              { value.hub &&<>
                 <td className='order-details-table-td'> {value.hub}</td>
                 <td className='order-details-table-td'>{getDay(value.timestamp)[0]}</td>
                 <td className='order-details-table-td'>{getDay(value.timestamp)[1]}</td>
                 <td className='order-details-table-td'>{Lan[`${value.state}`]}</td>
                 </>
              }
            </tr>
            }
            </>)
        })    
        }

    </table>
    </div>
    </div>
  )
}

export default OrderDetailsTable