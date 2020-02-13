import React from "react";
import styled from "styled-components";
import {color} from "../../style/const";
import {FuturEventCard} from './FuturEventCard';



const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  padding-bottom: 40px;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(200px, 1fr) );
  grid-gap: 25px;
`;

const Title = styled.h3`
  align-self: left;
  font-size: 16px;
  padding: 24px 0;
  color: ${color.bluePrimary};
  font-family: 'Seravek';
  font-weight: 300;
`;

export const ContainerFuturEvent = () => {
  return (
    <>
      <Title>Prochaines épreuves :</Title>
      <Container>
        <ContainerCard>
          <FuturEventCard />
        </ContainerCard>
     </Container>
    </>
  );
};
