import { Box, Button, Card } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LightTextField from "../../../../components/CustomLightTextField";
import { H3 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";

const AddAnnouncement = () => {
  useTitle("Add Announcement");

  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createAnnouncement = () => {
    setIsLoading(true);
    if (inputs.title === "" || inputs.desc === "") {
      toast.error("All fields are mandatory !");
      return;
    }
    apiAdminDashboardModel.post(inputs, "announcements", true).then((res) => {
      if (res.status !== "200") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
    });

    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <Box pb={4}>
        <Card
          sx={{
            padding: "1.5rem 0",
          }}
          className="shadow-sm p-4 border border-0 mt-5"
        >
          <H3 className="mb-3">Enter Announcement Details:</H3>
          <div className="row mt-4" style={{ minHeight: "20vh" }}>
            <div className="col-lg-12 d-flex flex-column justify-content-between">
              <LightTextField
                label="Title*"
                name="title"
                value={inputs.title}
                onChange={handleInputs}
                className="pb-2"
                size="small"
              />
              <LightTextField
                label="Description*"
                name="desc"
                value={inputs.desc}
                onChange={handleInputs}
                className="pb-2"
                size="small"
              />
            </div>
          </div>
          <div className="text-end mt-3">
            {isLoading ? (
              <Button color="primary" variant="contained" disabled>
                Create Announcement
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={createAnnouncement}
              >
                Create Announcement
              </Button>
            )}
          </div>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default AddAnnouncement;
