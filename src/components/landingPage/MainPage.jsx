import React from "react";
import Header from "./Header";
import Counter from "./Counters";
import DirectorMessage from "./DirectorsMessage";
import Announcements from "./Announcements";
import Testimonials from "./Testimonials";

const MainPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Counter />
      <DirectorMessage />
      <Announcements />
      <Testimonials />
    </React.Fragment>
  );
};

export default MainPage;
