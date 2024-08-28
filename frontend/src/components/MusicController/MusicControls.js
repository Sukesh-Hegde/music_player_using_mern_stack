import React, { useEffect, useRef } from "react";
import "./MusicPlayer.css"; 

const MusicPlayer = ({ currentTrack }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play() 
        // console.error("Error playing audio:", error);

    }
  }, [currentTrack]);

    useEffect(() => {
      return () => {
        if (audioRef.current) {
          audioRef.current.pause(); // Ensure it's paused on unmount
        }
        console.log("Component will unmount, performing cleanup...");
      };
    }, []);


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
