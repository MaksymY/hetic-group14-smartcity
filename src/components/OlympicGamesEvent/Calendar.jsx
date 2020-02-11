import React from "react";
import styled from "styled-components";
import {CalendarData} from "../../data/CalendarData";
import {color} from '../../style/const';


const Content = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(7, 1fr);
  overflow: auto;
  color: ${color.backgroundPrimary};
  gap: 4px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border: 20px solid;
    color: ${color.brandColor};
    font-size: 32px;
    font-family:'Seravek';
    font-weight: 100;

    &.hidden {
      visibility: hidden;
    }
  }
`;

const borderColor = (value) => {
  switch(value) {
      case "Low":
        return '#F5F79C';
      case "Medium":
        return '#FFA07D';
      case "High":
        return '#FF6969';
  }
}


export const Calendar = () => {
  return (
		<Content>
      {CalendarData.map((value, index) => {
        return (
          <div key={index} className={value.display ? "hidden": ""} style={{borderColor: borderColor(value.event)}}>
            <span>{value.id}</span>
          </div>
        )
      })}
		</Content>
  );
};
