import React from "react";
import styled from "styled-components";
import { color } from "../style/const";
import icons from "../assets/icons.svg";

const ContentSmallCalendar = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 0;
  top: 100px;
  margin-left: 34px;

  h1 {
    color: ${color.bluePrimary};
  }
`;

const IconShow = styled.svg`
  height: 16px;
  width: 16px;
  stroke: ${color.bluePrimary};
  transform: rotate(-180deg);
  margin-top: 10px;
`;

export const SmallCalendar = () => {
  return (
    <ContentSmallCalendar>
      <h1>Aujourd’hui, Dimanche 28 Juillet</h1>
      <IconShow>
        <use xlinkHref={`${icons}#arrowToggle`} />
      </IconShow>
    </ContentSmallCalendar>
  );
};
