import React from "react";
import styled from "styled-components";
import { color, fontSize } from "../../../style/const";

const data = ["3,2%", "5,6%", "8,2%", "2,6%", "4,9%"];

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.whiteColor};
  font-size: ${fontSize.H1};
  font-weight: bold;
  height: 200px;
  width: 200px;
  border: 1px solid black;
  margin: 20px;
  border-radius: 50%;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);

  &:nth-child(even) {
    position: absolute;
    bottom: 0;
    transform: translateX(-120px);
  }

  &:nth-child(4) {
    transform: translateX(130px);
  }
`;

export const Graph = () => {
  return (
    <>
      {data.map((value, index) => (
        <Circle key={index}>{value}</Circle>
      ))}
    </>
  );
};
