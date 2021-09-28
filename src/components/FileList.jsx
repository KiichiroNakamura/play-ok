import React, { useState } from "react";
import styled from "styled-components";

export const FileList = (props) => {
  const { fileList } = props;
  console.log(fileList);
  const [fileNames, setFileNames] = useState([]);
  setFileNames(fileList);
  return (
    <Sdiv>
      <Sp>aaaa</Sp>
      <Sul>
        {fileNames.map((fileName) => (
          <Sli key={fileName}>{fileName}</Sli>
        ))}
      </Sul>
    </Sdiv>
  );
};
const Sdiv = styled.div({
  backgroundColor: "#dddddd"
});

const Sp = styled.p({
  height: "10px",
  fontSize: "1.5em",
  textAlign: "center",
  color: "palevioletred",
  marginButtom: "0px",
  padding: "0px"
});

const Sul = styled.ul({
  textAlgin: "left",
  background: "#1111",
  padding: "2px"
});

const Sli = styled.li({
  textAlign: "left",
  background: "#1111",
  padding: "1px"
});
