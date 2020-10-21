import React from "react";
import "../../../node_modules/react-awesome-slider/dist/styles.css";
import AutoplaySlider from "react-awesome-slider";
// import AutoplaySlider from "../../../node_modules/react-awesome-slider/src/hoc/autoplay";
// import "react-awesome-slider/dist/styles.css";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation.scss";
import Navbar from "../landingPage/Navbar";
import "../../styles/gallery.css";
import Picture1 from "../../assets/nalanda_institute.png";

const Gallery = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id='admindashboard'>
        <div className='container' style={{ marginTop: "14vh" }}>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
            // cssModule={AwesomeSliderStyles}
          >
            <div data-src={Picture1} />
            <div data-src={Picture1} />
            <div data-src={Picture1} />
            <div data-src={Picture1} />
          </AutoplaySlider>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
