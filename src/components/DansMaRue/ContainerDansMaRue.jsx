import React from "react";
import styled from "styled-components";
import {color} from "../../style/const"
import {DansMaRueCard} from "../DansMaRue/DansMaRueCard"


const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: center;
`

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
  grid-gap: 25px;
`;

const Title = styled.h3`
  align-self: left;
  font-size: 16px;
  padding: 24px 24px;
  color: ${color.bluePrimary};
`;

export const ContainerDansMaRue = () => {
  return (
    <>
      <Title>Dernières entrées :</Title>
      <Container>
      <ContainerCard>
        <DansMaRueCard />
      </ContainerCard>
     </Container>
    </>
  );
};
