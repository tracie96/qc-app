import React from "react";
import "./index.scss";
import trackingfleximg from "../../assets/trackingfleximg.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import greatervec from "../../assets/greatervec.png";

export default function TrackingPage4() {
  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <div className="where-left-arrow">
          <img src={arrowvec} />
        </div>
        <div className="where-left-main">
          <img src={trackingfleximg} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} />
        <h2>Available hubs in the State</h2>
        <p className="where-right-sub tracking-sub-right">
          Here is a list of hubs available in this region
        </p>
        <div className="where-right-address package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>

        <div className="where-right-address package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>

        <div className="where-right-address package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
        <div className="where-right-address package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
        <div className="where-right-address package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
        <div className="where-right-address last-package-location package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked where-greaterhand">
            <img src={greatervec} />
          </div>
        </div>
      </div>
    </div>
  );
}
