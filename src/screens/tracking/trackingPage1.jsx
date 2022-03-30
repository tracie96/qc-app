import React from "react";
import "./index.scss";
import trackingmain from "../../assets/trackingmain.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import { useHistory } from "react-router-dom";

export default function TrackingPage1() {
  const history = useHistory();

  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <div className="where-left-arrow">
          <img src={arrowvec} onClick={() => {
              history.goBack();
            }}/>
        </div>
        <div className="where-left-main">
          <img src={trackingmain} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} onClick={() => {
              history.goBack();
            }}/>
        <div style={{textAlign:"center",marginTop:"200px"}}>
        <h2>
        Track your shipment
        </h2>
        <p className="where-right-sub">
          Provide a tracking number to continue.
        </p>
        </div>
        <div className="where-right-form-header" style={{alignSelf:"center"}}>
          <form>
            <div className="where-package-weight">
              <label>Tracking Code</label> <br />
              <input
                className="where-address-input"
                type="text"
                placeholder="34a, Ago Iwoye"
                style={{width:"480px",height:"55px"}}
              />
            </div>

            <div className="where-agreement">
          
            </div>
            <div>
              <button onClick={()=>{history.push('/track')}}className="where-address-button" style={{width:"480px",height:"55px",borderRadius:"0px"}}
>Track</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
