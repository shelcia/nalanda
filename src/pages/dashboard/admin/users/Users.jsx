import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TableLoaders } from "../../../../common/Loaders";
import CustomTable from "../../../../components/CustomTable";
import { convertDate } from "../../../../helper/convertDate";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";

const Users = () => {
  useTitle("All Users");

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _getUsers = (signal) => {
    apiAdminDashboardModel
      .getSingle("users", signal, undefined, true)
      .then((res) => {
        if (res.status === "200") {
          setUsers(res.message);
        }
      });
    setIsLoading(false);
  };

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);
    _getUsers(ac.signal);
    return () => ac.abort();
  }, []);

  const columns = ["Sno", "Name", "UserId", "Type", "Joined On", "Delete"];

  const deleteUser = (id) => {
    apiAdminDashboardModel.remove(id, "users", true).then((res) => {
      //   console.log(res);
      if (res.status !== "200") {
        toast.error(res.message);
        return;
      }
      setIsLoading(true);
      _getUsers();
      toast.success(res.message);
    });
  };

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}>
        <CustomTable headers={columns} rows={users}>
          {users.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.type}</TableCell>
              <TableCell>{user.date ? convertDate(user.date) : ""}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={(event) => {
                    deleteUser(user._id);
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

export default Users;
