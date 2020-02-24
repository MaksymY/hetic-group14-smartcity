import React from "react";
import styled from "styled-components";
import { color } from "../style/const";
import mapParis from "../assets/map.svg";
import { Filter } from "../components/Filter";
import { ContainerDansMaRue } from "../components/DansMaRue/ContainerDansMaRue";
import { LegendsPopulation } from "../components/LegendsPopulation";
import { SmallCalendar } from "../components/SmallCalendar";
import { StatAnomalie } from "../components/StatAnomalie";
import principaleMap from "../assets/principaleMap.svg";
import { MainMap } from "../components/MainMap";

const ContentHeader = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  height: calc(100vh - 60px);
  font-family: "Seravek";
`;

const Map = styled.svg``;

const ContentGraph = styled.section`
  font-family: "Seravek";
`;

export const DansMaRue = () => {
  const log = () => {
    console.log(principaleMap);
  };
  log();
  return (
    <>
      <ContentHeader>
        <Filter />
        <MainMap />
        <LegendsPopulation />
        <SmallCalendar />
      </ContentHeader>
      <ContentGraph>
        <ContainerDansMaRue />
        <StatAnomalie />
      </ContentGraph>
    </>
  );
};
