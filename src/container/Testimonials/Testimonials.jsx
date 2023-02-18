import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import { images } from "../../constants";

import "./Testimonials.scss";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      <>
        <div className="app__testimonial-item app__flex">
          <img src={images.saurabh} alt="" />

          <div className="app__testimonial-content">
            <p className="p-text" style={{ textAlign: "justify" }}>
              Vikalp Kumar Tripathi is a creative person with a passion for
              technology and management. I would like to highlight his/her work
              in an Data Science with ML and AI intern position, where he/she
              proved his/her ability as an effective employee by helping
              co-workers with knowledge transitions, thereby increasing company
              revenue.
            </p>
            <div>
              <h4 className="bold-text">Saurabh Bharadwaj</h4>
              <h5 className="p-text">Learn & Build</h5>
            </div>
          </div>
        </div>
      </>

      <div className="app__testimonial-brands app__flex">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img src={images.lnb} alt="lnb logo" />
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
