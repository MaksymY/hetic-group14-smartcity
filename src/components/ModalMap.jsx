import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, fontSize } from "../style/const";
import icons from "../assets/icons.svg";
import { LastEntries } from "./ModalMap/LastEntries";
import { EventPlace } from "./ModalMap/EventPlace";

const ModalContent = styled.section`
  z-index: 2;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 600px;
  background-color: white;
  top: 100px;
  left: 0;
  box-shadow: 0px 0px 12px rgba(182, 182, 182, 0.25);
  transition: 0.3s;

  svg {
    height: 16px;
    width: 16px;
    stroke: ${color.bluePrimary};
    transform: rotate(-180deg);
    transition: 0.3s;
    align-self: flex-end;
    margin: 15px;
  }

  h1 {
    color: ${color.bluePrimary};
    font-size: ${fontSize.H1};
    margin-bottom: 30px;
  }
`;

const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

export const ModalMap = ({ getId, getDistrict }) => {
  let [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (getDistrict) {
      setIsOpenModal(true);
    }
  }, [getDistrict]);
  return (
    <ModalContent
      style={
        isOpenModal
          ? { transform: "translate(0, 0)" }
          : { transform: "translate(-500px, 0)" }
      }
    >
      <svg onClick={() => setIsOpenModal(false)}>
        <use xlinkHref={`${icons}#cross`} />
      </svg>
      <h1>{getDistrict}eme arrondissement</h1>
      <DataContainer>
        <LastEntries getId={getId} getDistrict={getDistrict} />
        <EventPlace getId={getId} getDistrict={getDistrict} />
      </DataContainer>
    </ModalContent>
  );
};
