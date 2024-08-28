import React, { useContext } from 'react'
import { MusicContext } from '../Context';
import MusicPlayer from './MusicController/MusicControls';
import Card from './Card/Card';

const Content = ({ message, tracks, fetchMusicData }) => {
  const musicContext = useContext(MusicContext);
  const isLoading = musicContext.isLoading;
  const resultOffset = musicContext.resultOffset;
  const setResultOffset = musicContext.setResultOffset;
  const currentTrack = musicContext.currentTrack;
  const onPlay = musicContext.onPlay;
  return (
    <div className="container">
      <div className={`row ${isLoading ? "" : "d-none"}`}>
        <div className="col-12 py-5 text-center">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <div className="row">
        {tracks.map((element) => (
          <Card
            key={element.id}
            onPlay={() => onPlay(element)}
            element={element}
          />
        ))}
      </div>

      <div className="row" hidden={tracks.length === 0}>
        <div className="col">
          <button
            onClick={() => {
              setResultOffset((previous) => previous - 20);
              fetchMusicData();
            }}
            className=" btn btn-primary w-100"
            disabled={resultOffset === 0}
          >
            Previous Next Page: {resultOffset / 20}
          </button>
        </div>
        <div className="col">
          <button
            onClick={() => {
              setResultOffset((previous) => previous + 20);
              fetchMusicData();
            }}
            className="btn btn-primary w-100"
          >
            Next Page: {resultOffset / 20 + 2}
          </button>
        </div>
      </div>
      {/* <div className="row">
    <div className="col">
      <h4 className="text-center text-danger py-2">{message}</h4>
    </div>
  </div> */}
      <div className="col width:'100' sticky-music-controls">
        <MusicPlayer currentTrack={currentTrack} />
      </div>
    </div>
  );
};

export default Content
