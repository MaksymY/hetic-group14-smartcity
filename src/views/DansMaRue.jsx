import React from "react";
import styled from "styled-components";
import { color } from "../style/const";
import mapParis from "../assets/map.svg";
import { Filter } from "../components/Filter";
/* import { LegendsPopulation } from "../components/LegendsPopulation"; */

const Content = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  height: calc(100vh - 60px);
`;

const Map = styled.img`
  height: 75%;
  margin-top: 50px;
`;

export const DansMaRue = () => {
  return (
    <Content>
      <Filter />
      <Map src={mapParis} />
      {/* <LegendsPopulation /> */}
    </Content>
  );
};
