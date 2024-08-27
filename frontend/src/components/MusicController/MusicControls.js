import React, { useEffect, useRef } from "react";
import "./MusicPlayer.css"; 

const MusicPlayer = ({ currentTrack }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  }, [currentTrack]);

  return (
    <div className="music-player border">
      <audio
        ref={audioRef}
        src={currentTrack}
        controls
        className="w-100"
      ></audio>
    </div>
  );
};

export default MusicPlayer;
