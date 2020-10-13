import styled from 'styled-components';
import { Col } from 'react-flexbox-grid';

export const CardContainer = styled(Col)`
    border: 3px solid #e3e3e3;
    margin: 20px;
    justify-content: center;
    padding: 15px;
`;
export const CardImg = styled.img`
	width: 150px;
	height: 150px;
	object-fit: scale-down;
`;
export const CardBtn = styled.button`
	padding: 10px;
	background-color: transparent;
	color: green;
	border: 1px solid green;
`;

export const CardTitle = styled.h1`
	font-weight: 700;
	font-size: 25px;
`;

export const CardCategory = styled.p`
    font-size: 18px;
`;

export const CardPrice = styled.p`
    font-size:20px;
`;
