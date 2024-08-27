import { createContext, useState } from "react";

export const MusicContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likedMusic, setLikedMusic] = useState([]);
  const [pinnedMusic, setPinnedMusic] = useState([]);
  const [resultOffset, setResultOffset] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Function to handle when a track is played
  const onPlay = (track) => {
    console.log(track);
    
    setCurrentTrack(track);
  };

  return (
    <MusicContext.Provider
      value={{
        isLoading,
        setIsLoading,
        likedMusic,
        setLikedMusic,
        resultOffset,
        setResultOffset,
        pinnedMusic,
        setPinnedMusic,
        currentTrack,
        setCurrentTrack,
        onPlay,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
