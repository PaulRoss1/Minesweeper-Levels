import React, { useState, useRef, useEffect } from "react";
import gameSong from "../music/barker.mp3";

export const AudioPlayer = ({ musicEnabled, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(new Audio(gameSong));
  audioRef.current.loop = true;

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    musicEnabled && handlePlayPause();
  }, [musicEnabled]);

  return (
    <div>
      <button
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          zIndex: 1,
          // display: "flex",
          background: "none",
          width: "40px",
          height: "40px",
        }}
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <img
            src={require("../images/volume.png")}
            alt="play"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <img
            src={require("../images/pause.png")}
            alt="pause"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        {/* <img
          src={require("../images/mute.png")}
          alt="pause"
          style={{ width: "15%", height: "15%" }}
        />
        <img
          src={require("../images/volume.png")}
          alt="play"
          style={{ width: "15%", height: "15%" }}
        /> */}
      </button>
    </div>
  );
};

export default AudioPlayer;
