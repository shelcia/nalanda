import React from "react";
import Topbar from "./components/Topbar";
import { H1 } from "../../components/CustomTypography";
import { Card, CardContent } from "@mui/material";
import Footer from "./components/Footer";

const ContactUs = () => {
  return (
    <React.Fragment>
      <Topbar />
      <section className="container" style={{ marginTop: "14vh" }} id="contact">
        <H1 className="color-darkBlue text-center mb-5">Contact Us</H1>
        <div className="row">
          <div className="col-md-6">
            <Card className="border border-0 shadow-sm h-100">
              <CardContent>
                <p>
                  <b className="color-blue"> Class: </b> BATCH I: Sat&Sun, BATCH
                  II : DAILY <br />
                  <br /> <b className="color-blue">Call or text us:</b>{" "}
                  9999999999 <br />
                  <br /> <b className="color-blue">Mobile:</b> 9994116924,
                  9443738311, 9443738311
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="border border-0 shadow-sm h-100">
              <CardContent>
                <p>
                  <b className="color-blue"> Kanchipuram Centre Address</b>{" "}
                  <br />
                  <br />
                  Nalanda Coaching centre (Head Office) N0.16, Thiruppurkumaran
                  street, Opposite to Collector Bungalow, Kanchipuram - 631501.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
