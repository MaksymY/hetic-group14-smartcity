import React from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";
import { ModalData } from "../../data/ModalData";

const Container = styled.div`
  padding: 32px 124px 50px 48px;
  font-family: "Seravek";

  h2 {
    color: ${color.bluePrimary};
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 50px;
  }
`;

const DescriptionContainer = styled.div`
  margin-bottom: 30px;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    h4 {
      color: ${color.fontInfos};
      font-size: ${fontSize.H2};
    }
  }

  p {
    font-size: ${fontSize.SmallFont};
    color: ${color.fontInfos};
    line-height: 15px;
    padding-left: 10px;
  }

  p:nth-child(3) {
    margin-bottom: 20px;
  }
`;

export const ModalEventContent = ({ currentId }) => {
  return (
    <>
      {ModalData.filter(value => value.id === currentId).map((value, index) => (
        <Container key={index}>
          <h2>{value.date}</h2>
          {value.modalContent.map((value, index) => (
            <DescriptionContainer key={index}>
              <div>
                <h4>{value.eventTitle}</h4>
                <p>{value.district}</p>
              </div>
              <p>- {value.eventLocation}</p>
              <p>- Capacité : {value.capacity}</p>
            </DescriptionContainer>
          ))}
        </Container>
      ))}
    </>
  );
};
