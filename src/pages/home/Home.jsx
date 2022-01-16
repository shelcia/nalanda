import React from "react";
import HeaderImage from "./components/HeaderImage";
import Topbar from "./components/Topbar";
import Counters from "./components/Counters";
import DirectorMessage from "./components/DirectorMessage";
import Announcements from "./components/Announcements";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <HeaderImage />
      <Counters />
      <DirectorMessage />
      <Announcements />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
