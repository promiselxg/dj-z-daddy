"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/media?query=image`);
      setData(response?.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full mb-10">
        <PhotoProvider>
          <div className="w-full flex cursor-pointer flex-col md:flex-row">
            {data.map((image) => (
              <PhotoView key={image?.id} src={image?.mediaUrl}>
                <Image
                  src={image?.mediaUrl}
                  alt={image?.description}
                  width={200}
                  height={200}
                  className="w-full h-[150px] md:w-[200px]"
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export default Gallery;
