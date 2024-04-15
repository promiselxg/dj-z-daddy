"use client";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Music = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/media?query=audio`);
      setData(response?.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {data?.map((audio) => {
        return (
          <AudioPlayer
            autoPlay={false}
            src={audio?.mediaUrl}
            layout="horizontal-reverse"
            customProgressBarSection={[
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_TIME,
            ]}
            key={audio.id}
          />
        );
      })}
    </>
  );
};

export default Music;
