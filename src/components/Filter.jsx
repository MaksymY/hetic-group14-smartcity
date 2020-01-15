import React from "react";
import styled from "styled-components";
import { color } from "../style/const";

const Content = styled.section`
  position: absolute;
  background-color: ${color.bluePrimary};
  width: 308px;
  height: 156px;
  left: 0;
  top: 40%;
`;

const Title = styled.p`
  font-size: 1rem;
  padding: 24px 24px;
  color: white;
`;

export const Filter = () => {
  return (
    <Content>
      <Title>Filtrer par:</Title>
    </Content>
  );
};
