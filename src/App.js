import "./styles.css";
import React, { useState } from "react";
import { MoviePlayer } from "./components/MoviePlayer";
import { Dropzone } from "./components/Dropzone";

export default function App() {
  // const [filelist, setFileList] = useState([
  //   "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  //   "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
  // ]);
  const fileList = [
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    "https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
  ];

  return (
    <div className="App">
      <div className="header">見出し</div>
      <div className="bodyContent">
        <div ClassName="sideArea">
          <Dropzone />
        </div>
        {/* <MoviePlayer /> */}
      </div>
    </div>
  );
}
