import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <React.Fragment>
      <div className="header" style={{ marginTop: "10vh" }}>
        <div className="row h-100 pl-3">
          <div className="col-sm-7 px-5 d-flex justify-content-center align-items-left flex-column">
            <h2 className="title font-weight-bold color-darkBlue">
              Nalanda Coaching Centre
            </h2>
            <p className="catchline color-white pt-4">
              Nalanda, the Institute that ensure your Success <br />
              Ancient Nalanda is Known for learning your Art <br />
              <b className="highlight color-yellow text-uppercase">
                Kanchi Nalanda
              </b>{" "}
              is known for coaching in competitive exam
            </p>
          </div>
          <div className="col-sm-5">
            <div className="sideline">
              <button data-toggle="modal" data-target="#admissionModal">
                Admission Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal />
      <Navbar />
    </React.Fragment>
  );
};

export default Header;

const Modal = () => {
  return (
    <div className="modal fade" id="admissionModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal Heading</h4>
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div className="modal-body">Modal body..</div>

          <div className="modal-footer">
            <button type="button" className="button" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
