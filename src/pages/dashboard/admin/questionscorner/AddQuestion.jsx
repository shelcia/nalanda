import { Box, Button, Card } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import CustomDropzone from "../../../../components/CustomDropzone";
import LightTextField from "../../../../components/CustomLightTextField";
import { H3 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";
import { apiAdminDashboardModel } from "../../../../services/models/AdminDashboardModel";

const AddQuestion = () => {
  useTitle("Add Question/Note");

  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createQuestion = () => {
    setIsLoading(true);
    if (inputs.title === "") {
      toast.error("Enter Title Please!");
      return;
    }
    if (file === null) {
      toast.error("Upload File Please !");
      return;
    }

    const formData = new FormData();

    formData.append("document", file);
    formData.append("title", inputs.title);
    formData.append("desc", inputs.desc);

    apiAdminDashboardModel
      .postFormData(formData, "questions-corner", true)
      .then((res) => {
        if (res.status !== "200") {
          toast.error(res.message);
          return;
        }
        toast.success(res.message);
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
          className="shadow-sm p-4 border border-0 mt-5"
        >
          <H3 className="mb-3">Enter Question/Test Details:</H3>
          <div className="row mt-4" style={{ minHeight: "20vh" }}>
            <div className="col-lg-12 d-flex flex-column justify-content-between">
              {file && <p>You have added {file.name}</p>}
              <CustomDropzone setFile={setFile} />
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
                Create Question/Test
              </Button>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={createQuestion}
              >
                Create Question/Test
              </Button>
            )}
          </div>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default AddQuestion;
