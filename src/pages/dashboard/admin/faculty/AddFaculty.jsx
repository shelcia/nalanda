import React, { useState } from "react";
import { Box, Button, Card } from "@mui/material";
import toast from "react-hot-toast";
import CustomDropzone from "../../../../components/CustomDropzone";
import LightTextField from "../../../../components/CustomLightTextField";
import { H3 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";

const AddFaculty = () => {
  useTitle("Add Faculty");

  const [inputs, setInputs] = useState({
    facId: "",
    name: "",
    degree: "",
    desc: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createQuestion = () => {
    setIsLoading(true);
    if (inputs.facId === "" || inputs.name === "" || inputs.degree === "") {
      toast.error("Enter Mandatory Fields Please!");
      return;
    }
    // if (file === null) {
    //   toast.error("Upload File Please !");
    //   return;
    // }

    let formData = new FormData();

    formData.append("image", file);
    formData.append("facId", inputs.facId);
    formData.append("name", inputs.name);
    formData.append("degree", inputs.degree);
    formData.append("desc", inputs.desc);

    apiAdminDashboardModel
      .postFormData(formData, "faculty", true)
      .then((res) => {
        if (res.status !== "200") {
          toast.error("Error occured");
          return;
        }
        toast.success("Faculty Added");
      });

    setIsLoading(false);
  };

  const [file, setFile] = useState(null);

  return (
    <React.Fragment>
      <Box pb={4}>
        <Card
          sx={{
            padding: "1.5rem 0",
          }}
          className="mt-5 border border-0 p-4 shadow-sm"
        >
          <H3 className="mb-3">Enter Faculty Details:</H3>
          <div className="row mt-4" style={{ minHeight: "20vh" }}>
            <div className="col-lg-12 d-flex flex-column justify-content-between">
              {file && (
                <>
                  <p>You have added {file.name}</p>
                  <img
                    src={URL.createObjectURL(file)}
                    width={200}
                    alt="Thumb"
                  />
                </>
              )}
              <CustomDropzone setFile={setFile} />
              <LightTextField
                label="Faculty Id*"
                name="facId"
                value={inputs.facId}
                onChange={handleInputs}
                className="pb-2"
                size="small"
              />
              <LightTextField
                label="Name*"
                name="name"
                value={inputs.name}
                onChange={handleInputs}
                className="pb-2"
                size="small"
              />
              <LightTextField
                label="Degree*"
                name="degree"
                value={inputs.degree}
                onChange={handleInputs}
                className="pb-2"
                size="small"
              />
              <LightTextField
                label="Description"
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
                Create Faculty
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={createQuestion}
              >
                Create Faculty
              </Button>
            )}
          </div>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default AddFaculty;
