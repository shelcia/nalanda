import { Backdrop, Fade, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { H4, Paragraph } from "../../../components/CustomTypography";

const HeaderImage = () => {
  // Modal state handling
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <React.Fragment>
      <div className="header me-0">
        <div className="row h-100 ps-3">
          <div className="col-sm-7 px-5 d-flex justify-content-center align-items-left flex-column">
            <h2 className="title font-weight-bold color-darkBlue">
              Nalanda Coaching Centre
            </h2>
            <p className="catchline color-white pt-4">
              Nalanda, the Institute that ensure your Success <br />
              Ancient Nalanda is Known for learning your Art <br />
              <b className="color-yellow text-uppercase">Kanchi Nalanda</b> is
              known for coaching in competitive exam
            </p>
          </div>
          <div className="col-sm-5 d-flex">
            <div className="sideline">
              <button onClick={handleOpen} className="btn btn-primary">
                Admission Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>
      <AdmissionModal open={open} setOpen={setOpen} />
    </React.Fragment>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRaduis: 40,
  p: 4,
};

const AdmissionModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <H4 className="modal-title">Admission Enquiry</H4>
          <Paragraph sx={{ mt: 2 }}>Contact Satti</Paragraph>
        </Box>
      </Fade>
    </Modal>
  );
};

export default HeaderImage;
