import React from "react";
import Institute from "../../../assets/home/nalanda_institute.png";
import Bar from "../../../assets/common/bar.png";
import { H2 } from "../../../components/CustomTypography";

const DMessage = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mt-5 px-4" id="directorMessage">
        <div className="row">
          <div className="col-sm-6 p-4">
            <img src={Institute} alt="" className="w-100" />
          </div>
          <div className="col-sm-6">
            <H2 className="title color-darkBlue font-weight-bold mb-0 ">
              Director's Message
            </H2>
            <img src={Bar} alt="bar" id="bar" />
            <p className="content mt-2 color-primary">
              Dear Student, I welcome you to Nalanda Website and like to share
              few words with you. We are now in the world of competition. Where
              ever we go, whichever we want, we have to compete with others to
              get it. God has given 24 hours in a day or 1440 minute or 86400
              seconds to all in the world. The person who utilize this time most
              efficient with 100% plan with proper time management can alone
              triumph. Once American industrialist Henry ford was asked about
              the secrete of his success. He replied that my secret is simple
              "never miss an opportunity". So whenever it comes you showed temp
              and ride over it. You should not be person who is waiting for a
              bus in the bus stand rather a person who move and board the bus
              even before it get into the bus stand so that you can ensure your
              seating in the bus. Keeping this principle in mind, you should be
              cheerful, calculative at the time of preparation and be
              intelligent to win over the competition. In the days close to
              examination you should not strain much, you begin to relax 3 to 4
              days prior to exam. Be cool and calm in examination centre. Don't
              hurry in attending question but have fine conscious. Don't erase
              answers in coding sheet (OMR). Wish you all success. May god bless
              you
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DMessage;
