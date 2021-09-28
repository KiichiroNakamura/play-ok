import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// import { MoviePlayer } from "./MoviePlayer.jsx";
import { MoviePlayer2 } from "./MoviePlayer2";
import styled from "styled-components";

const style = {
  width: 200,
  height: 100,
  border: "1px dotted #888",
  margin: 0
};
export const Dropzone = () => {
  const [fileList, setFileList] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("acceptedFiles:", acceptedFiles);
    const newList = acceptedFiles;
    console.log(newList);
    setFileList(newList);
    console.log(fileList);
  });
  const onClickPlay = (files, index) => {
    console.log(files.length);
    console.log(files[index].name);
    // onDropAccepted: (files) => {
    const url = (window.URL || window.webkitURL).createObjectURL(files[index]);
    alert(url);
    setVideoUrl(url);
    // };
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag or Click to select files</p>
        )}
      </div>
      <Sdiv>
        <ul>
          {fileList.map((file, index) => (
            <li key={index}>
              {file.name}
              <button onClick={() => onClickPlay(fileList, index)}>aaa</button>
            </li>
          ))}
        </ul>
      </Sdiv>
      <MoviePlayer2 url={videoUrl} />
    </div>
  );
};
const Sdiv = styled.div({
  backgroundColor: "#dddddd"
});
