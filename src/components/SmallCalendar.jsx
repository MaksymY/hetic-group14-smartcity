import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../style/const";
import icons from "../assets/icons.svg";
import { DansMaRueCalendar } from "./DansMaRue/DansMaRueCalendar/DansMaRueCalendar";

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

const ShowContentCalendar = styled.div`
  margin-top: 10px;
  display: flex;
`;

const IconShow = styled.svg`
  height: 16px;
  width: 16px;
  stroke: ${color.bluePrimary};
  transform: rotate(-180deg);
  transition: 0.3s;
`;

export const SmallCalendar = () => {
  let [isOpenCalendar, setIsOpenCalendar] = useState(false);

  return (
    <ContentSmallCalendar>
      <h1>Aujourd’hui, Dimanche 28 Juillet</h1>
      <ShowContentCalendar>
        <IconShow
          onClick={() => setIsOpenCalendar((isOpenCalendar = !isOpenCalendar))}
          style={
            isOpenCalendar
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(270deg)" }
          }
        >
          <use xlinkHref={`${icons}#arrowToggle`} />
        </IconShow>
        <DansMaRueCalendar isOpenCalendar={isOpenCalendar} />
      </ShowContentCalendar>
    </ContentSmallCalendar>
  );
};
