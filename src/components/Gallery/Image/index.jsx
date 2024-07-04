import { styled } from 'styled-components';
import { ButtonIcon } from '@components/ButtonIcon';


const Figure = styled.figure`
    width: ${(props) => (props.$expanded ? '90%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Image = ({ photo, expanded = false, requestZoom, toggleFavorite }) => {

    /* const iconFavorite = photo.favorite ? '/icons/favorito-ativo.png' : '/icons/favorito.png'; */

    let iconFavorite = '/icons/favorito.png';
    if(photo.favorite) {
        
        iconFavorite = '/icons/favorito-ativo.png';
    }

    return (
        <Figure $expanded={expanded} id={`photo-${photo.id}`}>
            <img src={photo.path} alt={photo.alt} />
            <figcaption>
                <h3>{photo.title}</h3>
                <Footer>
                    <h4>{photo.font}</h4>
                    <ButtonIcon onClick={() => toggleFavorite(photo)}>
                        <img src={iconFavorite} alt="Ícone de favorito" />
                    </ButtonIcon>
                    {!expanded && (
                        <ButtonIcon aria-hidden={expanded.toString()} onClick={() => requestZoom(photo)}>
                            <img src="/icons/expandir.png" alt="Ícone de expandir" />
                        </ButtonIcon>
                    )}
                </Footer>
            </figcaption>
        </Figure>
    );
}