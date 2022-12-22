import React, { useRef } from "react";
import Apxor from "apxor";

const Video = ({ id, source, type }) => {
  const videoRef = useRef(null);
  const logVideoPlay = (e) => {
    Apxor.logEvent("VideoPlayClicked", {
      type: "watch on internal video player",
      VideoDuration: videoRef.duration,
      VideoPercentage: (videoRef.currentTime / videoRef.duration) * 100,
    });
  };
  return (
    <>
      <video ref={videoRef} id={id} controls onEnded={logVideoPlay}>
        <source src={source} type={type}></source>
      </video>
    </>
  );
};

export default Video;
