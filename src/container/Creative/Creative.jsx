import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Creative.scss";
import { urlFor, client } from "../../client";

const Creative = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Creative</span> <br />
        <span>Portfolio</span> Section
      </h2>

      <div
        className="about-desc-wrap"
        style={{ marginTop: "3rem", marginBottom: "2rem" }}
      >
        <p
          className=""
          style={{
            marginTop: "2rem",
            fontSize: "2rem !important",
            textAlign: "justify",
          }}
        >
          The thing which sets me apart from others is my hobby of doing
          Rapping. A Virtual Live Performance video has been shown below ⬇️
        </p>
      </div>
      <iframe
        src="https://drive.google.com/file/d/1yMtAmLcDCxJ6hqkOXMJv95ismzffwr7v/preview"
        width="800"
        height="480"
        allow="autoplay"
        style={{ borderRadius: "10px" }}
      ></iframe>
    </>
  );
};

export default AppWrap(
  MotionWrap(Creative, "app__about"),
  "creative",
  "app__whitebg"
);
