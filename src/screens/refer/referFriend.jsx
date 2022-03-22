import React from "react";
import "./index.scss";
// import trackingfleximg from "../../assets/trackingfleximg.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import refergift from "../../assets/refergift.png";
// import greatervec from "../../assets/greatervec.png";

export default function ReferFriend() {
  return (
    <div className="refer-friend-cont">
      <div className="refer-friend-arrow">
        <div className="refer-arrow">
          <img src={arrowvec} />
        </div>
        <div className="refer-cancel">
          <img src={cancelvec} />
        </div>
      </div>
      <div className="refer-friend-state-cont">
        <div>
          <img src={refergift} />
        </div>
        <h2>Refer a friend Earn NGN 1,000</h2>
        <div className="refer-friend-note">
          <p>
            Your friend will also receive NGN 1,000 they can use on their <br />{" "}
            first shipment when they sign up.
          </p>
        </div>
        <div className="refer-friend-input">
          <p>YOUR REFERRAL CODE</p> <input type="text" placeholder="B4F265FC" />
        </div>
        <button className="refer-button">Copy</button>
      </div>
    </div>
  );
}
