import { TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableLoaders } from "../../../../common/Loaders";
import CustomTable from "../../../../components/CustomTable";
import { convertDate } from "../../../../helper/convertDate";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";

const Users = () => {
  useTitle("All Users");

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    setIsLoading(true);

    apiAdminDashboardModel
      .getSingle("users", ac.signal, undefined, true)
      .then((res) => {
        setUsers(res.message);
      });
    setIsLoading(false);

    return () => ac.abort();
  }, []);

  const columns = ["Sno", "Name", "UserId", "Type", "Joined On"];

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
            </TableRow>
          ))}
        </CustomTable>
      </div>
    </React.Fragment>
  );
};

export default Users;
