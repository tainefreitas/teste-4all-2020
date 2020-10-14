import styled from 'styled-components';
import { CardBtn } from '../../components/Item/style';


export const CheckoutTitle = styled.h2`
    color:  #336600;
    margin: 30px;
    font-size: 30px;
`;

export const CheckoutContainer =  styled.table`
    width: 80%;
    margin: auto;
`;

export const CheckoutTableHeader = styled.thead`
    text-align: justify;
    font-size: 18px;
`;
export const CheckoutNoItems = styled(CheckoutTitle)`
    font-size: 25px;
    color: #000;
`;

export const CheckoutTotal = styled(CheckoutNoItems)`
    font-size: 15px;
    text-align: end;
`;

export const CheckoutButtonFinish = styled(CardBtn)`
    margin: 0 30px;
`;