import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { motion } from "framer-motion";
import StepButton from "@material-ui/core/StepButton";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

import "./Certificates.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Certificates = () => {
  const classes = useStyles();

  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <div className="education-container">
      <h2 className="head-text education-header">
        <span>Certificates</span>
      </h2>
      <br />
      <br />
      <div className={classes.root + " education-container"}>
        <div style={{ display: "flex" }}>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={images.google} alt="saint mary school" />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">Fundalmental of Digital Marketing</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  Credential ID: P5X CQK U8A
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">Google</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={images.coursera} alt="saint mary school" />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">
                  Google Data Analytics Specialization
                </h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  Credential ID: 3RRCHPQQ9GG9
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">Coursera</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={images.hackerrank} alt="saint mary school" />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">SQL (Advances)</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  Credential ID: 3RRCHPQQ9GG9
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">HackerRank</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div style={{ display: "flex" }}>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={images.construct} alt="saint mary school" />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">Code Foundation for ROS</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  Credential ID: RIA909C605FD0D9
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">The Construct</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={images.ieee} alt="saint mary school" />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">
                  IEEE English For Technical Professional
                </h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  Credential ID: 3RRCHPQQ9GG9
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">IEEE</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="app__work-portfolio"
          >
            <div className="app__work-item app__flex">
              <div className="app__work-img app__flex">
                <img src={images.skillup} alt="saint mary school" />
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">
                  Getting Started With Machine Learning Algorithms
                </h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  Credential ID: 3129628
                </p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">SkillUp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__education"),
  "education",
  "app__whitebg"
);
