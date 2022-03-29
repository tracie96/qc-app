import React from "react";
import "./index.scss";
import trackingfleximg from "../../assets/trackingfleximg.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import greatervec from "../../assets/greatervec.png";
import { useHistory } from "react-router-dom";

export default function TrackingPage4() {
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
          <img src={trackingfleximg} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} onClick={() => {
              history.goBack();
            }}/>
        <div style={{textAlign:"center",marginTop:"100px",alignSelf:"center"}}>

        <h2>Available hubs in the State</h2>
        <p className="where-right-sub tracking-sub-right" style={{padding:"20px 0 50px 50px"}}>
          {/* Here is a list of hubs available in this region */}
        </p>
        <div className="where-right-address package-location-cont">
          <div className="package-location">
          <p style={{color:"#4169E2",fontSize:"16px",fontStyle:"normal",fontFamily:"Playfair Display",textAlign:"left",fontWeight:"700"}}> Ikorodu </p>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>

        <div className="where-right-address package-location-cont">
          <div className="package-location">
          <p style={{color:"#4169E2",fontSize:"16px",fontStyle:"normal",fontFamily:"Playfair Display",textAlign:"left",fontWeight:"700"}}> Victoria Island</p>
            <p style={{textAlign:"left"}}> Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>

        <div className="where-right-address package-location-cont">
          <div className="package-location">
          <p style={{color:"#4169E2",fontSize:"16px",fontStyle:"normal",fontFamily:"Playfair Display",textAlign:"left",fontWeight:"700"}}> Isolo</p>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
        <div className="where-right-address package-location-cont">
          <div className="package-location">
          <p style={{color:"#4169E2",fontSize:"16px",fontStyle:"normal",fontFamily:"Playfair Display",textAlign:"left",fontWeight:"700"}}>Lekki</p>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
        <div className="where-right-address package-location-cont">
          <div className="package-location">
          <p style={{color:"#4169E2",fontSize:"16px",fontStyle:"normal",fontFamily:"Playfair Display",textAlign:"left",fontWeight:"700"}}>Obalende</p>
          <p style={{textAlign:"left"}}>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
        <div className="where-right-address last-package-location package-location-cont">
          <div className="package-location" >
          <p style={{color:"#4169E2",fontSize:"16px",fontStyle:"normal",fontFamily:"Playfair Display",textAlign:"left",fontWeight:"700"}}>Bariga</p>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked where-greaterhand">
            <img src={greatervec} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
