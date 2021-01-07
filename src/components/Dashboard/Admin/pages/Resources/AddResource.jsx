import React, { useState, useRef } from "react";
import Dropzone from "react-dropzone";
import Header from "../../partials/Header";
import Navbar from "../../partials/Navbar";
import Title from "../../partials/Title";

const AddResource = () => {
  const title = useRef("");
  const desc = useRef("");
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  //   const [state, setState] = useState({
  //     title: "",
  //     description: "",
  //   });
  //   const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images

  const dropRef = useRef();
  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px dashed #00b5eb";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #022f93";
    }
  };
  return (
    <React.Fragment>
      <div className="d-flex" style={{ overflow: "hidden", height: "100vh" }}>
        <Navbar />
        <div className="w-100 border" style={{ height: "100vh" }}>
          <Header />
          <div
            className="container-fluid py-4"
            style={{ overflowY: "scroll", height: "90vh" }}
          >
            <Title title="Add Resources" />
            <table className="table table-hover table-striped mt-2">
              <tbody>
                <tr>
                  <th>Title:</th>
                  <td>
                    <input
                      placeholder="Title"
                      ref={title}
                      className="form-control"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <th>Description:</th>
                  <td>
                    <input
                      placeholder="Description"
                      ref={desc}
                      className="form-control"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              className="upload-section d-flex mb-4"
              style={{ height: "200px" }}
            >
              <Dropzone
                onDrop={onDrop}
                onDragEnter={() => updateBorder("over")}
                onDragLeave={() => updateBorder("leave")}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps({
                      className:
                        "drop-zone mb-4 d-flex flex-column justify-content-center align-items-center",
                    })}
                    ref={dropRef}
                  >
                    <input {...getInputProps()} />
                    <p>Drag and drop a file OR click here to select a file</p>
                    {file && (
                      <div>
                        <strong>Selected file:</strong> {file.name}
                      </div>
                    )}
                  </div>
                )}
              </Dropzone>
              {previewSrc ? (
                isPreviewAvailable ? (
                  <div
                    className="image-preview ml-3"
                    style={{ height: "200px", width: "auto" }}
                  >
                    <img
                      className="preview-image img-fluid"
                      src={previewSrc}
                      alt="Preview"
                    />
                  </div>
                ) : (
                  <div className="preview-message text-danger">
                    <p>No preview available for this file</p>
                  </div>
                )
              ) : (
                <div className="preview-message">
                  <p>Image preview will be shown here after selection</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddResource;
