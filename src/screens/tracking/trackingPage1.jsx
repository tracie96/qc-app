import React from "react";
import "./index.scss";
import trackingmain from "../../assets/trackingmain.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";

export default function TrackingPage1() {
  return (
    <div className="where-cont">
      <div className="where-left-flex">
        {/* <div className="where-left-arrow">
          <img src={arrowvec} />
        </div> */}
        <div className="where-left-main">
          <img src={trackingmain} />
        </div>
      </div>
      <div className="where-right-main">
        <img className="where-right-main-img" src={cancelvec} />
        <h2>
          Keep track your incoming
          <br />
          and outgoing deliveries
        </h2>
        <p className="where-right-sub">
          Provide a tracking number to continue.
        </p>
        <div className="where-right-form-header">
          <form>
            <div className="where-package-weight">
              <label>Tracking Code</label> <br />
              <input
                className="where-address-input"
                type="text"
                placeholder="34a, Ago Iwoye"
              />
            </div>

            <div className="where-agreement">
              <p>
                By continuing, I represent that the declaration above is a
                proper
                <br /> and accurate description of the contents of my package.
              </p>
            </div>
            <div>
              <button className="where-address-button">Track</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
