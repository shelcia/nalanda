import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Bar from "../../assets/bar.png";
import Quote from "../../assets/quote.svg";
import axios from "axios";
import ReactLoader from "../subcomponents/Loader";

const Testimonials = () => {
  const isMobile = window.innerWidth < 480;
  const showItems = isMobile ? 1 : 3;
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  const url = `${process.env.REACT_APP_API_LINK}common/testimonials`;

  useEffect(() => {
    const ac = new AbortController();
    const fetchResult = () => {
      axios
        .get(url)
        .then((res) => {
          console.log(res);
          setTestimonials(res.data.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    };
    fetchResult();
    return () => ac.abort();
  }, [url]);

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
          {isLoading ? (
            <ReactLoader size="200px" text="loading Testimonials" />
          ) : (
            <div className="card-deck">
              <Carousel itemsToShow={showItems}>
                {testimonials.map((item) => (
                  <div
                    className="card shadow border-0 my-3 rounded-lg"
                    style={{ minHeight: "250px", width: "250px" }}
                    key={item._id}
                  >
                    <div className="card-body">
                      <div className="card-title">{item.title}</div>
                      <div className="card-text border-bottom pb-4">
                        {item.desc}
                      </div>
                    </div>
                    <div className="card-body mt-0">
                      <div className="clearfix">
                        <div className="float-left w-25">
                          <img
                            src={`${url}/${item._id}`}
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
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Testimonials;
