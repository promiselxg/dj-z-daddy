"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Discography = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/media?query=video`);
      setData(response?.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {data?.map((video) => {
        return (
          <CldVideoPlayer
            width="1620"
            height="1080"
            src={video?.mediaUrl}
            key={video?.id}
          />
        );
      })}
    </>
  );
};

export default Discography;
