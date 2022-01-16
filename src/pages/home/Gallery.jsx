import React from "react";

import Topbar from "./components/Topbar";

import PhotoGallery from "./components/PhotoGallery";
import { H1 } from "../../components/CustomTypography";
import Footer from "./components/Footer";

const Gallery = () => {
  return (
    <React.Fragment>
      <Topbar />
      <section className="container" style={{ marginTop: "14vh" }}>
        <H1 className="color-darkBlue text-center mb-5">All Photos & Videos</H1>
        <PhotoGallery />
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;
