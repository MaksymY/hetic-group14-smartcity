import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";
import axios from "axios";

const Content = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${color.brandColor};
    font-size: ${fontSize.SmallFont};
    margin-bottom: 30px;
  }

  div {
    p {
      color: ${color.fontInfos};
      font-size: ${fontSize.RegularFont};
      margin-bottom: 10px;
    }
  }
`;

const Title = styled.p`
  width: 200px;
`;

export const LastEntries = ({ getId, getDistrict }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_URL_LAST_ENTRIES}/${getDistrict}`;
    const result = async () => {
      try {
        const { data } = await axios.get(url, {
          headers: {
            accept: "application/json",
          },
        });
        setResults(data);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, [getDistrict]);

  return (
    <Content>
      <Title>
        Dernières anomalies signalées dans l'arrondissement {getDistrict}e
      </Title>
      <div>
        {results.map((value, index) => (
          <p key={index}> - {value.Type}</p>
        ))}
      </div>
    </Content>
  );
};
