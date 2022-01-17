import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TableLoaders } from "../../../../common/Loaders";
import CustomTable from "../../../../components/CustomTable";
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
      setAnnouncements(res.message);
      setIsLoading(false);
    });
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

  const columns = ["Sno", "Title", "Description", "Posted On", "Delete"];

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}>
        <CustomTable headers={columns} rows={announcements}>
          {announcements.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.title}</TableCell>
              <TableCell>{user.desc}</TableCell>
              <TableCell>{user.date ? convertDate(user.date) : ""}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={(event) => {
                    deleteAnnouncement(user._id);
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

export default Announcements;
