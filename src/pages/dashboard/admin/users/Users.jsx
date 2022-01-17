import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { TableLoaders } from "../../../../common/Loaders";
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
        // console.log(res);
        const rows = res.message.map((row) => {
          const { _id, ...rest } = row;
          return { id: _id, ...rest };
        });
        const drows = rows.map((row) => {
          const { date, ...rest } = row;
          return { date: convertDate(date), ...rest };
        });
        setUsers(drows);
      });
    setIsLoading(false);

    return () => ac.abort();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "userId", headerName: "User Id", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "date", headerName: "Joined On", width: 130 },
  ];

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}></div>
      <div style={{ width: "100%", height: 500 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </React.Fragment>
  );
};

export default Users;
