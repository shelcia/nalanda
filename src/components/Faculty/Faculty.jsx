import React, { useEffect, useState } from "react";
import Navbar from "../landingPage/Navbar";
import axios from "axios";

const FacultyPage = () => {
  const [facultyDetails, setFacultyDetails] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_LINK}admin/dashboard/faculty`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setFacultyDetails(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const facultyDetails = [
  //   {
  //     id: "1",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc:
  //       "Main - Sociology, Geography, Prelims - Zoology, Botany, Constitution Question Analysis, Model Interviews.",
  //   },
  //   {
  //     id: "2",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "3",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "4",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "5",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "6",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "7",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc:
  //       "Main - Sociology, Geography, Prelims - Zoology, Botany, Constitution Question Analysis, Model Interviews.",
  //   },
  //   {
  //     id: "8",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "9",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "10",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "11",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  //   {
  //     id: "12",
  //     img: "https://randomuser.me/api/portraits/men/85.jpg",
  //     name: "Duraisamy",
  //     degree: "M.Sc",
  //     desc: "desc",
  //   },
  // ];
  return (
    <React.Fragment>
      <Navbar />
      <div className='container' id='faculty'>
        <form className='form-inline'>
          <input
            placeholder='Search any faculty'
            type='text'
            className='form-control'
          />
          <button type='submit' className='btn btn-primary'>
            Search
          </button>
        </form>
        <div className='container-fluid mt-4 mb-2 pl-0 pr-0'>
          <div className='row'>
            {facultyDetails.map((faculty) => (
              <div className='col-sm-6 mt-1' key={faculty._id}>
                <div
                  className='card d-flex flex-row'
                  style={{ height: "180px" }}>
                  <img
                    src={faculty.image}
                    alt={faculty.fname}
                    style={{ borderRadius: "50ex" }}
                    height='80px'
                  />
                  <div className='flex-row pl-2'>
                    <h4>
                      {faculty.fname} {faculty.lname}
                    </h4>
                    <h6>{faculty.degree}</h6>
                    <p>{faculty.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FacultyPage;