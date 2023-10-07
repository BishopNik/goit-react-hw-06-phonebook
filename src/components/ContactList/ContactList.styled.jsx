/** @format */

import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 5px 30px;
	outline: 1px solid lightgray;
	margin-bottom: 5px;
`;

export const Contact = styled.p`
	margin: 0;
	margin-right: auto;
	padding-top: 10px;
	padding-bottom: 10px;
	font-size: 24px;
	color: darkblue;
`;

export const DelDutton = styled.button`
	border-radius: 6px;
	font-size: 22px;
	border: 1px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	box-shadow: 0px 0px 4px 2px rgba(128, 128, 128, 0.5);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	min-width: 80px;
	height: 40px;

	&:hover {
		background-color: antiquewhite;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;
