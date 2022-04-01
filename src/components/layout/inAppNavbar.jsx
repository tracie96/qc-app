import React from "react";
import { Logo } from "../../assets/svg";
import { useHistory } from "react-router-dom";
import "./nav.css";
import ps from "../../assets/ps.svg";
import as from "../../assets/as.svg";
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
          <li className="dropdown">
            Shipments
            <div class="dropdown-content" style={{ width: "200px" }}>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Book Shipment
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Drop-off Location
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Track Shipment
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Shipping History
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Tell a friend
              </li>
            </div>
          </li>
          <li>Account</li>
        </ul>
      </div>

      <div className="inAppNavbarCol2">
          <div className="row" style={{width:"30%",float:"right"}}>
            <div className="col">
              <img src={ps} alt="" style={{width:"100%"}}/>
            </div>
            <div className="col"style={{marginLeft:"-30px"}} >
              <img src={as} alt=""  style={{width:"100%"}}/>
            </div>
          </div>

      </div>
    </div>
  );
}
