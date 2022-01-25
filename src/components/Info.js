import React from "react";
import Icon from "../images/profile.jpeg";

export default function Info() {
  return (
    <div className="infoCard">
      <img src={Icon} className="icon spaceM" alt="ProfilePic"/>
      <h1 className="centerM spaceM">Marco Siabatto R.</h1>
      <h3 className="centerM spaceM">Fullstack Developer</h3>
      <a className="centerM siteLink" href="#">
        MSR Development
      </a>
      <div className="centerM spaceM">
        <a type="button" className="btn disabled btn-secondary btn-sm" href="#">
          E-mail
        </a>
        <a type="button" className="btn btn-primary btn-sm" href="https://www.linkedin.com/in/marcosiabattor">
          LinkedIn
        </a>
      </div>
    </div>
  );
}
