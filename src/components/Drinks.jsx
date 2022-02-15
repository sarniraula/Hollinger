import React from 'react'
import styled from 'styled-components'
import { coldPressedJuice } from '../menuData'

const Container = styled.div`
    padding: 50px;
    // height: 90vh;
`
const BoxContainer = styled.div`
    display: flex;
    margin: 80px 0;
    align-items: center;
    justify-content: center;    
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
    font-weight: 400;
    font-size: 14px;
    width: 30%;
    margin: auto;
`
const LeftMenu = styled.div`
    padding : 30px 30px;
    border: 6px solid #eee;
    width: 25%;
`
const HorizontalDots = styled.hr`
    border-top: 6px dotted #303033;
    margin: 10px 0;
`
const HorizontalLine = styled.hr`
    border-top: 6px solid #ffffff;
`
const DarkTitle = styled.div`
    color: #303033;
    font-family: 'Roboto Condensed';
    font-size: 32px;
    font-weight: 800;
`

const RightMenu = styled.div`
    padding : 30px 30px;
    background: #303033;
    width: 50%;
    margin: 0px 10px;
`
const LightTitle = styled.div`
    color: #ffffff;
    font-family: 'Roboto Condensed';
    font-size: 32px;
    font-weight: 800;
    margin: 10px 0px;
`
const RightTop = styled.div`
       
`
const RightBottom = styled.div``
const RightBottomLeft = styled.div``
const RightBottomRight = styled.div``

const ColdPressedJuiceContainer = styled.div`
    background: #asdfsd;
    margin: 20px 0;
`
const ColdPressedJuiceTitle = styled.h1`
    font-size: 16px;
    font-family: 'Roboto Condensed';
`

const ColdPressedJuiceDesc = styled.h1`
    font-size: 13px;
    font-family: 'Open Sans';
    width: 70%;
    font-weight: 300;
    margin: 10px 0px;
`
const DescriptionItalic = styled.h1`
    font-size: 13px;
    font-family: 'Open Sans';
    width: 70%;
    font-weight: 300;
    margin: 10px 0px;
    font-style: italic;
`



const ColdPressedJuice = ({item}) => {
    return (
      <ColdPressedJuiceContainer>
          <ColdPressedJuiceTitle>{item.title}</ColdPressedJuiceTitle>
          <ColdPressedJuiceDesc>{item.desc}</ColdPressedJuiceDesc>
          <DescriptionItalic>{item.calories}</DescriptionItalic>

      </ColdPressedJuiceContainer>
    )
  }


const Drinks = () => {
  return (
    <Container>
        <Title>DRINKS</Title>
        <Subtitle>WE SERVE ONLY HAND-CRAFTED SPECIALITY DRINKS WITH THE BEST ORGANIC INGREDIENTS</Subtitle>
        <BoxContainer>
            <LeftMenu>
                <HorizontalDots></HorizontalDots>
                <DarkTitle>COLD PRESSED JUICE</DarkTitle>
                <HorizontalDots></HorizontalDots>

                    { coldPressedJuice.map((item)=>(
                        <ColdPressedJuice item={item} key={item.id}/>
                    ))}

            </LeftMenu>
            <RightMenu>
                <RightTop>
                    <LightTitle>COFFEE</LightTitle>
                    <HorizontalLine></HorizontalLine>
                    
                </RightTop>
                    <RightBottom>
                        <RightBottomLeft>

                        </RightBottomLeft>
                        <RightBottomRight>

                        </RightBottomRight>
                    </RightBottom>
            </RightMenu>
        </BoxContainer>
        
    </Container>
  )
}

export default Drinks