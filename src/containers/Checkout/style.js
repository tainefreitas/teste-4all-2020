import styled from 'styled-components';

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