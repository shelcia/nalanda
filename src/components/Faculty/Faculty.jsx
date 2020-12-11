import React, { useEffect, useState } from "react";
import Navbar from "../landingPage/Navbar";
import axios from "axios";
import ReactLoader from "../subcomponents/Loader";

const FacultyPage = () => {
  const [facultyDetails, setFacultyDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/faculty`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setFacultyDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container" id="faculty" style={{ marginTop: "14vh" }}>
        <form className="form-inline text-center">
          <input
            placeholder="Search any faculty"
            type="text"
            className="form-control w-100"
          />
          {/* <button type="submit" className="btn btn-primary">
            Search
          </button> */}
        </form>
        <div className="container-fluid mt-4 mb-2 px-0">
          <div className="row">
            {isLoading ? (
              <ReactLoader size="300px" text="loading faculties" />
            ) : (
              facultyDetails.map((faculty) => (
                <div className="col-sm-6 mt-1" key={faculty._id}>
                  <div
                    className="card d-flex align-items-center justify-content-center flex-row p-3 shadow-sm rounded-lg border border-0"
                    style={{ height: "180px" }}
                  >
                    <img
                      src={faculty.image}
                      alt={faculty.fname}
                      style={{ borderRadius: "50ex" }}
                      height="80px"
                    />
                    <div className="flex-row pl-2">
                      <h4>
                        {faculty.fname} {faculty.lname}
                      </h4>
                      <h6>{faculty.degree}</h6>
                      <p>{faculty.desc}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FacultyPage;
