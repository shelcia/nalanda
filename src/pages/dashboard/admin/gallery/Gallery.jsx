import { IconButton, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TableLoaders } from "../../../../common/Loaders";
import CustomTable from "../../../../components/CustomTable";
// import { convertDate } from "../../../../helper/convertDate";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";
import { apiCommon } from "../../../../services/models/CommonModel";

const Gallery = () => {
  useTitle("All Gallery");

  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const _getMedia = (signal) => {
    apiCommon
      .getSingle("gallery", signal)
      .then((res) => {
        if (res.message === undefined) return;
        setPhotos(res.message);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const ac = new AbortController();
    setIsLoading(true);
    _getMedia(ac.signal);
    return () => ac.abort();
  }, []);

  const deleteMedia = (id) => {
    apiAdminDashboardModel.remove(id, "gallery", true).then((res) => {
      // console.log(res);
      if (res.status !== "200") {
        toast.error("Some Error occured");
        return;
      }
      setIsLoading(true);
      _getMedia();
      toast.success("Photo Deleted");
    });
  };

  const columns = ["Sno", "Title", "Caption", "View", "Delete"];

  return isLoading ? (
    <TableLoaders />
  ) : (
    <React.Fragment>
      <div className="container" style={{ marginTop: "10vh" }}>
        <CustomTable headers={columns} rows={photos}>
          {photos.map((user, index) => (
            <TableRow key={user._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.title}</TableCell>
              <TableCell>{user.caption}</TableCell>
              <TableCell>
                <img
                  src={`https://nalanda-backend.herokuapp.com/api/common/gallery/${user._id}`}
                  alt=""
                  height="60px"
                />
              </TableCell>
              <TableCell>{user.desc}</TableCell>
              <TableCell>
                <IconButton
                  color="error"
                  onClick={(event) => {
                    deleteMedia(user._id);
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

export default Gallery;
