import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { motion } from "framer-motion";
import StepButton from "@material-ui/core/StepButton";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

import "./Education.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const Education = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const [education, setEducation] = useState([]);
  const [filterEducation, setFilterEducation] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const data = [
    {
      degree: "Matriculation",
      field: "Science",
      grade: "9.4/10 CGPA",
    },
  ];
  useEffect(() => {
    const query = '*[_type == "education"]';

    client.fetch(query).then((data) => {
      setEducation(data || []);
      //setFilterEducation(data || []);
      handleEducationFilter("Matriculation");
      setActiveStep(-1);
    });
  }, []);
  console.log(education);
  const handleEducationFilter = (item) => {
    setTimeout(() => {
      console.log(item);
      setFilterEducation(education.filter((edu) => edu.degree?.includes(item)));
    }, 500);
  };

  function totalSteps() {
    return education.length;
  }

  function skippedSteps() {
    return skipped.size;
  }

  function completedSteps() {
    return completed.size;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps() - skippedSteps();
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  // function handleNext() {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed
  //         // find the first step that has been completed
  //         education.findIndex((step, i) => !completed.has(i))
  //       : activeStep + 1;

  //   setActiveStep(newActiveStep);
  // }

  const handleStep = (step) => {
    setActiveStep(step);
    console.log("step: " + step);
  };

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className="education-container">
      <h2 className="head-text education-header">
        <span>Education</span>
      </h2>
      <br />
      <br />
      <div className={classes.root + " education-sub-container"}>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={images.saintmary} alt="saint mary school" />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                St. Mary's Senior Secondary School
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                Matriculation
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">10 CGPA</p>
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
              <img src={images.kushalvidya} alt="saint mary school" />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                Khushhal Vidya Peeth School
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                Intermediate
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">86.4%</p>
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
              <img src={images.iiit} alt="saint mary school" />
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text" style={{ textAlign: "center" }}>
                IIIT Naya Raipur
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                B.Tech
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">9.60 (till 5th sem)</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <div className="app__testimonial-item app__flex">
      
         <img src={ 'https://cdn.sanity.io/images/8pnizolv/production/a8a00f6f454afb25d2bb9669d773eb55bad5d5b9-900x900.jpg?w=2000&fit=max&auto=format'} alt={filterEducation[0]?.institute} />
          <div className="app__testimonial-content">
            <h4>{filterEducation[0]?.degree}</h4>
            <p className="p-text">{filterEducation[0]?.field}</p>
            <div>
               <h4 className="bold-text">{filterEducation[0]?.institute}</h4>
              <h5 className="p-text">{filterEducation[0]?.grade}</h5>
            </div>
          </div>
        </div>   */}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Education, "app__education"),
  "education",
  "app__whitebg"
);
