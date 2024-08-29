import "./App.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { initializePlaylist } from "./initialize";
import Navbar from "./components/Navbar";
import { MusicContext } from "./Context";
import { Route, Routes, Navigate } from "react-router-dom";
import Content from "./components/Content";
import Signup from "./components/Singup/index.js";
import Login from "./components/Login/index.js";
import SignUpNavbar from "./components/SignUpNavbar.js";
import Alert from "./components/Alert.js";


function App() {
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

  

  useEffect(() => {
    initializePlaylist();
    fetchMusicData();
  }, []);



  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setResultOffset(0);
      fetchMusicData();
    }
  };
 const user = localStorage.getItem("token");
  

return (
  <div className="appBackground">
    <>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <>
              <SignUpNavbar />
              <Alert />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          exact
          element={
            <>
              <SignUpNavbar />
              <Alert />
              <Signup/>
            </>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
        {user && (
          <Route
            path="/content"
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
      </Routes>
    </>
  </div>
);

}

export default App;
