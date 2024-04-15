"use client";

import AudioModal from "./audioModal";
import EventModal from "./eventModal";
import ImageModal from "./imageModal";
import VideoModal from "./videoModal";

const Modal = () => {
  return (
    <>
      <ImageModal />
      <AudioModal />
      <VideoModal />
      <EventModal />
    </>
  );
};

export default Modal;
