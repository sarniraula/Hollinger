import React from 'react'
import styled from 'styled-components' 
import { teamImages } from '../teamData'


const Container = styled.div`
    padding: 50px 0px;
    background-color: #eee;
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

const TeamContainer = styled.div`
    display: flex;
    margin: 70px;
    justify-content: center;
`

const ImageItem = styled.div`
    margin: 10px 20px;
`
const Image = styled.img`
    border-radius: 50%;
    object-fit: cover;
    height: 20vh;
    width: 20vh;
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
const TeamItem = styled.div`
    text-align: center;
    // width: 50%;
`
const TeamTitle = styled.h1`
    font-family: "Roboto Condensed";
    font-size: 16px;
    // letter-spacing: ;
    font-weight: 700;
`
const TeamEmail = styled.h1`
    font-family: "Open Sans";
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
`
const TeamFavFood = styled.h1`
    font-family: "Open Sans";
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    width: 70%;
    margin: auto;
`
const TeamPosition = styled.h1`
    font-family: "Open Sans";
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
`

const TeamDetails = ({item}) => {
    return(
        <TeamItem>
            <ImageItem>
                <Image src={item.image}></Image>
            </ImageItem>
            <TeamTitle>{item.title}</TeamTitle>
            <TeamPosition>{item.position}</TeamPosition>
            <TeamEmail>{item.email}</TeamEmail>
            <TeamFavFood>{item.favFood}</TeamFavFood>
        </TeamItem>
    )
}

const Team = () => {
  return (
    <Container>
        <Title>THE HOLLINGER TEAM</Title>
        <Subtitle>OUR TEAM WILL MAKE YOUR STAY AT SPOON AN UNFORGETTABLE ONE.</Subtitle>
        <TeamContainer>
            {teamImages.map((item) => (
                <TeamDetails item={item} key={item.id} />
            ))}
        </TeamContainer>
        <Button>ALL IMAGES</Button>
    </Container>
  )
}

export default Team