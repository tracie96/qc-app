import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import greatervec from "../../assets/greatervec.png";

export default function TrackingPage3() {
  return (
    <div className="where-cont">
      <div className="where-left-flex">
        <div className="where-left-arrow">
          <img src={arrowvec} />
        </div>
        <div className="where-left-main">
          <img src={mainhalf} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} />
        <h2>Drop off Hubs</h2>
        <p className="where-right-sub">
          Locate a drop off hub near you. When you book <br /> deliveries, you
          can drop off at any of the locations below
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
        <div className="where-right-address package-location-cont">
          <div className="package-location">
            <h2>Lagos State</h2>
            <p>Nigeria</p>
          </div>
          <div className="where-right-address-checked">
            <img src={greatervec} />
          </div>
        </div>
      </div>
    </div>
  );
}
