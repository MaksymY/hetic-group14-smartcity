import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color } from "../style/const";
import Image from "../assets/logo.svg";

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
  let [active, setActive] = useState(true);
  return (
    <NavStyled>
      <NavList>
        <NavLogo src={Image} />
        <Link to="/">
          <NavElement
            style={active ? { fontWeight: "bold" } : {}}
            onClick={() => setActive((active = true))}
          >
            Dans Ma Rue
          </NavElement>
        </Link>
        <Link to="/jo">
          <NavElement
            onClick={() => setActive((active = false))}
            style={!active ? { fontWeight: "bold" } : {}}
          >
            Épreuves des JO
          </NavElement>
        </Link>
      </NavList>
    </NavStyled>
  );
};
