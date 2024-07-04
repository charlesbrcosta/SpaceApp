import { styled } from 'styled-components';

import { Title } from '@components/Title';
import { Tags } from '@components/Gallery/Tags'; 
import { Popular } from '@components/Gallery/Popular';
import { Image } from './Image';

const ContainerGallery = styled.div`
    display: flex;
    gap: 24px;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`;


export const Gallery = ({ photos = [], onChangeSelectedPhoto, toggleFavorite }) => {
    return (
        <>
            <Tags />
            <ContainerGallery>
                <FluidSection>
                    <Title>Navegue pela galeria</Title>
                    <ImagesContainer>
                        {photos.map(photo => <Image 
                            key={photo.id} 
                            requestZoom={onChangeSelectedPhoto}
                            toggleFavorite={toggleFavorite}
                            photo={photo} />)
                        }
                    </ImagesContainer>
                </FluidSection>
                <Popular />
            </ContainerGallery>
        </>
    )
}