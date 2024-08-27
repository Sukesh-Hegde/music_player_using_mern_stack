import "./App.css";
import { useContext, useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { initializePlaylist } from "./initialize";
import Navbar from "./components/Navbar";
import { MusicContext } from "./Context";
import MusicPlayer from "./components/MusicController/MusicControls";
import Main from "./components/Main";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const [keyword, setKeyword] = useState("");
  const [message, setMessage] = useState("");
  const [tracks, setTracks] = useState([]);

  const musicContext = useContext(MusicContext);
  const isLoading = musicContext.isLoading;
  const setIsLoading = musicContext.setIsLoading;
  const resultOffset = musicContext.resultOffset;
  const setResultOffset = musicContext.setResultOffset;
  const currentTrack = musicContext.currentTrack;
  const onPlay = musicContext.onPlay;

  const fetchMusicData = async () => {
    setTracks([]);
    window.scrollTo(0, 0);
    setIsLoading(true);
    try {
      // const response = await fetch(
      // `https://v1.nocodeapi.com/sukeshhegde/spotify/koKfMUSYzSERjCnF/search?q=${
      //   keyword === "" ? "bollywood" : keyword
      // }&type=track&offset=${resultOffset}`);

      if (!response.ok) {
        throw new Error("Failed to fetch music data");
        1;
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

  useEffect(() => {
    initializePlaylist();
    fetchMusicData();
  }, []);

  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </>
  );
}

export default App;

// <Navbar
//   keyword={keyword}
//   setKeyword={setKeyword}
//   handleKeyPress={handleKeyPress}
//   fetchMusicData={fetchMusicData}
// />

// <div className="container">
//   <div className={`row ${isLoading ? "" : "d-none"}`}>
//     <div className="col-12 py-5 text-center">
//       <div
//         className="spinner-border"
//         style={{ width: "3rem", height: "3rem" }}
//         role="status"
//       >
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   </div>

//   <div className="row">
//     {tracks.map((element) => (
//       <Card
//         key={element.id}
//         onPlay={() => onPlay(element)}
//         element={element}
//       />
//     ))}
//   </div>

//   <div className="row" hidden={tracks.length === 0}>
//     <div className="col">
//       <button
//         onClick={() => {
//           setResultOffset((previous) => previous - 20);
//           fetchMusicData();
//         }}
//         className="btn btn-outline-success w-100"
//         disabled={resultOffset === 0}
//       >
//         Previous Next Page: {resultOffset / 20}
//       </button>
//     </div>
//     <div className="col">
//       <button
//         onClick={() => {
//           setResultOffset((previous) => previous + 20);
//           fetchMusicData();
//         }}
//         className="btn btn-outline-success w-100"
//       >
//         Next Page: {resultOffset / 20 + 2}
//       </button>
//     </div>
//   </div>
//   {/* <div className="row">
//     <div className="col">
//       <h4 className="text-center text-danger py-2">{message}</h4>
//     </div>
//   </div> */}
//   <div className="col width:'100' sticky-music-controls">
//     <MusicPlayer currentTrack={currentTrack} />
//   </div>
// </div>
