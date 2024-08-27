import React, { useContext, useEffect } from "react";
import { MusicContext } from "../../Context";

// import './card.css'

function Card({ element }) {
  const musicContext = useContext(MusicContext);
  const likedMusic = musicContext.likedMusic;
  const setlikedMusic = musicContext.setLikedMusic;
  const pinnedMusic = musicContext.pinnedMusic;
  const setpinnedMusic = musicContext.setPinnedMusic;
  const onPlay = musicContext.onPlay;


  const handlePin = () => {
    let pinnedMusic = JSON.parse(localStorage.getItem("pinnedMusic")) || [];
    let updatedPinnedMusic = [];
    if (pinnedMusic.some((item) => item.id === element.id)) {
      updatedPinnedMusic = pinnedMusic.filter((item) => item.id !== element.id);
      setpinnedMusic(updatedPinnedMusic);
      localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
    } else {
      updatedPinnedMusic = [...pinnedMusic, element];
      setpinnedMusic(updatedPinnedMusic);
      localStorage.setItem("pinnedMusic", JSON.stringify(updatedPinnedMusic));
    }
  };

  const handleLike = () => {
    let likedMusic = JSON.parse(localStorage.getItem("likedMusic")) || [];
    let updatedLikedMusic = [];
    if (likedMusic.some((item) => item.id === element.id)) {
      updatedLikedMusic = likedMusic.filter((item) => item.id !== element.id);
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    } else {
      updatedLikedMusic = [...likedMusic, element];
      setlikedMusic(updatedLikedMusic);
      localStorage.setItem("likedMusic", JSON.stringify(updatedLikedMusic));
    }
  };

  useEffect(() => {
    const localLikedMusic = JSON.parse(localStorage.getItem("likedMusic"));
    if (localLikedMusic) {
      setlikedMusic(localLikedMusic);
    }
  }, [setlikedMusic]);

  return (
    <div
      key={element.id}
      className="col-lg-3 col-md-6 py-2"
    >
      <div className="card">
        <div className="ratio ratio-1x1 bg-secondary bg-opacity-25">
          <img
            src={element.album.images[0].url}
            className="card-img-top"
            alt="Album cover"
          />
        </div>

        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            {element.name}
            <div className="add-options d-flex align-items-start ">
              {pinnedMusic.some((item) => item.id === element.id) ? (
                <button
                  onClick={handlePin}
                  className="btn btn-outline-dark mx-1"
                >
                  <i className="bi bi-pin-angle-fill"></i>
                </button>
              ) : (
                <button
                  onClick={handlePin}
                  className="btn btn-outline-dark mx-1"
                >
                  <i className="bi bi-pin-angle"></i>
                </button>
              )}
              {likedMusic.some((item) => item.id === element.id) ? (
                <button onClick={handleLike} className="btn btn-outline-dark">
                  <i className="bi bi-heart-fill text-danger"></i>
                </button>
              ) : (
                <button onClick={handleLike} className="btn btn-outline-dark">
                  <i className="bi bi-heart"></i>
                </button>
              )}
            </div>
          </h5>
          <p className="card-text">Artist: {element.album.artists[0].name}</p>
          <p className="card-text">
            Release date: {element.album.release_date}
          </p>
          <button
            onClick={() => onPlay(element.preview_url)}
            className="btn btn-primary w-100"
          >
            <i className="bi bi-play-fill"></i> Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
