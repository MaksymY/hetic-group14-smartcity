import React from "react";
import styled from "styled-components";

const boxData = [
  {
    name: "Mobiliers Urbains",
    number: 60
  },
  {
    name: "Auto, moto, vélo",
    number: 52
  }
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
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

export const SecondBox = () => {
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
