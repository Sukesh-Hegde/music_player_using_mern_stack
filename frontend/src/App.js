import "./App.css";
import { useContext, useEffect, useState } from "react";
import { initializePlaylist } from "./initialize";
import Navbar from "./components/Navbar";
import { MusicContext } from "./Context";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Content from "./components/Content";

function App() {
  useEffect(() => {
    initializePlaylist();
    fetchMusicData();
  }, []);

  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");
  const [tracks, setTracks] = useState([]);

  const musicContext = useContext(MusicContext);
  const setIsLoading = musicContext.setIsLoading;
  const resultOffset = musicContext.resultOffset;
  const setResultOffset = musicContext.setResultOffset;

  const fetchMusicData = async () => {
    setTracks([]);
    window.scrollTo(0, 0);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://v1.nocodeapi.com/sukeshhegde/spotify/koKfMUSYzSERjCnF/search?q=${
          keyword === "" ? "bollywood" : keyword
        }&type=track&offset=${resultOffset}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch music data");
      }

      const jsonData = await response.json();

      setTracks(jsonData.tracks.items);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setResultOffset(0);
      fetchMusicData();
    }
  };

  const user = localStorage.getItem("token");

  return (
    <div className="appBackground">
      <Routes>
        {user && (
          <Route
            path="/"
            exact
            element={
              <>
                <Navbar
                  keyword={keyword}
                  setKeyword={setKeyword}
                  handleKeyPress={handleKeyPress}
                  fetchMusicData={fetchMusicData}
                />
                <Content
                  message={message}
                  tracks={tracks}
                  fetchMusicData={fetchMusicData}
                />
              </>
            }
          />
        )}

        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
