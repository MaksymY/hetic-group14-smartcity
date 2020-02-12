import React from "react";
import styled from "styled-components";
import { color } from "../style/const";
import AnomalieData from "../data/AnomalieData";

const ContentAnomalie = styled.section`
  display: flex;
  flex-direction: column;
  margin: 44px;

  h1 {
    color: ${color.bluePrimary};
  }

  h2 {
    color: ${color.brandColor};
  }
`;

const GraphAnomalie = styled.section`
  display: block;
`;

const Anomalie = styled.div`
  display: flex;
  margin: 20px 20px 0 0;
  align-items: center;

  p {
    background-position: center 50px;
  }
`;

const AnomalieStat = styled.div`
  width: 100px;
  height: 32px;
  background-color: red;
  margin-right: 20px;
`;

const ExplaineAnomalie = styled.p`
  margin: 16px 0 32px 0;
  width: 340px;
  color: ${color.brandColor};

  span {
    color: ${color.fontInfos};
    font-weight: bold;
  }
`;

export const StatAnomalie = () => {
  const totalAnomalie = () => {
    return AnomalieData.reduce((acc, val) => acc + val.number, 0);
  };

  const colorAnomalie = (value) => {
    switch (value) {
      case "Génant":
        return "#FFE664";
      case "Très Génant":
        return "#FFBC7E";
      default:
        return "#FF8181";
    }
  };

  const sizeAnomalie = (value) => {
    return (value * 100) / totalAnomalie();
  };

  return (
    <ContentAnomalie>
      <h1>Visualisation en direct</h1>
      <ExplaineAnomalie>
        Durant les 24 dernières heures, <span>{totalAnomalie()}</span> anomalies
        ont été signalées dans les rues de Paris.
      </ExplaineAnomalie>
      <h2>Dont ...</h2>
      <GraphAnomalie>
        {AnomalieData.map((value, index) => {
          return (
            <Anomalie key={index}>
              <AnomalieStat
                style={{
                  backgroundColor: colorAnomalie(value.status),
                  width: `${sizeAnomalie(value.number)}%`,
                }}
              ></AnomalieStat>
              <p style={{ background: colorAnomalie(value.status) }}>
                {value.number} {value.status}
              </p>
            </Anomalie>
          );
        })}
      </GraphAnomalie>
    </ContentAnomalie>
  );
};
