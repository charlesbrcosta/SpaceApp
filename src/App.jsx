import { useState } from 'react';

import { styled } from 'styled-components';
import { GlobalStyles } from '@components/GlogalStyles';
import { Header } from '@components/Header';
import { SideBar } from '@components/SideBar';
import { Banner } from '@components/Banner';

import bannerBackground from './assets/banner.png';
import { Gallery } from '@components/Gallery';

import photos from './photos.json';
import { ModalZoom } from './components/ModalZoom';

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const App = () => {
  const [photosGallery, setPhotosGallery] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const toggleFavorite = (photo) => {
    if(photo.id === selectedPhoto?.id){
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }
    setPhotosGallery(photosGallery.map(photoTheGallery => {
      return {
        ...photoTheGallery,
        favorite: photoTheGallery.id === photo.id ? !photo.favorite : photoTheGallery.favorite
      }
    }));
  }

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner
              text='A galeria mais completa de fotos do espaço!'
              backgroundImage={bannerBackground}
            />
            <Gallery onChangeSelectedPhoto={photo => setSelectedPhoto(photo)} 
              toggleFavorite={toggleFavorite}
              photos={photosGallery}               
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ModalZoom 
        photo={selectedPhoto}
        close={() => setSelectedPhoto(null)}
        toggleFavorite={toggleFavorite}
        />
    </GradientBackground>
  )
}
