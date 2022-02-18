import React from 'react'
import styled from 'styled-components'
import { coffees, coldPressedJuice, matchaItems, otherBeverages } from '../menuData'

const Container = styled.div`
    margin: 50px 0px;
`
const BoxContainer = styled.div`
    display: flex;
    margin: 80px 0;
    // align-items: center;
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
    line-height: 2em;
    font-weight: 500;
    font-size: 14px;
    width: 35%;
    margin: auto;
`
const LeftMenu = styled.div`
    padding : 30px 30px;
    border: 6px solid #eee;
    width: 20%;
    height: 80vh;;
`
const HorizontalLine = styled.hr`
    border-top : 6px ${props=>props.dots? "dotted": "solid"} ${props=>props.light? "white": "#303033"};
`
 
const RightMenu = styled.div`
    // background: #303033;
    width: 50%;
    margin: 0px 30px;
`
const MenuTitle = styled.div`
    // color: #ffffff;
    font-family: 'Roboto Condensed';
    font-size: ${props => props.block ? "32px" : "16px" };
    color: ${props => props.light ? "#ffffff":"#303033"};
    font-weight: 800;
    margin: 10px 0px;
`
const MenuDescription = styled.h1`
    font-size: 14px;
    font-family: 'Open Sans';
    width: 70%;
    font-weight: 300;
    margin: 10px 0px;
    color: ${props => props.light ? "#cccccc" : "#4a4c4e" };
`

const MenuPrice = styled.h1`
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 400;
    margin: 10px 0px;
    font-style: italic;
    width: 20%;
    text-align: right;
    color: ${props => props.light ? "#cccccc" : "#303033"};
`

const RightTop = styled.div`
    padding : 20px;
    background: #303033;
`
const RightBottom = styled.div`
    display: flex;
    margin: 10px 0;
`
const RightBottomLeft = styled.div`
    padding : 20px 30px;
    // border: 6px solid #eee;
    width: 50%;
`
const RightBottomRight = styled.div`
    padding : 20px 30px;
    // border: 6px solid #eee;
    width: 50%;
    margin-left: 10px;
`

const Coffee = ({item}) => {
    return (
        <ColumnContainer>
        <RowContainer>
            <MenuTitle light>{item.title}</MenuTitle>
            <MenuDescription light>{item.desc}</MenuDescription>
        </RowContainer>
        <MenuPrice light >{item.price}<sup>.00</sup></MenuPrice>
    </ColumnContainer>
    )
  }

const Coffees = styled.ul`
  columns: 2;
  padding: 20px 0px;
  width: 100%;
  margin-top: 10px;
`

const MatchaImage = styled.img`
  width: 100%;
  margin: 20px 0px;
`
const ColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
const RowContainer = styled.div`
  width: 100%;
  
`
const Menu = ({item}) => {
    return(
        <ColumnContainer>
            <RowContainer>
                <MenuTitle>{item.title}</MenuTitle>
                <MenuDescription>{item.desc}</MenuDescription>
            </RowContainer>
            <MenuPrice>{item.price}<sup>.00</sup></MenuPrice>
        </ColumnContainer>
    )
}

const MatchaMenu = styled.div`
    
`

const Drinks = () => {
  return (
    <Container>
        <Title>DRINKS</Title>
        <Subtitle>WE SERVE ONLY HAND-CRAFTED SPECIALITY DRINKS WITH THE BEST ORGANIC INGREDIENTS</Subtitle>
        <BoxContainer>
            <LeftMenu>
                <HorizontalLine dots></HorizontalLine>
                <MenuTitle block >COLD PRESSED JUICE</MenuTitle>
                <HorizontalLine dots></HorizontalLine>
                    { coldPressedJuice.map((item)=>(
                            <Menu item={item} key={item.id}/>
                        ))}
            </LeftMenu>
            <RightMenu>
                <RightTop>
                    <MenuTitle block light>COFFEE</MenuTitle>
                    <HorizontalLine light></HorizontalLine>
                    <Coffees>
                        { coffees.map((item)=>(
                            <Coffee item={item} key={item.id}/>
                        ))}
                    </Coffees>
                </RightTop>
                <RightBottom>
                    <RightBottomLeft>
                        <MenuTitle block>MATCHA</MenuTitle>
                        <HorizontalLine></HorizontalLine>
                        <MatchaImage src='https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></MatchaImage>
                        <MatchaMenu>
                            { matchaItems.map((item)=> (
                                <Menu item={item} key={item.id}/>
                            ))}
                        </MatchaMenu>      
                    </RightBottomLeft>
                    <RightBottomRight>
                            <MenuTitle block>OTHER BEVERAGES</MenuTitle>
                            <HorizontalLine></HorizontalLine>
                            {/* <MatchaImage src='https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></MatchaImage> */}
                            <MatchaMenu>
                                { otherBeverages.map((item)=> (
                                    <Menu item={item} key={item.id}/>
                                ))}
                            </MatchaMenu>
                    </RightBottomRight>
                </RightBottom>
            </RightMenu>
        </BoxContainer>
        
    </Container>
  )
}

export default Drinks