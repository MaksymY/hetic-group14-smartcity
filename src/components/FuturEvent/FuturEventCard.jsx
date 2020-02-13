import React from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import {FuturEventData} from '../../data/FuturEventData'

const Container = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 12px rgba(182, 182, 182, 0.25);
  padding: 8px 8px 0 8px;
  font-family: "Seravek";
  background-color: ${color.whiteColor};

  &:hover {
    cursor: pointer;
  }

  h3 {
    font-size: 16px;
    color: ${color.bluePrimary};
    margin: 5px 0 5px 0;
    font-weight: bold;
  }

  p {
    font-size: 11px;
    color: ${color.brandColor};
    margin-bottom: 5px;

    &:nth-child(3) {
      margin-bottom: 12px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

export const FuturEventCard = () => {
  return (
    <>
      {FuturEventData.map((value, index) => {
        return (
          <Container key={index}>
            <h3>{value.title}</h3>
            <p>{value.adress}</p>
            <p>{value.zipcode}</p>
            <div>
              <p>{value.futurEvent}</p>
              <p>{value.hour}</p>
            </div>
            <div>
              <p>{value.categorie}</p>
              <p>{value.date}</p>
            </div>
          </Container>
        );
      })}
    </>
  );
};
