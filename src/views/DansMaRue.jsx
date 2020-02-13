import React from "react";
import styled from "styled-components";
import { color } from "../style/const";
import mapParis from "../assets/map.svg";
import { Filter } from "../components/Filter";
import { ContainerDansMaRue } from "../components/DansMaRue/ContainerDansMaRue";
import { LegendsPopulation } from "../components/LegendsPopulation";
import { SmallCalendar } from "../components/SmallCalendar";
import { StatAnomalie } from "../components/StatAnomalie";

const ContentHeader = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  height: calc(100vh - 60px);
  font-family: "Seravek";
`;

const Map = styled.img`
  height: 75%;
  margin-top: 50px;
`;

const ContentGraph = styled.section`
  font-family: "Seravek";
`;

export const DansMaRue = () => {
  return (
    <>
      <ContentHeader>
        <Filter />
        <Map src={mapParis} />
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
