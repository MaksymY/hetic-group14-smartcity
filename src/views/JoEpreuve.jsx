import React from "react";
import styled from "styled-components";
import { color } from "../style/const";
import {SearchCalendar} from "../components/OlympicGamesEvent/SearchCalendar";
import {CalendarEvent} from "../components/OlympicGamesEvent/CalendarEvent"

const Content = styled.main`
  background-color: ${color.backgroundPrimary};
  width: 100vw;
  height: 100vh;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const JoEpreuve = () => {
  return (
    <Content>
      <SearchCalendar />
      <CalendarEvent />
    </Content>
  );
};
