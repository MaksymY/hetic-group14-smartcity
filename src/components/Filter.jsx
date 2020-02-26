import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../style/const";
import icons from "../assets/icons.svg";

const Content = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 308px;
  height: 156px;
  left: 0;
  top: 50%;
  color: ${color.bluePrimary};
  margin: 0 34px;

  h1 {
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
    padding: 0;
  }
`;

const FilterSelect = styled.section`
  position: relative;
  display: block;

  label {
    display: flex;
    margin: 0 0 24px 40px;
  }
`;
const FilterCheck = styled.div`
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
`;
const Checkbox = styled.input`
  appearance: none;
  border-radius: 1px;
  height: 14px;
  width: 14px;
  background: transparent;
  border: 1px solid ${color.bluePrimary};
  outline-style: none;
  margin: 0 10px 0 0px;

  &:checked {
    background: ${color.bluePrimary};
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const IconStyle = styled.svg`
  position: absolute;
  height: 16px;
  width: 16px;
  left: 0;
  top: 0;
  stroke: ${color.bluePrimary};
  opacity: 1;
  transition: 0.2s;
`;

export const Filter = () => {
  let [checkState, setCheckState] = useState(true);
  let [isOpen, setIsOpen] = useState(false);
  return (
    <Content>
      <h1>Appliquer des filtres</h1>
      <FilterSelect>
        <FilterCheck
          style={
            isOpen
              ? { transform: "translate(15px, 0)", opacity: "1" }
              : { transform: "translate(-40px, 0)", opacity: "0" }
          }
        >
          <label>
            <Checkbox
              type="checkbox"
              onChange={(e) => setCheckState(e.target.checked)}
            />
            <p>Densité de pop</p>
          </label>
          <label>
            <Checkbox
              type="checkbox"
              onChange={(e) => setCheckState(e.target.checked)}
            />
            <p>Épreuves de JO</p>
          </label>
        </FilterCheck>
        <IconStyle
          onClick={() => setIsOpen((isOpen = !isOpen))}
          style={
            isOpen
              ? { transform: "rotate(180deg)" }
              : { transform: "rotate(270deg)" }
          }
        >
          <use xlinkHref={`${icons}#arrowToggle`} />
        </IconStyle>
      </FilterSelect>
    </Content>
  );
};
