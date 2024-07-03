import { styled } from 'styled-components'

import { ItemNavigation } from '@components/SideBar/ItemNavigation';

const StylizedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`;

export const SideBar = () => {
    return(
        <aside>
            <nav>
                <StylizedList>
                    <ItemNavigation
                        activeIcon='./icons/home-ativo.png'
                        inactiveIcon='./icons/home-inativo.png'
                        active={true}
                    >
                        Início
                    </ItemNavigation>
                    <ItemNavigation
                        activeIcon='./icons/mais-vistas-ativo.png'
                        inactiveIcon='./icons/mais-vistas-inativo.png'
                        active={true}
                    >
                        Mais vistas
                    </ItemNavigation>
                    <ItemNavigation
                        activeIcon='./icons/mais-curtidas-ativo.png'
                        inactiveIcon='./icons/mais-curtidas-inativo.png'
                        active={true}
                    >
                        Mais curtidas
                    </ItemNavigation>
                    <ItemNavigation
                        activeIcon='./icons/novas-ativo.png'
                        inactiveIcon='./icons/novas-inativo.png'
                        active={true}
                    >
                        Novas
                    </ItemNavigation>
                    <ItemNavigation
                        activeIcon='./icons/surpreenda-me-ativo.png'
                        inactiveIcon='./icons/surpreenda-me-inativo.png'
                        active={true}
                    >
                        Surpreenda-me
                    </ItemNavigation>
                </StylizedList>
            </nav>
        </aside>
    );
}