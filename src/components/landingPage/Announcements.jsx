import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Bar from "../../assets/bar.png";

const Announcements = () => {
  console.log(window);
  console.log(Carousel);
  const [itemsToShow, setItemsToShow] = useState(3);
  const announcements = {
    items: [
      { id: 1, title: "item #1" },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

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
        <h2 className="title text-center">Announcements</h2>
        <div className="text-center">
          <img src={Bar} alt="bar" id="bar" />
        </div>
        <div className="container-fluid">
          <div className="card-deck border">
            <Carousel itemsToShow={itemsToShow}>
              {announcements.items.map((item) => (
                <div
                  className="card"
                  style={{ height: "200px", width: "250px" }}
                  key={item.id}
                >
                  {item.title}
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
