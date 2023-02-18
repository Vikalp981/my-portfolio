import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.python} alt="" />
            </div>
            <p className="p-text">Python</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.cpp} alt="" />
            </div>
            <p className="p-text">C++</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.mysql} alt="" />
            </div>
            <p className="p-text">My SQL</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.powerbi} alt="" />
            </div>
            <p className="p-text">Power Bi</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.git} alt="" />
            </div>
            <p className="p-text">Git</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.scikit} alt="" />
            </div>
            <p className="p-text">Scikit</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.pandas} alt="" />
            </div>
            <p className="p-text">Pandas</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.tableau} alt="" />
            </div>
            <p className="p-text">Tableau</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.jupyter} alt="" />
            </div>
            <p className="p-text">Jupyter</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.numpy} alt="" />
            </div>
            <p className="p-text">Numpy</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.kaggle} alt="" />
            </div>
            <p className="p-text">Kaggle</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
          >
            <div className="app__flex" style={{}}>
              <img src={images.django} alt="" />
            </div>
            <p className="p-text">Django</p>
          </motion.div>
        </motion.div>
        <div className="app__skills-exp">
          <motion.div className="app__skills-exp-item">
            <div className="app__skills-exp-year">
              <p className="bold-text">June 2022 – August 2022</p>
            </div>
            <motion.div className="app__skills-exp-works">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for="1"
                  key="1"
                >
                  <h4 className="bold-text">DATA SCIENCE INTERN </h4>
                  <p className="p-text">LEARN AND BUILD</p>
                </motion.div>
                <ReactTooltip
                  id="1"
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                  Worked as a data analyst role and dealt with AI and ML related
                  stuff. I dealt with a lot of data provided by the company with
                  a set of questions asked by customers and also prepared
                  dashboard of their datasets
                </ReactTooltip>
              </>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
