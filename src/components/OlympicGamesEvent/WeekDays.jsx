import React from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";

const Content = styled.div`
  width: 79%;
  margin-bottom: 40px;

  ul {
    display: grid;
    width: 100%;
    align-items: center;
    justify-items: center;
    font-weight: normal;
    grid-template-columns: repeat(7, 1fr);
    overflow: auto;
    color: ${color.backgroundPrimary};
    gap: 4px;
    color: ${color.brandColor};
    font-family: "Seravek";
    font-size: ${fontSize.H1Unselected};
  }
`;

const Days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche"
];

export const WeekDays = () => {
  return (
    <Content>
      <ul>
        {Days.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </Content>
  );
};
