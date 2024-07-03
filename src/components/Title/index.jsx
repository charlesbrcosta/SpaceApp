import { styled } from 'styled-components';

export const Title = styled.h2`
    color: #7B78E6;
    font-size: clamp(12px, 4vw, 32px);
    text-align: ${ props => props.$alignment ? props.$alignment : 'left' };
`;