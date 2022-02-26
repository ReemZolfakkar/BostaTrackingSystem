import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TrackingNumber from "./TrackingNumber";

function Navbar() {
    const [isShown, setIsShown] = useState(false);
 
  const showHideNav = () => {
    var prevY = window.pageYOffset;
    window.onscroll = function () {
      var currentY = window.pageYOffset;
      //show on scroll up
      if (prevY > currentY) {
        document.getElementById("nav-section").style.top = "0px";
     
      }
      //hide on scroll down
      else {
        document.getElementById("nav-section").style.top = "-1000px";
       

      }
      prevY = currentY;
    };
  };
  useEffect(() => {
    showHideNav();
  }, []);
  const [activeTab, setActive] = useState("");
  return (
    <div id="nav-section">
      <nav className="navbar navbar-expand-sm">
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
                <li>
                <img src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg" alt="bosta.co" id="logo" data-height-percentage="54" data-actual-width="153" data-actual-height="50" style={{width:'100%'}}/>
                </li>
                <li
                  className="nav-item"
                >
                  <Link
                    className={"nav-link"}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item"
                >
                  <Link
                    className={"nav-link"}
                    to="/"
                  >
                    Pricing
                  </Link>
                </li>
                <li
                  className="nav-item"
                >
                  <Link
                  className={"nav-link"}
                  to="/"
                  >
                    Contact Sales 
                  </Link> 
                </li>
                <li
                  className="nav-item"
                >
                  <Link
                   className={"nav-link"}
                   to="/"
                  >
                  Careers
                  </Link> 
                   
                </li>
                <li
                  className="nav-item"
                  style={{marginTop:'8px'}}
                  onMouseEnter={() => setIsShown(true)}
                >
                    Tracking Shipment
                    {isShown && (
                      <div className="d-block">
                          <TrackingNumber/>
                      </div>)}

                </li>
              
          </ul>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
