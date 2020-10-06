import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="mt-5" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <a href="/" className="footerlink">
                Syllabus
              </a>
              <br />
              <a href="/" className="footerlink">
                Eligibilty
              </a>
              <br />
              <a href="/" className="footerlink">
                Resources
              </a>
              <br />
              <a href="/" className="footerlink">
                Courses
              </a>
              <br />
              <a href="/" className="footerlink">
                Faculty
              </a>
              <br />
              <a href="/" className="footerlink">
                Newletter
              </a>
              <br />
              <a href="/" className="footerlink">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
