/** @format */

import styled from 'styled-components';

export const ContactContainer = styled.div`
	display: flex;
	align-items: center;
	padding: ${p => p.theme.spacing(1)} 30px;
	outline: 1px solid lightgray;
	margin-bottom: 5px;
`;

export const Contact = styled.p`
	margin: 0;
	margin-right: auto;
	padding-top: ${p => p.theme.spacing(3)};
	padding-bottom: ${p => p.theme.spacing(3)};
	font-size: 24px;
	color: darkblue;
`;

export const DelDutton = styled.button`
	border-radius: ${p => p.theme.spacing(2)};
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
