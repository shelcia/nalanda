import React, { useEffect, useState } from "react";
import Topbar from "./components/Topbar";
import { apiCommon } from "../../services/models/CommonModel";
import { BoxLoaders } from "../../common/Loaders";
import { LOCALHOST_URL } from "../../services/api";
import LightTextField from "../../components/CustomLightTextField";
import { Avatar } from "@mui/material";
import { H6, Tiny, H3 } from "../../components/CustomTypography";
import Footer from "./components/Footer";

const FacultyPage = () => {
  const [facultyDetails, setFacultyDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();
    apiCommon
      .getSingle("faculty", ac.signal)
      .then((res) => {
        if (res.message === undefined) return;
        setFacultyDetails(res.message);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    return () => {
      return () => ac.abort();
    };
  }, []);

  const url = `${LOCALHOST_URL}/common/faculty`;

  return (
    <React.Fragment>
      <Topbar />
      <section className="container" id="faculty" style={{ marginTop: "14vh" }}>
        <LightTextField
          fullWidth
          placeholder="Search any faculty"
          size="small"
        />
        <div className="container-fluid mt-4 mb-2 px-0">
          <div className="row">
            {isLoading ? (
              <BoxLoaders />
            ) : (
              facultyDetails.map((faculty) => (
                <div className="col-md-4 mt-1 mb-1" key={faculty._id}>
                  <div
                    className="d-flex align-items-center flex-row p-3 shadow-sm bg-white"
                    style={{ height: "100px", borderRadius: "1rem" }}
                  >
                    <Avatar
                      alt={faculty.name}
                      src={`${url}/${faculty._id}`}
                      style={{ height: "70px", width: "70px" }}
                    />
                    <div className="flex-row ps-2">
                      <H3 className="color-darkBlue">{faculty.name}</H3>
                      <H6>{faculty.degree}</H6>
                      <Tiny>{faculty.desc}</Tiny>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default FacultyPage;
