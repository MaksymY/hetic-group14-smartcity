import React from "react";
import styled from "styled-components";
import { color } from "../style/const";

const ContentLegends = styled.section`
  position: absolute;
  width: 500px;
  height: 400px;
  background-color: pink;
`;

export const LegendsPopulation = () => {
  return (
    <ContentLegends>
      <h1>Densité de pop.</h1>
    </ContentLegends>
  );
};
