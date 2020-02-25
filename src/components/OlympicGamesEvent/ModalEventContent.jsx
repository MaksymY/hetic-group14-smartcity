import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";
import axios from "axios";
import moment from "moment";

const Container = styled.div`
  font-family: "Seravek";
  margin-bottom: 30px;

  h2 {
    color: ${color.bluePrimary};
    font-weight: normal;
    font-size: 32px;
    margin-bottom: 45px;
    padding: 40px 0 0 40px;
    text-transform: capitalize;
  }
  &:nth-child(n + 2) {
    h2 {
      display: none;
    }
  }
`;

const ContentContainer = styled.div`
  width: 50%;
  margin-left: 40px;

  div {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    color: ${color.fontInfos};
    font-size: ${fontSize.H2};
    margin-bottom: 10px;
  }

  p {
    font-size: ${fontSize.SmallFont};
    color: ${color.fontInfos};
    line-height: 15px;
    padding-left: 10px;
  }
`;

export const ModalEventContent = ({ currentId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(process.env.REACT_APP_API_URL_OLYMPIC);

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {data
        .filter((value, index) => value.dateId === currentId)
        .map((value, index) => (
          <Container key={index}>
            <h2>{moment(value.date).format("dddd Do MMMM")}</h2>
            <ContentContainer>
              <div>
                <h3>{value.sport.name}</h3>
                <p>{value.sport.place.city}</p>
              </div>
              <p>- {value.sport.place.name}</p>
              <p>- Capacité : {value.sport.place.capacity} personnes</p>
            </ContentContainer>
          </Container>
        ))}
    </>
  );
};
