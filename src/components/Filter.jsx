import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../style/const";
import Icon from "../components/Icon";
import icons from "../assets/icons.svg";

const Content = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${color.bluePrimary};
  width: 308px;
  height: 156px;
  left: 0;
  top: 40%;
  color: white;
  transition: all 0.5s ease 0s;

  h1 {
    padding: 24px 24px;
  }

  p {
    font-size: 1rem;
    padding: 0;
    color: white;
  }
`;

const FilterSelect = styled.section`
  display: block;

  label {
    display: flex;
    margin: 0 0 24px 18px;
  }
`;

const IconStyle = styled.svg`
  position: absolute;
  height: 100%;
  width: 20px;
  right: 5px;
  top: 0;
  transition: 0.5s;
`;

export const Filter = () => {
  const [checkState, setCheckState] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  return (
    <Content
      style={
        isOpen
          ? { transform: "translate(-280px, 0)" }
          : { transform: "translate(0, 0)" }
      }
    >
      <h1>Filtrer par:</h1>
      <FilterSelect>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setCheckState(e.target.checked)}
          />
          <p>Densité de pop</p>
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) => setCheckState(e.target.checked)}
          />
          <p>Épreuves de JO</p>
        </label>
        <IconStyle
          onClick={() => setIsOpen((isOpen = !isOpen))}
          style={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(0)" }
          }
        >
          <use xlinkHref={`${icons}#arrowToggle`} />
        </IconStyle>
      </FilterSelect>
    </Content>
  );
};
