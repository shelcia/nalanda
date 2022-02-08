// import { Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const CustomDropzone = ({ setFile, height = "auto" }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      console.log({ acceptedFiles });
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="drag-drop">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {/* <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <Typography className="hs pointer" variant="caption" align="center">
            Drag & Drop files here OR Click here to select files
          </Typography>
        )}
      </div> */}
    </div>
  );
};

export default CustomDropzone;
