import { IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TableLoaders } from "../../../../common/Loaders";
import { convertDate } from "../../../../helper/convertDate";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";
import { apiCommon } from "../../../../services/models/CommonModel";

const Announcements = () => {
  useTitle("All Announcements");

  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _getAnnouncements = (signal) => {
    apiCommon.getSingle("announcements", signal, undefined).then((res) => {
      //   console.log(res);
      const rows = res.message.map((row) => {
        const { _id, ...rest } = row;
        return { id: _id, ...rest };
      });
      const drows = rows.map((row) => {
        const { date, ...rest } = row;
        return { date: convertDate(date), ...rest };
      });
      setAnnouncements(drows);
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const ac = new AbortController();

    setIsLoading(true);

    _getAnnouncements(ac.signal);

    return () => ac.abort();
  }, []);

  const deleteAnnouncement = (id) => {
    apiAdminDashboardModel.remove(id, "announcements", true).then((res) => {
      //   console.log(res);
      if (res.status !== "200") {
        toast.error(res.message);
        return;
      }
      setIsLoading(true);
      _getAnnouncements();
      toast.success(res.message);
    });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "desc", headerName: "Description", width: 600 },
    { field: "date", headerName: "Posted On", width: 130 },
    {
      field: "date",
      headerName: "Delete",
      width: 100,
      renderCell: (cellValues) => {
        // console.log(cellValues.row.id);
        return (
          <IconButton
            color="error"
            onClick={(event) => {
              deleteAnnouncement(cellValues.row.id);
            }}
          >
            <i className="far fa-trash-alt fa-sm"></i>
          </IconButton>
        );
      },
    },
  ];

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}></div>
      <div style={{ width: "100%", height: 500 }}>
        <DataGrid
          rows={announcements}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
    </React.Fragment>
  );
};

export default Announcements;
