import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../../style/const";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 12px rgba(182, 182, 182, 0.25);
  padding-left: 10px;
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
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
  const [results, setResults] = useState([]);

  useEffect(() => {
    const result = async () => {
      try {
        const { data } = await axios.get(
          "http://51.254.123.67/efficient-api/api/defects",
          {
            headers: {
              accept: "application/json"
            }
          }
        );
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };
    result();
  }, []);
  return (
    <>
      {results
        .filter((data, index) => index < 5)
        .map((value, index) => (
          <Container key={index}>
            <h3>{value.SubType}</h3>
            <p>{value.adress}</p>
            <p>{value.zipcode}</p>
            <span>Catégorie:</span>
            <p>{value.categorie}</p>
          </Container>
        ))}
    </>
  );
};
