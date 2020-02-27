import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";
import axios from "axios";
import moment from "moment";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  height: 500px;
  width: 250px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  line-height: 20px;
`;

const Title = styled.p`
  color: ${color.brandColor};
  font-size: ${fontSize.SmallFont};
`;

const Info = styled.p`
  color: ${color.fontInfos};
  font-size: ${fontSize.RegularFont};
  text-transform: capitalize;
`;

export const EventPlace = ({ getId, getDistrict }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(process.env.REACT_APP_API_URL_OLYMPIC);

      setData(result.data);
    };
    fetchData();
  }, []);

  const test = data.filter(
    (value) => value.sport.place.district === getDistrict,
  );
  const goodDistrict = getId < 11 ? 8 : 7;
  // console.log(goodDistrict);
  const finalResult = test.filter(
    (value) => value.date === `2024-07-${getId}T00:00:00+02:00`,
  );
  // console.log(getId);
  // console.log(test);

  console.log(finalResult);
  console.log(data);

  return (
    <Container>
      {finalResult.map((value, index) => (
        <Content key={index}>
          <div>
            <Title>Épreuve:</Title>
            <Info>{value.sport.name}</Info>
          </div>
          <div>
            <Title>Lieu:</Title>
            <Info>{value.sport.place.address}</Info>
          </div>
          <div>
            <Title>Capacité:</Title>
            <Info>{value.sport.place.capacity}</Info>
          </div>
          <div>
            <Title>Le:</Title>
            <Info>
              {moment(value.date).format("dddd Do MMMM")}
              <br />à {moment(value.startTime).format("LT")}
            </Info>
          </div>
        </Content>
      ))}
    </Container>
  );
};
