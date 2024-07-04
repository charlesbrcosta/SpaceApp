import styled from 'styled-components';
import { Image } from '@components/Gallery/Image';
import { ButtonIcon } from '@components/ButtonIcon';


const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const StyledDialog = styled.dialog`
   position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`;


export const ModalZoom = ({ photo, close, toggleFavorite }) => {
    return (
        <>
            {photo && <>
            <Overlay />
                <StyledDialog open={!!photo} onClose={close}>
                    <Image photo={photo} expanded={true} toggleFavorite={toggleFavorite}/>
                    <form method="dialog">
                        <ButtonIcon>
                            <img src='/icons/fechar.png' alt='Icone de fechar janela' />
                        </ButtonIcon>
                    </form>
                </StyledDialog>
            </>}
        </>
    );
}