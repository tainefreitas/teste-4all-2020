import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { CardBtn } from '../../components/Item/style';

export const CheckoutTitle = styled.h2`
	color: #336600;
	margin: 30px;
	font-size: 30px;
`;

export const CheckoutContainer = styled.table`
	width: 80%;
    margin: auto;
    border: 2px solid #F2F2F2;
    padding: 15px;
`;

export const CheckoutTableHeader = styled.thead`
	text-align: justify;
	font-size: 18px;
`;
export const CheckoutNoItems = styled(CheckoutTitle)`
    font-size: 25px;
    color: #000;
`;
export const CheckoutTotalContainer = styled(Row)`
    justify-content: flex-end;
    width: 95%;
`;
export const CheckoutTotalText = styled(CheckoutNoItems)`
    font-size: 19px;
`;

export const CheckoutButtonContainer = styled(Row)`
    justify-content: center;
`;
export const CheckoutButtonFinish = styled(CardBtn)`
    margin: 0 30px;
    font-weight: 700;
    font-size: 18px;
`;

export const ModalContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
    
`;
