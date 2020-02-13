import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import { CalendarTitle } from "./CalendarTitle";
import { Calendar } from "./Calendar";
import { WeekDays } from "./WeekDays";
import { LegendColorCalendar } from "./LegendColorCalendar";
import { ModalEventContainer } from "./ModalEventContainer";

const Content = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${color.bluePrimary};
  height: 600px;
  margin: 0 auto;
  margin-top: 24px;
`;

export const CalendarEvent = () => {
  const [currentId, setCurrentId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Content>
      <CalendarTitle />
      <WeekDays />
      <Calendar
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setCurrentId={setCurrentId}
      />
      <LegendColorCalendar />
      <ModalEventContainer
        currentId={currentId}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </Content>
  );
};
