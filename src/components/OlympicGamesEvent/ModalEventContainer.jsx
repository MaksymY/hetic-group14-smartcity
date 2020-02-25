import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import { ModalEventContent } from "./ModalEventContent";
import Cross from "../../assets/cross.svg";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 400px;
  right: 20px;
  background-color: ${color.backgroundPrimary};
  outline: 3px solid #fff;
  opacity: 0.9;
  transition: 0.4s;
  overflow-y: auto;

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
  let [isShow, setIsShow] = useState(true);
  console.log(isOpen);
  return (
    <Container
      style={
        isOpen
          ? { transform: "translate(0, 0)" }
          : { transform: "translate(400px, 0)", opacity: "0" }
      }
    >
      <ModalEventContent currentId={currentId} />
      <img src={Cross} onClick={() => setIsOpen(!isOpen)} alt="cross" />
    </Container>
  );
};
