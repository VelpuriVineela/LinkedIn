import React, { useMemo, useState } from "react";
import "./index.scss";

export default function ProfilePopup() {
  return (
    <div className="popup-card">
      <ul className="popup-options">
        <li className="popup-option" onClick={onLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
}
