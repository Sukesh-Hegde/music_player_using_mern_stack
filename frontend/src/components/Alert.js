import React, { useContext } from "react";
import { MusicContext } from "../Context";

export default function Alert() {

    const musicContext = useContext(MusicContext);
    const alert = musicContext.alert;
    
  const capitalize = (word) => {
    if (word == "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "40px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show role="alert `}
        >
          <strong>{capitalize(alert.type)}</strong>: {alert.msg}
        </div>
      )}
    </div>
  );
}
