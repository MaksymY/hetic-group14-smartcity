import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../style/const";
import Image from "../assets/logo.png";

const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${color.bluePrimary};
`;
const NavList = styled.ul`
  display: inherit;
`;
const NavElement = styled.li`
  color: white;
  list-style-type: none;
  margin: 0 50px;
  cursor: pointer;
`;
const NavLogo = styled.img`
  margin: 0 140px 0 30px;
`;

export const Nav = () => {
  return (
    <NavStyled>
      <NavList>
        <NavLogo src={Image} />
        <Link to="/">
          <NavElement>Dans Ma Rue</NavElement>
        </Link>
        <Link to="/jo">
          <NavElement>Épreuves des JO</NavElement>
        </Link>
      </NavList>
    </NavStyled>
  );
};
