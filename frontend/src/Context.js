import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const MusicContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [likedMusic, setLikedMusic] = useState([]);
  const [pinnedMusic, setPinnedMusic] = useState([]);
  const [resultOffset, setResultOffset] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [alert, setAlert] = useState(null);

  let navigate = useNavigate();

  // Function to handle when a track is played
  const onPlay = (track) => {
    setCurrentTrack(track);
  };

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  let handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
        alert,
        showAlert,
        handleLogout,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};
