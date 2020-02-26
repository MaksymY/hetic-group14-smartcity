import React from "react";
import styled from "styled-components";

const boxData = [
  {
    name: "Objets abandonnés",
    number: 398
  },
  {
    name: "Propreté",
    number: 98
  },
  {
    name: "Eau",
    number: 56
  }
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 55%;
`;

const BoxElement = styled.div`
  height: 100px;
  width: 200px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 10px;
    &:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;

export const FirstBox = () => {
  return (
    <Container>
      {boxData.map((value, index) => (
        <BoxElement key={index}>
          <p>{value.name}</p>
          <p>{value.number} entrées</p>
        </BoxElement>
      ))}
    </Container>
  );
};
