import React, { useState, useCallback, useEffect } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { apiCommon } from "../../../services/models/CommonModel";

// const photos = [
//   {
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 1,
//     height: 1,
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//     width: 4,
//     height: 3,
//   },
// ];

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const [photos, setPhotos] = useState([]);

  const _getMedia = (signal) => {
    apiCommon.getSingle("gallery", signal).then((res) => {
      if (res.message === undefined) return;
      const updated = res.message?.map((photo) => {
        return {
          title: photo.title,
          src: `https://nalanda-backend.herokuapp.com/api/common/gallery/${photo._id}`,
          width: 4,
          height: 3,
        };
      });
      setPhotos(updated);
    });
  };

  useEffect(() => {
    const ac = new AbortController();
    _getMedia(ac.signal);
    return () => ac.abort();
  }, []);

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
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
