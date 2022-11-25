import React, { useRef } from "react";
import Apxor from "apxor";

const Video = ({ id, source, type }) => {
  const videoRef = useRef(null);
  const logVideoEnd = (e) => {
    if (videoRef.currentTime !== videoRef.duration) {
      Apxor.logEvent("VIDEO_STOPPED_ABRUPTLY", {
        at: videoRef.currentTime,
        src: videoRef.src,
      });
    } else {
      Apxor.logEvent("VIDEO_COMPLETED", {
        src: videoRef.src,
      });
    }
  };
  return (
    <>
      <video ref={videoRef} id={id} controls onEnded={logVideoEnd}>
        <source src={source} type={type}></source>
      </video>
    </>
  );
};

export default Video;
