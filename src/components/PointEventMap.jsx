import React from "react";
import styled from "styled-components";

const Content = styled.div`
  span {
    position: absolute;
    height: 14px;
    width: 14px;
    background-color: #4a52ff;
    border-radius: 50%;

    &.hidden {
      visibility: hidden;
    }
  }

  span:nth-child(1) {
    top: 40px;
    right: 210px;
  }
  span:nth-child(2) {
    top: 65px;
    right: 90px;
  }
  span:nth-child(3) {
    bottom: 130px;
    right: 130px;
  }
  span:nth-child(4) {
    left: 145px;
    bottom: 115px;
  }
  span:nth-child(5) {
    left: 10px;
    bottom: 170px;
  }
  span:nth-child(6) {
    left: 200px;
    bottom: 260px;
  }
  span:nth-child(7) {
    left: 260px;
    bottom: 260px;
  }
  span:nth-child(8) {
    left: 260px;
    bottom: 350px;
  }
`;

export const PointEventMap = ({ isChecked }) => {
  return (
    <Content>
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
      <span className={!isChecked ? "hidden" : ""} />
    </Content>
  );
};
