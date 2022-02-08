import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TableLoaders } from "../../../../common/Loaders";
import CustomTable from "../../../../components/CustomTable";
import { convertDate } from "../../../../helper/convertDate";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";
// import { apiCommon } from "../../../../services/models/CommonModel";

const Notes = () => {
  useTitle("All Notes");

  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _getQuestions = (signal) => {
    apiAdminDashboardModel
      .getSingle("notes", signal, undefined, true)
      .then((res) => {
        //   console.log(res);
        if (res.status !== "200") {
          toast.error("Some Error Occurred. Please try reloading !");
          setIsLoading(false);
          return;
        }
        setQuestions(res.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);
    _getQuestions(ac.signal);
    return () => ac.abort();
  }, []);

  const deleteQuestion = (id) => {
    apiAdminDashboardModel.remove(id, "notes", true).then((res) => {
      //   console.log(res);
      if (res.status !== "200") {
        toast.error(res.message);
        return;
      }
      setIsLoading(true);
      _getQuestions();
      toast.success(res.message);
    });
  };

  const columns = [
    "Sno",
    "Title",
    "Description",
    "Posted On",
    "View",
    "Delete",
  ];

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}>
        <CustomTable headers={columns} rows={questions}>
          {questions.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.title}</TableCell>
              <TableCell>{user.desc}</TableCell>
              <TableCell>{user.date ? convertDate(user.date) : ""}</TableCell>
              <TableCell>
                <a
                  href={`https://nalanda-backend.herokuapp.com/api/student/dashboard/notes/${user._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="primary">
                    <i className="fas fa-eye fa-sm"></i>
                  </IconButton>
                </a>
              </TableCell>
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

export default Notes;
