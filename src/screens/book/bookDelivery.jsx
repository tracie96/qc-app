import React from "react";
import "./index.scss";
import mainhalf from "../../assets/mainhalf.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";

export default function BookDelivery() {
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
        <h2>
          Where will we <br />
          be picking up from ?
        </h2>
        <p className="where-right-sub">Fill in your origin pickup address</p>
        <div className="where-right-address">
          <p>
            Plot 122, No 1, Banana Island, Victoria Island, <br />
            Lagos, Nigeria. 100292
          </p>
          <div className="where-right-address-checked">
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </div>
        </div>
        <div className="where-right-form-header">
          <h3>Add new address</h3>
          <p>House/APT/Flat Number</p>
          <form>
            <input
              className="where-address-input"
              type="text"
              placeholder="34a, Ago Iwoye"
            />
            <div className="where-address-input-flex">
              <div>
                <label>City</label> <br />
                <select className="where-address-input-option">
                  <option>Ikorodu</option>
                  <option>Lagos Island</option>
                </select>
              </div>

              <div>
                <label>State</label> <br />
                <select className="where-address-input-option">
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
              </div>
            </div>

            <div className="where-address-input-flex">
              <div>
                <label>Country</label> <br />
                <select className="where-address-input-option">
                  <option>Nigeria</option>
                  <option>Ghana</option>
                </select>
              </div>

              <div>
                <label>Post Code</label> <br />
                <input
                  className="where-address-input-option"
                  type="text"
                  placeholder="00945454"
                />
              </div>
            </div>

            <div className="where-address-save-check">
              <label>
                {" "}
                <input type="checkbox" />
                Save to Address Book
              </label>
            </div>
            <div>
              <button className="where-address-button">Save Address</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
