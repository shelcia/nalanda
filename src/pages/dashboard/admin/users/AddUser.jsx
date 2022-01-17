import { Box, Button, Card, MenuItem } from "@mui/material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LightTextField from "../../../../components/CustomLightTextField";
import { H3 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";
import { apiAuth } from "../../../../services/models/AuthModel";

const AddUser = () => {
  useTitle("Add User");

  const [inputs, setInputs] = useState({
    userId: "",
    name: "",
    type: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const createUser = () => {
    setIsLoading(true);
    if (
      inputs.userId === "" ||
      inputs.name === "" ||
      inputs.type === "" ||
      inputs.password === ""
    ) {
      toast.error("All fields are mandatory !");
      return;
    }
    apiAuth.post(inputs, "register", true).then((res) => {
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
          className="shadow-sm p-4 border border-0"
        >
          <H3 className="mb-3">Enter User Details:</H3>
          <div className="row mt-4" style={{ minHeight: "50vh" }}>
            <div className="col-lg-12 d-flex flex-column justify-content-between">
              <LightTextField
                label="User Id*"
                name="userId"
                value={inputs.userId}
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
                label="Type*"
                name="type"
                onChange={handleInputs}
                value={inputs.type}
                select
                className="pb-2"
                size="small"
              >
                {["admin", "faculty", "student"].map((type, index) => (
                  <MenuItem value={type} className="nf" key={index}>
                    {type}
                  </MenuItem>
                ))}
              </LightTextField>
              <LightTextField
                label="Password*"
                name="password"
                type="password"
                value={inputs.password}
                onChange={handleInputs}
                className="pb-2"
                size="small"
              />
            </div>
          </div>
          <div className="text-end mt-3">
            {isLoading ? (
              <Button color="primary" variant="contained" disabled>
                Create User
              </Button>
            ) : (
              <Button color="primary" variant="contained" onClick={createUser}>
                Create User
              </Button>
            )}
          </div>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default AddUser;
