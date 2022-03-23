import React from "react";
import { Logo } from "../../assets/svg";
import { useHistory } from "react-router-dom";

export default function InAppNavbar() {
  const his = useHistory();
  return (
    <div className="inAppNavbar app-padding2">
      <div className="inAppNavbarCol1">
        <ul>
          <li onClick={() => his.push(`/home`)}>
            <Logo />
          </li>
          <li>Cockpit</li>
          <li>Shipments</li>
          <li>Payments</li>
          <li>Imports</li>
          <li>Accounts</li>
        </ul>
      </div>

      <div className="inAppNavbarCol2">
        <button>Download</button>
      </div>
    </div>
  );
}
