import { Box, Grid, useTheme, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomDispCard from "../../../../components/CustomDispCard";
import { H5 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";
import { apiCommon } from "../../../../services/models/CommonModel";

const Home = () => {
  useTitle("Hello User!");

  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  const theme = useTheme();

  const [users, setUsers] = useState([]);

  const _getUsers = (signal) => {
    apiAdminDashboardModel
      .getSingle("users", signal, undefined, true)
      .then((res) => {
        if (res.status === "200") {
          setUsers(res.message);
        }
      });
  };

  useEffect(() => {
    const ac = new AbortController();
    _getUsers(ac.signal);
    return () => ac.abort();
  }, []);

  const [facultyDetails, setFacultyDetails] = useState([]);

  const _getFaculties = (signal) => {
    apiCommon.getSingle("faculty", signal).then((res) => {
      if (res.message === undefined) return;
      setFacultyDetails(res.message);
    });
  };

  useEffect(() => {
    const ac = new AbortController();
    _getFaculties(ac.signal);
    return () => ac.abort();
  }, []);

  const cardList = [
    {
      number: users.length === 0 ? 0 : users.length,
      icon: "fas fa-users",
      title: "All Users",
      color: theme.palette.primary.yellow,
    },
    {
      number: facultyDetails.length === 0 ? 0 : facultyDetails.length,
      icon: "fas fa-graduation-cap",
      title: "All Faculties",
      color: theme.palette.primary.purple,
    },
  ];

  return (
    <React.Fragment>
      <div className="container mt-5">
        <H5>Info</H5>
        <Box pt={2} pb={4}>
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 3,
              md: 4,
            }}
          >
            {cardList.map((card, index) => (
              <Grid item lg={3} xs={6} key={index}>
                <CustomDispCard card={card} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <div className="text-end mt-5">
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
