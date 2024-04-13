"use client";

import { CldUploadWidget } from "next-cloudinary";
import { FiUploadCloud } from "react-icons/fi";

export const UploadBtn = () => {
  return (
    <>
      <div className="flex items-center">
        <CldUploadWidget uploadPreset="<Your Upload Preset>">
          {({ open }) => {
            return (
              <button onClick={() => open()}>
                <FiUploadCloud className="text-[40px]" />
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
    </>
  );
};
