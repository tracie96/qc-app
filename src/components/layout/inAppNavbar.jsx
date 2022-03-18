import React from "react";
import { Logo } from "../../assets/svg";

export default function InAppNavbar() {
  return (
    <div className="inAppNavbar app-padding2">
      <div className="inAppNavbarCol1">
        <ul>
          <li>
            <Logo />
          </li>
          <li>Dashboard</li>
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
