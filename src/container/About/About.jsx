import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);

  return (
    <>
      <h2 className="head-text">
        All Data Has Some<span>Value Hidden,</span> <br />
        Which Needs To Be <span>Discovered</span>
      </h2>

      <div className="app__profiles">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.researcher} alt="competitive programming" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Researcher
          </h2>
          <p className="p-text" style={{ marginTop: 10, textAlign: "justify" }}>
            Published paper in IEEE Globconet: Missing Data It’s Emergence in
            the Real-world-A Practical Review on Google Play Apps dataset using
            Python. This research helps App Developers to get better
            understanding of user needs.
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.hackmanthan} alt="competitive programming" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Hackathon
          </h2>
          <p className="p-text" style={{ marginTop: 10, textAlign: "justify" }}>
            Secured 3rd position in Hackmanthan, among top teams from India by
            making website named Vaak-Bhaavna for police to help them to control
            criminal activities. This hackathon was hosted by Chattisgarh
            police.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className="app__profile-item"
        >
          <img src={images.about03} alt="competitive programming" />
          <h2 className="bold-text" style={{ marginTop: 20 }}>
            Competitive Programming
          </h2>
          <p className="p-text" style={{ marginTop: 10, textAlign: "justify" }}>
            I love competitive programming and currently secured great ranks in
            contests on various platforms such as codeforces, leetcode,
            hackerrank, etc.
          </p>
        </motion.div>
      </div>
      <br />
      <br />
      <div className="about-desc-wrap">
        <p
          className="p-text"
          style={{
            marginBottom: "3rem",
            fontSize: "1rem",
            marginTop: "1rem",
            textAlign: "justify",
          }}
        >
          I am a pre-final year student at IIIT Naya Raipur and pursuing BTech
          in Data Science & Artificial Intelligence domain. I am interested in
          Machine Learning and Data Science and participated in various
          hackathons and competitions related to this field. I am enthusiastic
          about learning new things and always looking for opportunities. Click
          on this video to know more about me ⬇️
        </p>
      </div>
      <iframe
        src="https://drive.google.com/file/d/1K2ZToNEbtzQ9fSkVqNeXNM4SThy5rkvH/preview"
        width="800"
        height="480"
        allow="autoplay"
        style={{ borderRadius: "10px" }}
      ></iframe>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
