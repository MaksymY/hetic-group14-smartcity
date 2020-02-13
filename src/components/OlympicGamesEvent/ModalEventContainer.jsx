import React from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import { ModalEventContent } from "./ModalEventContent";
import Cross from "../../assets/cross.svg";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 400px;
  right: 20px;
  background-color: ${color.backgroundPrimary};
  outline: 3px solid #fff;
  opacity: 0.9;
  transition: 0.3s;

  img {
    position: absolute;
    top: 25px;
    right: 40px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ModalEventContainer = ({ currentId, isOpen, setIsOpen }) => {
  return (
    <Container
      style={
        isOpen
          ? { transform: "translate(200px, 0)", opacity: "0" }
          : { transform: "translate(0, 0)" }
      }
    >
      <ModalEventContent currentId={currentId} />
      <img
        src={Cross}
        onClick={() => {
          setIsOpen(true);
        }}
        alt="cross"
      />
    </Container>
  );
};
