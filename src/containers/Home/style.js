import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const SelectContainer = styled(Row)`
    justify-content: center;
    margin: 40px;
    
`;

export const SelectComponent = styled.select`
    width: 50%;
    font-size: 20px;
    border: 2px solid green;
    background-color: transparent;  
`;