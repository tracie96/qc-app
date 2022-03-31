import React from "react";
import { Logo } from "../../assets/svg";
import { useHistory } from "react-router-dom";
import "./nav.css"
export default function InAppNavbar() {
  const his = useHistory();
  return (
    <div className="inAppNavbar app-padding2">
      <div className="inAppNavbarCol1">
        <ul>
          <li onClick={() => his.push(`/home`)}>
            <Logo />
          </li>
          <li>Cockpit</li>
          <li className="dropdown">Shipments
          <div class="dropdown-content">
          <li style={{marginLeft:"0px"}}>Book Shipment</li>
          <li style={{marginLeft:"0px"}}>Drop-off Location</li>
          <li style={{marginLeft:"0px"}}>Track Shipment</li>
          <li style={{marginLeft:"0px"}}>Shipping History</li>
          <li style={{marginLeft:"0px"}}>Tell a friend</li>

           </div>
          </li>
          <li>Account</li>

        </ul>
      
      </div>

      <div className="inAppNavbarCol2" style={{display:"flex"}}>
        <button>Download IOS</button>
        <button>Download Playstore</button>

      </div>
    </div>
  );
}
