import styled from 'styled-components';
import { Container } from 'react-grid-system';

export const HeaderContainer = styled(Container)`
    background-color: #F4F4F4;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 10px 0;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100% !important;
`;
