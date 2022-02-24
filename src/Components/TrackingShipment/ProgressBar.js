import React from 'react'
import {FaCheck} from 'react-icons/fa';
function ProgressBar() {
  return (  <div>
      <div id="progress">
      <div id="progress-bar"></div>
      <ul id="progress-num">
        <li class="step active" style={{backgroundColor:"blue"}}>
            <FaCheck></FaCheck>

        </li>
        <li class="step">
            <FaCheck></FaCheck>
            
        </li>
        <li class="step">
            <FaCheck></FaCheck>
         
        </li>
        <li class="step">
            <FaCheck></FaCheck>
        </li>
      </ul>
    </div> 
 
</div> 

  )
}

export default ProgressBar