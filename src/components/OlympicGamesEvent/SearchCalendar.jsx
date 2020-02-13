import React from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";

const Content = styled.div`
  background-color: ${color.backgroundPrimary};
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;

  h3 {
    color: ${color.bluePrimary};
    font-size: ${fontSize.H1};
    margin-bottom: 10px;
  }

  div {
    display: flex;

    input {
      outline: 0;
      border-width: 0 0 1px;
      border-color: ${color.brandColor};
      background-color: ${color.backgroundPrimary};
    }

    label {
      color: ${color.brandColor};
      font-family: "Seravek";
      font-weight: normal;
      font-size: ${fontSize.RegularFont};
      margin-right: 15px;
    }
  }
`;

export const SearchCalendar = () => {
  return (
    <Content>
      <h3>Calendrier</h3>
      <div>
        <label>Sélectionner une épreuve :</label>
        <input type="search" id="search" />
      </div>
    </Content>
  );
};
