import React from 'react'
import styled from 'styled-components'
import { chefSpecial } from '../data'
import ChefSpecialItem from './ChefSpecialItem'

const Container = styled.div`
    height: 90vh;
    background-image: url('https://images.pexels.com/photos/1835893/pexels-photo-1835893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-ietms: center;
    justify-content: center;
`

const Title = styled.h1`
    text-align: center;
    color: white;
    font-family: 'Roboto Condensed';
    font-size: 70px;
    letter-spacing: 0.1em;
    margin: 20px;
`


const InfoContainer = styled.div`
    background: #2a2c2e;
    width: 35%;
    margin: 0px auto;
    padding: 20px 0px;
`

const MenuTitle = styled.h1`
    text-align: center;
    color: white;
    font-family: 'Roboto Condensed';
    font-size: 32px;
    margin: 10px;
`

const Time = styled.h1`
    text-align: center;
    color: #bbbbbb;
    font-family: 'Georgia';
    font-size: 14px;
    margin-bottom: 20px;
`

const ChefSpecial = () => {
  return (
    <Container>
        <Title>CHEF'S SPECIAL</Title>
        <InfoContainer>
            <MenuTitle>TODAYS'S LUNCH MENU</MenuTitle>
            <Time>11:30 am – 3:00 pm</Time>
                {chefSpecial.map((item) => (
                    <ChefSpecialItem item={item} key={item.id} />
                ))}
        </InfoContainer>
    </Container>
  )
}

export default ChefSpecial