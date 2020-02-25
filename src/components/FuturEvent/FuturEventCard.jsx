import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import { FuturEventData } from "../../data/FuturEventData";
import axios from "axios";
import moment from "moment";

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

    span {
      text-transform: capitalize;
      font-size: 11px;
      color: ${color.brandColor};
      margin-bottom: 5px;
    }
  }
`;

export const FuturEventCard = () => {
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
        .filter((data, index) => index < 10)
        .map((value, index) => {
          return (
            <Container key={index}>
              <h3>{value.sport.name}</h3>
              <p>{value.sport.place.address}</p>
              <p>{value.sport.place.city}</p>
              <div>
                <p>Prochaine épreuve :</p>
                <p>{moment(value.startTime).format("LT")}</p>
              </div>
              <div>
                <p>{value.name}</p>
                <span>{moment(value.date).format("dddd Do MMMM")}</span>
              </div>
            </Container>
          );
        })}
    </>
  );
};
