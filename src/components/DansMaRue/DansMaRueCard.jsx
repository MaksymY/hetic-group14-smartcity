import React from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import { DansMaRueData } from "../../data/DansMaRueData";


const Container = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 12px rgba(182, 182, 182, 0.25);
  padding-left: 10px;
  font-family: "Seravek";

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
  }

  span {
    font-size: 11px;
    color: ${color.brandColor};
    font-weight: 300;
  }
`;

export const DansMaRueCard = () => {
  return (
    <>
      {DansMaRueData.map((value, index) => {
        return (
          <Container key={index}>
            <h3>{value.title}</h3>
            div
            <p>{value.adress}</p>
            <p>{value.zipcode}</p>
            <span>Catégorie:</span>
            <p>{value.categorie}</p>
          </Container>
        );
      })}
    </>
  );
};
