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
  font-family: 'Seravek';

  ul {
    display: inherit;
  }

  li {
    color: white;
    list-style-type: none;
    margin: 0 50px;
    cursor: pointer;
  }
`;
const NavLogo = styled.img`
  margin: 0 140px 0 30px;
`;

export const Nav = () => {
  let [active, setActive] = useState(true);
  return (
    <NavStyled>
      <ul>
        <NavLogo src={Image} />
        <Link to="/">
          <li
            style={active ? { fontWeight: "bold" } : {}}
            onClick={() => setActive((active = true))}
          >
            Dans Ma Rue
          </li>
        </Link>
        <Link to="/jo">
          <li
            onClick={() => setActive((active = false))}
            style={!active ? { fontWeight: "bold" } : {}}
          >
            Épreuves des JO
              </li>
        </Link>
      </ul>
    </NavStyled>
  );
};
