import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Bar from "../../assets/bar.png";
import Quote from "../../assets/quote.svg";

const Testimonials = () => {
  const isMobile = window.innerWidth < 480;
  const showItems = isMobile ? 1 : 3;
  const [testimonials] = useState([
    {
      id: 1,
      title: "item #1",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "John Doe",
      program: "Classroom Program",
    },
    {
      id: 2,
      title: "item #2",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "John Doe",
      program: "Classroom Program",
    },
    {
      id: 3,
      title: "item #3",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      date: "27 May 2020",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "John Doe",
      program: "Classroom Program",
    },
    {
      id: 4,
      title: "item #4",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "John Doe",
      program: "Classroom Program",
    },
    {
      id: 5,
      title: "item #5",
      content:
        "Course - 1. Online cum regular Classroom Coaching. Batch 2. Only Online class - Started - August 15, 2020",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "John Doe",
      program: "Classroom Program",
    },
  ]);

  return (
    <React.Fragment>
      <div className="mt-5" id="testimonials">
        <h2 className="text-center mb-0 font-weight-bold color-darkBlue pb-0">
          Here it from our students !
        </h2>
        <div className="text-center mb-0 pb-0">
          <img src={Bar} alt="bar" id="bar" />
        </div>
        <div className="container-fluid px-4">
          <div className="card-deck">
            <Carousel itemsToShow={showItems}>
              {testimonials.map((item) => (
                <div
                  className="card shadow border-0 my-3 rounded-lg"
                  style={{ minHeight: "250px", width: "250px" }}
                  key={item.id}
                >
                  <div className="card-body">
                    <div className="card-title">{item.title}</div>
                    <div className="card-text border-bottom pb-4">
                      {item.content}
                    </div>
                  </div>
                  <div className="card-body mt-0">
                    <div className="clearfix">
                      <div className="float-left w-25">
                        <img
                          src={`${item.img}`}
                          alt=""
                          className="rounded-circle img-fluid"
                        ></img>
                      </div>
                      <div className="float-right w-75 pl-3 d-flex align-items-center">
                        <div>
                          <div className="card-title mb-0">{item.name}</div>
                          <div className="card-text">{item.program}</div>
                        </div>
                        <div>
                          <img src={Quote} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </div>
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

export default Testimonials;
