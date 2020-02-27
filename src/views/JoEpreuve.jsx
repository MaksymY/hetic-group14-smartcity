import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../style/const";
import { CalendarEvent } from "../components/OlympicGamesEvent/CalendarEvent";
import { ContainerFuturEvent } from "../components/FuturEvent/ContainerFuturEvent";
import { Filter } from "../components/Filter";
import { MainMap } from "../components/MainMap";
import { ModalMap } from "../components/ModalMap";
import { LegendsPopulation } from "../components/LegendsPopulation";
import { SmallCalendar } from "../components/SmallCalendar";

const Content = styled.main`
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
`;

const ContentHeader = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  font-family: "Seravek";
`;

export const JoEpreuve = () => {
  let [getId, setGetId] = useState(28);
  let [getDistrict, setGetDistrict] = useState();
  let [isChecked, setIsChecked] = useState(false);

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
      <Content>
        <CalendarEvent />
        <ContainerFuturEvent />
      </Content>
    </>
  );
};
