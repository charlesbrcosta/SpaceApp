import { styled } from 'styled-components';

import { Title } from '@components/Title'; 
import photos from './popularPhotos.json';

const PhotoColumn = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Image = styled.img`
    max-width: 212px;
    border-radius: 20px;
`;

const Buttom = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

export const Popular = ()  => {
    return(
        <section>
            <Title $alignment="center">Populares</Title>
            <PhotoColumn>
                {photos.map(photo => 
                    <Image 
                        key={photo.id} 
                        src={photo.path}
                        alt={photo.alt}
                    ></Image> )}
            </PhotoColumn>
            <Buttom>Ver mais</Buttom>
        </section>
    );
}