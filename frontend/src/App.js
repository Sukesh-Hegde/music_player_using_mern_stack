import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
    // const [keyword, setKeyword] = useState("");
    // const [message, setMessage] = useState("");
    const [tracks, setTracks] = useState([]);
    // const [token, setToken] = useState(null);

    const fetchMusicData = async () => {
      setTracks([]);
      window.scrollTo(0, 0);
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${keyword}&type=track&offset=${resultOffset}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
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


  return (
    <>
      <Navbar/>

      <div className="container">
        <div className="row">

        </div>
      </div>
    </>
  );
}

export default App;
