import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../style/const";
import { Filter } from "../components/Filter";
import { ContainerDansMaRue } from "../components/DansMaRue/ContainerDansMaRue";
import { LegendsPopulation } from "../components/LegendsPopulation";
import { SmallCalendar } from "../components/SmallCalendar";
import { StatAnomalie } from "../components/StatAnomalie";
import principaleMap from "../assets/principaleMap.svg";
import { MainMap } from "../components/MainMap";
import { ModalMap } from "../components/ModalMap";
import { GraphContainer } from "../components/DansMaRue/GraphDansMaRue/GraphContainer";
import { FirstBoxContainer } from "../components/DansMaRue/GraphDansMaRue/FirstBoxContainer";
import { SecondBoxContainer } from "../components/DansMaRue/GraphDansMaRue/SecondBoxContainer";

const ContentHeader = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  font-family: "Seravek";
`;

const ContentGraph = styled.section`
  font-family: "Seravek";
`;

export const DansMaRue = () => {
  let [getId, setGetId] = useState(28);
  let [getDistrict, setGetDistrict] = useState();
  let [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);

  return (
    <>
      <ContentHeader>
        <Filter setIsChecked={setIsChecked} isChecked={isChecked} />
        <MainMap
          getId={getId}
          setGetDistrict={setGetDistrict}
          isChecked={isChecked}
        />
        <LegendsPopulation />
        <SmallCalendar setGetId={setGetId} />
        <ModalMap getId={getId} getDistrict={getDistrict} />
      </ContentHeader>
      <ContentGraph>
        <StatAnomalie />
        <ContainerDansMaRue />
        <FirstBoxContainer />
        <GraphContainer />
        <SecondBoxContainer />
      </ContentGraph>
    </>
  );
};
