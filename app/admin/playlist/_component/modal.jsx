"use client";

import AudioModal from "./audioModal";
import AuthModal from "./authModal";
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
      <AuthModal />
    </>
  );
};

export default Modal;
