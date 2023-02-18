import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://twitter.com/VikalpTri786?t=-s6FFf18Rk3hPm9RB03iGQ&s=09"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsTwitter />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/vikalp-tripathi-187190202/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href="https://www.instagram.com/vikalpkumartripathi/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://github.com/Vikalp981" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
