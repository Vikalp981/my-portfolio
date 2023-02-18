import { AppWrap, MotionWrap } from "../../wrapper";
// import "./Info.scss";
import { images } from "../../constants";

const Infographic = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Infographic</span>
        <br />
        <br />
      </h2>

      <img src={images.infographic} alt="" style={{ width: "50%" }} />
    </>
  );
};

export default AppWrap(
  MotionWrap(Infographic, "app__about"),
  "infographic",
  "app__whitebg"
);
