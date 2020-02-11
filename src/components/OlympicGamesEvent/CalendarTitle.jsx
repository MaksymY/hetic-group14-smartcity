import React from "react";
import styled from "styled-components";
import { color, fontSize } from "../../style/const";

const Content = styled.div`
	display: flex;
	height: 30px;
	width: 85%;
	justify-content: space-between;
	padding-top: 32px;
	margin-bottom: 30px;

	h2 {
		color: ${color.backgroundPrimary};
		font-size: ${fontSize.H1};
		font-family: 'Seravek';
		font-weight: bold;
	}

	p {
		color: ${color.brandColor};
		font-size: ${fontSize.RegularFont};
		font-family: 'Seravek';
		font-weight: normal;
	}
`;

export const CalendarTitle = () => {
  return (
		<Content>
			<h2>Juillet &amp; Août 2024</h2>
			<p>Nombre d’épreuves dans la journée</p>
		</Content>
  );
};
