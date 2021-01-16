import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Bar from "../../assets/bar.png";
import axios from "axios";
import ReactLoader from "../subcomponents/Loader";

const Announcements = () => {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const size = window.innerWidth;
    if (size < 900) {
      setItemsToShow(2);
    }
    if (size < 600) {
      setItemsToShow(1);
    }
  }, [itemsToShow]);

  const url = `${process.env.REACT_APP_API_LINK}common/announcements`;

  useEffect(() => {
    const fetchResult = () => {
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setAnnouncements(res.data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    fetchResult();
  }, [url]);

  const convertDate = (date) => {
    const dates = new Date(date);
    const formattedDate = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(dates);
    return formattedDate;
  };

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
            {isLoading ? (
              <ReactLoader size="200px" text="loading Annoucements" />
            ) : (
              <Carousel itemsToShow={itemsToShow}>
                {announcements.map((item) => (
                  <div
                    className="card shadow border-0 my-3"
                    style={{ minHeight: "200px", width: "250px" }}
                    key={item._id}
                  >
                    <div className="card-body">
                      <div className="card-title mt-2">{item.title}</div>
                      <div className="card-text">{item.desc}</div>
                      <div className="mt-2 text-muted">
                        {item.date ? convertDate(item.date) : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Announcements;
