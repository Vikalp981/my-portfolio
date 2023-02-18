import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";
import { images } from "../../constants";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>

      <div style={{ display: "flex" }}>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={images.ieeecertificate} alt="ieee certificat" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href="https://drive.google.com/file/d/1hKo84ZNnD3nwNL9UlBbVqGLbc-EAlqz0/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href="https://github.com/VIKALP981/DATA-ANALYSIS-OF-PLAY-STORE-APPS/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                GOOGLE-PLAY STORE ANALYSIS
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "justify" }}
              >
                Analysis on Google Play store Dataset and predicting the Rating
                of any new app
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">Research</p>
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
              <img src={images.vaakbhawna} alt="ieee certificat" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href="https://github.com/Vinayak2002/Vaak-Bhaavna"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a
                  href="https://github.com/Vinayak2002/Hackmanthan_VVS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                VAAK-BHAAVNA
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "justify" }}
              >
                Made two speech emotion recognition websites in group one using
                streamlit and other using Django for classifying emotions into
                happy,sad, fear,angry, disgust and many more
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">HACKMANTHAN</p>
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
              <img src={images.facerecognition} alt="ieee certificat" />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a
                  href="https://github.com/VIKALP981/FACE-RECOGNITION-USING-PCA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                FACE RECOGNITION USING PCA
              </h4>
              <p
                className="p-text"
                style={{ marginTop: 10, textAlign: "justify" }}
              >
                In this I have done face recognition on ORL dataset with the
                help of Principal Component Analysis
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">Project</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
