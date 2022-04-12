import React, { useEffect } from "react";
import { Logo } from "../../assets/svg";
import { useHistory } from "react-router-dom";
import "./nav.css";
import ps from "../../assets/ps.svg";
import as from "../../assets/as.svg";
import { WindowSharp } from "@mui/icons-material";

export default function InAppNavbar() {
  const history = useHistory();
  const logout = () =>{
    localStorage.removeItem('user')
    window.location.reload();

  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
    }
    else{
      history.push('/home')
    }
  }, []);

  return (
    <div className="inAppNavbar app-padding2">
      <div className="inAppNavbarCol1">
        <ul>
          <li onClick={() => history.push(`/home`)}>
            <Logo />
          </li>
          <li>Cockpit</li>
          <li className="dropdown">
            Shipments
            <div class="dropdown-content" style={{ width: "200px" }}>
              <li style={{ marginLeft: "0px", marginTop: "10px" }} onClick={()=>{history.push('/book_delivery')}}>
                Book Shipment
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Drop-off Location
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }} onClick={()=>{history.push('/track')}}>
                Track Shipment
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }}>
                Shipping History
              </li>
              <li style={{ marginLeft: "0px", marginTop: "10px" }} onClick={()=>{history.push('/refer')}}>
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
            <div className="col"style={{marginLeft:"-30px"}} >
            <button onClick={logout} style={{height:"30px",marginTop:"20px",background:"#000"}}><p style={{width:"50px",fontSize:"12px",marginTop:"-5px",color:"#fff"}}>Log Out</p></button>
            </div>
          </div>
      
      </div>
    </div>
  );
}
