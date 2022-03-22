import React from "react";
import "./index.scss";
import trackingfleximg from "../../assets/trackingfleximg.png";
import arrowvec from "../../assets/arrowvec.png";
import cancelvec from "../../assets/cancelvec.png";
import TrackingPageSlot from "./TrackingPageSlot";
import greatervec from "../../assets/greatervec.png";

export default function TrackingPage3() {
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
        <h2>Drop off Hubs</h2>
        <p className="where-right-sub tracking-sub-right">
          Locate a drop off hub near you. When you book <br /> deliveries, you
          can drop off at any of the locations below
        </p>
        <TrackingPageSlot
          image={greatervec}
          state="Lagos State"
          country="Nigeria"
        />
        <TrackingPageSlot
          image={greatervec}
          state="Lagos State"
          country="Nigeria"
        />
        <TrackingPageSlot
          image={greatervec}
          state="Lagos State"
          country="Nigeria"
        />
        <TrackingPageSlot
          image={greatervec}
          state="Lagos State"
          country="Nigeria"
        />
        <TrackingPageSlot
          image={greatervec}
          state="Lagos State"
          country="Nigeria"
        />
        <TrackingPageSlot
          image={greatervec}
          state="Lagos State"
          country="Nigeria"
        />
      </div>
    </div>
  );
}
