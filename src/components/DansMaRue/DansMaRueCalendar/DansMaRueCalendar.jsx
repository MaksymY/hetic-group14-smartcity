import React, { useState } from "react";
import styled from "styled-components";
import { CalendarData } from "../../../data/CalendarData";
import { color, fontSize } from "../../../style/const";

const days = ["L", "Ma", "Me", "J", "V", "S", "D"];

const Container = styled.div`
  height: 100%;
  width: 285px;
  border: 1px solid black;
  padding: 15px;
  background-color: ${color.backgroundPrimary};
  transition: 0.3s;
  opacity: 0;
`;

const DaysContainer = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 5px 15px 5px 15px;
  justify-content: space-between;
  background-color: ${color.bluePrimary};
  margin-bottom: 10px;
  border-radius: 30px;

  span {
    color: ${color.whiteColor} !important;
    font-size: ${fontSize.RegularFont};
  }
`;

const CalendarContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
  overflow: auto;
  color: ${color.fontInfos};
  background-color: ${color.backgroundPrimary};
  gap: 4px;
  grid-row-gap: 15px;
  font-size: ${fontSize.RegularFont};
  z-index: 1;

  span {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;

    &.hidden {
      visibility: hidden;
    }

    &.selected {
      background-color: ${color.bluePrimary};
      color: ${color.whiteColor};
    }
  }
`;

export const DansMaRueCalendar = ({ isOpenCalendar, setGetId }) => {
  let [clickedId, setClickedId] = useState(0);

  const clickedAction = (index) => {
    setClickedId(index);
  };

  return (
    <Container
      style={
        isOpenCalendar
          ? { transform: "translate(40px, 0)", opacity: "1" }
          : { transform: "translate(20px, 0)", opacity: "0" }
      }
    >
      <DaysContainer>
        {days.map((value, index) => (
          <span key={index}>{value}</span>
        ))}
      </DaysContainer>
      <CalendarContainer>
        {CalendarData.map((value, index) => (
          <span
            onClick={() => {
              clickedAction(index);
              setGetId(value.id);
            }}
            className={
              value.display
                ? "hidden"
                : "" +
                  (clickedId === index && clickedId !== 0 ? "selected" : "")
            }
            key={index}
          >
            {value.id}
          </span>
        ))}
      </CalendarContainer>
    </Container>
  );
};
