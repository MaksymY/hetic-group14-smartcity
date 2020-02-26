import React from "react";
import styled from "styled-components";
import { SecondBox } from "./SecondBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SecondBoxContainer = () => {
  return (
    <Container>
      <SecondBox />
    </Container>
  );
};
