import React from 'react'
import styled from 'styled-components' 
import { teamImages } from '../teamData'


const Container = styled.div`
    padding: 50px 0px;
    background-color: #fff;
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
    width: 20%;
    margin: auto;
    margin-bottom: 70px;
`
const HoursDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

const DarkBg = styled.h1`
    text-align: right;
    color: #eeeeed;
    background: #1a1c1e;
    font-family: 'Roboto Condensed';
    // letter-spacing: 0.1em;
    font-weight: 500;
    font-size: 48px;
    padding: 10px;
`

const LigtBg = styled.h1`
    text-align: left;
    color: ##1a1c1e;
    background: #fff;
    font-family: 'Roboto Condensed';
    // letter-spacing: 0.1em;
    font-weight: 500;
    font-size: 48px;
    padding: 10px;
`




const Hours = () => {
  return (
    <Container>
        <Title>HOURS</Title>
        <Subtitle>WE ARE CLOSED ON HOLIDAYS. PLEASE CALL US FOR RESERVERATIONS.</Subtitle>
        <HoursDiv>
            <DarkBg>TUE - SAT</DarkBg><LigtBg>11am - 10pm</LigtBg>
        </HoursDiv>
        <HoursDiv>
            <DarkBg>SUN</DarkBg><LigtBg>8am - 10pm</LigtBg>
        </HoursDiv>
        <HoursDiv>
            <DarkBg>MON</DarkBg><LigtBg>Closed</LigtBg>
        </HoursDiv>
    </Container>
  )
}

export default Hours