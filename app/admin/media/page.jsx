"use client";

import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const page = () => {
  return (
    <>
      <CldUploadWidget uploadPreset="dj-zaddy">
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </>
  );
};

export default page;
