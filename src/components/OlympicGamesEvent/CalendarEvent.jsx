import React from "react";
import styled from "styled-components";
import { color} from "../../style/const";
import {CalendarTitle} from "./CalendarTitle";
import {Calendar} from "../OlympicGamesEvent/Calendar";
import {WeekDays} from "../../components/OlympicGamesEvent/WeekDays"


const Content = styled.section`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	background-color : ${color.bluePrimary};
	height: 600px;
	margin: 0 auto;
	margin-top: 24px;
`;



export const CalendarEvent = () => {
  return (
		<Content>
			<CalendarTitle />
			<WeekDays />
			<Calendar />
		</Content>
  );
};
