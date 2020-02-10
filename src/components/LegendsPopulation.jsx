import React from "react";
import styled from "styled-components";
import DataLegends from "../data/LegendsPopulation";
import { color } from "../style/const";

const ContentLegends = styled.section`
  position: absolute;
  display: flex;
  right: 0;
  top: 100px;

  h1 {
    color: ${color.brandColor};
    margin-right: 10px;
  }
`;
const LegendsElement = styled.div`
  width: 107px;
  height: 23px;
  margin: 0 0 16px 0;
`;

export const LegendsPopulation = () => {
  return (
    <ContentLegends>
      <h1>Densité de pop.</h1>
      <section>
        {DataLegends.map((value, index) => {
          return (
            <LegendsElement
              key={index}
              style={{ backgroundColor: `#${value.id}` }}
            />
          );
        })}
      </section>
    </ContentLegends>
  );
};
