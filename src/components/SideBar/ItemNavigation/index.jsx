import { styled } from 'styled-components';

const StyledListItem = styled.li`
    font-size: clamp(12px, 4vw, 24px);
    white-space: nowrap;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9' };
    font-family: ${ props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular' };
    display: flex;
    align-items: center;
    gap: 22px;
`;

export const ItemNavigation = ({ children, activeIcon, inactiveIcon, active = false, alt }) => {
    return(
        <StyledListItem $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt={alt}/>
            {children}
        </StyledListItem>
    );
}