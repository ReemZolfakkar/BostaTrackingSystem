import React from 'react'
import complain from '../../Assetes/Images/complains.png'
function Complains() {
  return (
    <div className='orderaddress-box'>
      <div className='complains'>

        <img className='complains-img' src={complain}></img>
      <div > 
        <span>
          هل يوجد مشكلة في شحنتك ؟
        </span>
        <button className='complains-button'>
            <span>
              إبلاغ عن مشكلة
            </span>
        </button>

      </div>

      </div>
    </div>
  )
}

export default Complains