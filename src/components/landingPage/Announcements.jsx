import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Bar from "../../assets/bar.png";

const Announcements = () => {
  // console.log(window);
  // console.log(Carousel);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [announcements] = useState([
    {
      id: 1,
      title: "item #1",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      date: "27 Aug 2020",
    },
    {
      id: 2,
      title: "item #2",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      date: "27 Aug 2020",
    },
    {
      id: 3,
      title: "item #3",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      date: "27 Aug 2020",
    },
    {
      id: 4,
      title: "item #4",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020 ",
      date: "27 Aug 2020",
    },
    {
      id: 5,
      title: "item #5",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      date: "27 Aug 2020",
    },
  ]);

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 900) {
      setItemsToShow(2);
    }
    if (size < 600) {
      setItemsToShow(1);
    }
  }, [itemsToShow]);

  return (
    <React.Fragment>
      <div className="mt-5" id="announcement">
        <h2 className="text-center mb-0 font-weight-bold color-darkBlue pb-0">
          Announcements
        </h2>
        <div className="text-center mb-0 pb-0">
          <img src={Bar} alt="bar" id="bar" />
        </div>
        <div className="container-fluid px-4">
          <div className="card-deck py-4">
            <Carousel itemsToShow={itemsToShow}>
              {announcements.map((item) => (
                <div
                  className="card shadow border-0 my-3"
                  style={{ minHeight: "200px", width: "250px" }}
                  key={item.id}
                >
                  <div className="card-body">
                    <div className="card-title">{item.title}</div>
                    <div className="card-text">{item.content}</div>
                    <div className="mt-2 text-muted">{item.date}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Announcements;
