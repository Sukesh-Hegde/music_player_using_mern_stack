import React, { useEffect, useRef, useState } from "react";
import "./MusicPlayer.css";

const MusicPlayer = ({ currentTrack }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause the current track before switching to a new one
      audioRef.current.load(); // Load the new track
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
    }
  }, [currentTrack]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause(); // Ensure the audio is paused on unmount
      }
      console.log("Component will unmount, performing cleanup...");
    };
  }, []);

  return (
    <div className="music-player border">
      <audio ref={audioRef} controls className="w-100">
        <source src={currentTrack} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>{isPlaying ? "Playing" : "Paused"}</p>
    </div>
  );
};

export default MusicPlayer;
