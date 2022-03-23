import React from "react";
import track from "../../assets/Track delivery.png"
import { useHistory } from "react-router-dom";
export default function Track() {
    const history = useHistory();

  return (
    <div>
      <div className="container-fluid">
          
        <div className="row">
         <img src={track}>
         </img>
        </div>
      </div>
    </div>
  );
}
