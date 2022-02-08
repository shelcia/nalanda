import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TableLoaders } from "../../../../common/Loaders";
import CustomTable from "../../../../components/CustomTable";
// import { convertDate } from "../../../../helper/convertDate";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";
import { apiCommon } from "../../../../services/models/CommonModel";

const Faculty = () => {
  useTitle("All Faculty");

  const [facultyDetails, setFacultyDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _getFaculties = (signal) => {
    apiCommon
      .getSingle("faculty", signal)
      .then((res) => {
        if (res.message === undefined) return;
        setFacultyDetails(res.message);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);
    _getFaculties(ac.signal);
    return () => ac.abort();
  }, []);

  const deleteQuestion = (id) => {
    apiAdminDashboardModel.remove(id, "faculty", true).then((res) => {
      //   console.log(res);
      if (res.status !== "200") {
        toast.error("Some Error occured");
        return;
      }
      setIsLoading(true);
      _getFaculties();
      toast.success("Faculty Deleted");
    });
  };

  const columns = [
    "Sno",
    "Name",
    "Faculty Id",
    "Degree",
    "Description",
    "Delete",
  ];

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}>
        <CustomTable headers={columns} rows={facultyDetails}>
          {facultyDetails.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.facId}</TableCell>
              <TableCell>{user.degree}</TableCell>
              <TableCell>{user.desc}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={(event) => {
                    deleteQuestion(user._id);
                  }}
                >
                  <i className="far fa-trash-alt fa-sm"></i>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </CustomTable>
      </div>
    </React.Fragment>
  );
};

export default Faculty;
