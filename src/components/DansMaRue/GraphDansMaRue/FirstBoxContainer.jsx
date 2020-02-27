import React from "react";
import styled from "styled-components";
import { FirstBox } from "./FirstBox";

const Container = styled.div`
  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
`;

export const FirstBoxContainer = () => {
  return (
    <Container>
      <FirstBox />
    </Container>
  );
};
