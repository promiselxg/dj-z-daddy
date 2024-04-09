"use client";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Music = () => {
  return (
    <>
      <AudioPlayer
        autoPlay={false}
        src="/audio/sound.mp3"
        layout="horizontal-reverse"
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_TIME]}
      />
      <AudioPlayer
        autoPlay={false}
        src="/audio/sound.mp3"
        layout="horizontal-reverse"
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_TIME]}
      />
      <AudioPlayer
        autoPlay={false}
        src="/audio/sound.mp3"
        layout="horizontal-reverse"
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_TIME]}
      />
      <AudioPlayer
        autoPlay={false}
        src="/audio/sound.mp3"
        layout="horizontal-reverse"
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_TIME]}
      />
    </>
  );
};

export default Music;
