import React from "react";
import styled from "styled-components";
import { CalendarData } from "../../data/CalendarData";
import { color } from "../../style/const";

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
    font-family: "Seravek";
    font-weight: 100;
    cursor: pointer;
    outline: 3px solid transparent;
    outline-offset: -20px;
    transition: outline 0.3s ease;

    &.hidden {
      visibility: hidden;
    }

    &:hover {
      outline-color: #fff;
      span {
        color: #fff;
      }
    }
    span {
      transition: color 0.3s ease;
    }
  }
`;

const borderColor = value => {
  switch (value) {
    case "Low":
      return "#F5F79C";
    case "Medium":
      return "#FFA07D";
    case "High":
      return "#FF6969";
  }
};

export const Calendar = ({ isOpen, setCurrentId, getId, setIsOpen }) => {
  return (
    <Content>
      {CalendarData.map((value, index) => {
        return (
          <div
            onClick={() => {
              setCurrentId((getId = value.id));
              setIsOpen(false);
            }}
            key={index}
            className={value.display ? "hidden" : ""}
            style={{ borderColor: borderColor(value.event) }}
          >
            <span>{value.id}</span>
          </div>
        );
      })}
    </Content>
  );
};
