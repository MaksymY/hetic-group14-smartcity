import React from "react";
import styled from "styled-components";

const Content = styled.div`
  position: absolute;
  right: 0px;
  height: 100%;
  width: 20px;
  background: linear-gradient(
    180deg,
    #ff6969 0%,
    #ff8080 16.67%,
    #ffa07d 34.38%,
    #ffbc7e 52.08%,
    #ffd47e 69.27%,
    #ffe664 86.98%,
    #f5f79c 100%
  );
`;

export const LegendColorCalendar = () => {
  return <Content />;
};
