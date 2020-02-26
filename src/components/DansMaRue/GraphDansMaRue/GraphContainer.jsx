import React from "react";
import { Graph } from "./Graph";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  height: 350px;
  justify-content: center;
`;

export const GraphContainer = () => {
  return (
    <Container>
      <Graph />
    </Container>
  );
};
