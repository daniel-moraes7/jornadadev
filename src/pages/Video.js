import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://firebasestorage.googleapis.com/v0/b/videos-6cd15.appspot.com/o/Download.mp4?alt=media&token=39e52303-a9f1-4128-b8b9-85f41deaaca1"
      ></video>
    </div>
  );
}

export default Video;
