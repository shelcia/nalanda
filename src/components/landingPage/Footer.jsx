import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="mt-5" id="footer">
        <div className="container-fluid">
          <div className="row px-5">
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
            <div className="col-sm-5">
              <p>
                <b className="highlight"> Class: </b> BATCH I: Sat&Sun, BATCH II
                : DAILY <br />
                <br /> <b className="highlight">
                  Call or text us:
                </b> 9999999999 <br />
                <br /> <b className="highlight">Mobile:</b> 9994116924,
                9443738311, 9443738311
              </p>
            </div>
            <div className="col-sm-4">
              <p>
                <b className="highlight"> Kanchipuram Centre </b> <br />
                <br />
                Nalanda Coaching centre (Head Office) N0.16, Thiruppurkumaran
                street, Opposite to Collector Bungalow, Kanchipuram - 631501.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
