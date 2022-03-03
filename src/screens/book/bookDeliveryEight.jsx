import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import arrowdown from "../../assets/arrowdown.png";
import arrowup from "../../assets/arrowup.png";
import money1 from "../../assets/money1.png";

export default function BookDeliveryEight() {
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
        <div className="where-right-main-img">
          <img src={cancelvec} />
        </div>
        <h2>Make Payment</h2>
        <p className="where-right-sub payment-package-sub">
          Lorem ipsum is placeholder text commonly <br />
          used in the graphic.
        </p>

        <div className="where-right-form-header ">
          <div className=" package-address-first ">
            <div className="package-address-first-img">
              <img src={money1} />
            </div>
            <div className="package-address-first-address package-payment-address">
              <p>You have to pay</p>
            </div>
            <div className="package-address-first-checked package-amount-first">
              <p>₦60,850</p>
            </div>
          </div>

          <div className="where-agreement pick-agreement">
            <p>
              By continuing, I represent that the declaration above is a proper
              <br /> and accurate description of the contents of my package.
            </p>
          </div>
          <div>
            <button className="where-address-button pick-submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
