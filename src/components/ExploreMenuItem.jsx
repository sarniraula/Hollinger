import React from 'react'
import styled from 'styled-components'

const AContainer = styled.div`
    background-color: white;
    width:70%;
    display:flex;
    align-items: center;
    justify-content: center;
`

const ImageContainer = styled.div`
    flex: 1;
    height: 65vh;
`

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    // padding: 30px;
`

const Title = styled.h1`
    font-family: "Roboto Condensed";
    font-size: 32px;
    letter-spacing: 0.2em;
    text-align: center;
    margin : 17px 0;
`

const Line = styled.hr`
    width: 10%;
    margin: auto;
    height: 3px;
    background: #303033;
`

const Quote = styled.h1`
    color: #aaa;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-align: center;
    margin: 25px 0;
`

const Description = styled.h1`
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 300;
    width: 80%;
    margin: auto;
    letter-spacing: 0.1em;
    line-height: 2;
    text-align: center;
    // margin: 30px 0;
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

const ExploreMenuItem = ({ item }) => {
  return (
          <AContainer>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>
                    {item.title}
                </Title>
                <Line/>
                <Quote>{item.quote}</Quote>
                <Description>{item.desc}</Description>
                <Button>
                    {item.button}
                </Button>
            </InfoContainer>
          </AContainer>
  )
}

export default ExploreMenuItem