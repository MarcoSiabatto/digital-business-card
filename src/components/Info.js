import React from "react";
import Icon from "../images/profile.jpeg";

export default function Info() {
  return (
    <div className="infoCard">
      <img src={Icon} className="icon spaceM" />
      <h1 className="centerM spaceM">Marco Siabatto R.</h1>
      <h3 className="centerM spaceM">Fullstack Developer</h3>
      <a className="centerM siteLink" href="#">
        MSR Development
      </a>
      <div className="centerM spaceM">
        <button disabled className="btn btn-secondary btn-sm">
          E-mail
        </button>
        <button disabled className="btn btn-primary btn-sm">
          LinkedIn
        </button>
      </div>
    </div>
  );
}
