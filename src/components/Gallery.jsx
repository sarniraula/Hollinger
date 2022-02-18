import React from 'react'
import styled from 'styled-components' 
import { galleryImages } from '../galleryImages'


const Container = styled.div`
    padding: 50px 0px;
    // background-color: #eee;
`

const Title = styled.h1`
    text-align: center;
    color: #2a2c2e;
    font-family: 'Roboto Condensed';
    letter-spacing: 0.05em;
    font-size: 72px;
    margin: 20px;
`

const Subtitle = styled.h1`
    text-align: center;
    color: #aaaaaa;
    font-family: 'Open Sans';
    letter-spacing: 0.1em;
    line-height: 2em;
    font-weight: 500;
    font-size: 14px;
    width: 35%;
    margin: auto;
`

const ImageContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 70px auto;
`

const ImageItem = styled.div`
    margin: 0px 20px;
    background-color: white;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 25vh;
    object-fit: cover;
`
const Button = styled.button`
    margin: 24px auto;
    display: flex;
    background: #303033;
    color: white;
    padding: 12px 15px;
    border: none;
    letter-spacing: 0.1em;
    
`


const GalleryImage = ({item}) => {
    return(
        <ImageItem>
            <Image src={item.image}></Image>
        </ImageItem>
    )
}

const Gallery = () => {
  return (
    <Container>
        <Title>GALLERY</Title>
        <Subtitle>PHOTOS OF OUR FOOD AND OUR EVENTS</Subtitle>
        <ImageContainer>
            {galleryImages.map((item) => (
                <GalleryImage item={item} key={item.id} />
            ))}
        </ImageContainer>
        <Button>ALL IMAGES</Button>
    </Container>
  )
}

export default Gallery