import React from "react";
import Carousel from "react-elastic-carousel";
import Bar from "../../assets/bar.png";

const Testimonials = () => {
  const isMobile = window.innerWidth < 480;
  const showItems = isMobile ? 1 : 3;
  const testimonials = {
    items: [
      { id: 1, title: `<div>hi </div>` },
      { id: 2, title: "item #2" },
      { id: 3, title: "item #3" },
      { id: 4, title: "item #4" },
      { id: 5, title: "item #5" },
    ],
  };

  return (
    <React.Fragment>
      <div className='mt-5' id='testimonials'>
        <h2 className='title text-center'>Here it from our students !</h2>
        <div className='text-center'>
          <img src={Bar} alt='bar' id='bar' />
        </div>
        <div className='container-fluid'>
          <div className='card-deck'>
            <Carousel itemsToShow={showItems}>
              {testimonials.items.map((item) => (
                <div
                  className='card'
                  style={{ height: "200px", width: "250px" }}
                  key={item.id}>
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

export default Testimonials;
