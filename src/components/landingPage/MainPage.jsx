import React from "react";
import Header from "./Header";
import Counter from "./Counters";
import DirectorMessage from "./DirectorsMessage";
import Announcements from "./Announcements";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Counter />
      <DirectorMessage />
      <Announcements />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
