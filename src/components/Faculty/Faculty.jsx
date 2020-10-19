import React from "react";
import Navbar from "../landingPage/Navbar";

const FacultyPage = () => {
  const facultyDetails = [
    {
      id: "1",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "Duraisamy",
      degree: "M.Sc",
      desc:
        "Main - Sociology, Geography, Prelims - Zoology, Botany, Constitution Question Analysis, Model Interviews.",
    },
    {
      id: "2",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "Duraisamy",
      degree: "M.Sc",
      desc: "desc",
    },
    {
      id: "3",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "Duraisamy",
      degree: "M.Sc",
      desc: "desc",
    },
    {
      id: "4",
      img: "https://randomuser.me/api/portraits/men/85.jpg",
      name: "Duraisamy",
      degree: "M.Sc",
      desc: "desc",
    },
  ];
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
        <div className='container-fluid mt-4'>
          <div className='row border'>
            {facultyDetails.map((faculty) => (
              <div className='col-sm-6 mt-1'>
                <div
                  className='card d-flex flex-row'
                  key={faculty.id}
                  style={{ height: "180px" }}>
                  <img
                    src={faculty.img}
                    alt={faculty.name}
                    style={{ borderRadius: "50ex" }}
                    height='80px'
                  />
                  <div className='flex-row pl-2'>
                    <h4>{faculty.name}</h4>
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
