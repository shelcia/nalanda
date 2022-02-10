import React, { useState, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { apiCommon } from "../../../services/models/CommonModel";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Skeleton,
  styled,
} from "@mui/material";

const CustomImageList = styled(ImageList)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
}));

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [photos, setPhotos] = useState([]);

  const _getMedia = (signal) => {
    apiCommon.getSingle("gallery", signal).then((res) => {
      if (res.message === undefined) {
        setIsLoading(false);
        return;
      }
      const updated = res.message?.map((photo) => {
        return {
          title: photo.title,
          src: `https://nalanda-backend.herokuapp.com/api/common/gallery/${photo._id}`,
        };
      });
      setPhotos(updated);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    const ac = new AbortController();
    _getMedia(ac.signal);
    return () => ac.abort();
  }, []);

  return isLoading ? (
    <div>
      <Skeleton variant="rectangular" width={210} height={118} />
      {/* <Skeleton variant="rectangular" width={"33%"} height={118} />
      <Skeleton variant="rectangular" width={"33%"} height={118} /> */}
    </div>
  ) : (
    <div className="text-center">
      <CustomImageList cols={5}>
        {photos.map((item, index) => (
          <ImageListItem key={item.src}>
            <img
              // src={item.src}
              src={`${item.src}?w=248&fit=crop&auto=format`}
              srcSet={`${item.src}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => openLightbox(index)}
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="bottom"
              actionPosition="left"
            />
          </ImageListItem>
        ))}
      </CustomImageList>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default PhotoGallery;
