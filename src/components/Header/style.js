import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
    background-color: #F2F2F2F2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const HeaderText = styled.h1`
    margin: 20px 40px;
`;

export const HeaderCartButton = styled.h1`
    margin: 20px 35px;
    width: 40px;
    height: 40px;
    text-align: center;
`;

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color:  #408000;
`;
