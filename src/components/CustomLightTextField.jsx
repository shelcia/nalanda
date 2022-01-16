import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  FormHelperText,
  styled,
  TextField,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    border: "2px solid",
    borderColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary[300]
        : theme.palette.divider,
  },
  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.secondary[300],
  },
}));

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    fontWeight: 500,
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "8px",
    border: "2px solid",
    borderColor:
      theme.palette.mode === "light"
        ? theme.palette.secondary[300]
        : theme.palette.divider,
  },
  "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.secondary[300],
  },
}));

const LightTextField = (props) => {
  const { customtype, error, helpertext } = props;
  // console.log(props);

  const [showPassword, setShowPassword] = useState(false);

  return customtype === "password" ? (
    <FormControl className="w-100">
      <StyledOutlinedInput
        type={showPassword ? "text" : "password"}
        {...props}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error && <FormHelperText error={true}>{helpertext}</FormHelperText>}
    </FormControl>
  ) : (
    <StyledTextField {...props} />
  );
};

export default LightTextField;
