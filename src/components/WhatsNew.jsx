import React from 'react'
import styled from 'styled-components' 
import { blogs } from '../blogData'

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
const BlogTitle = styled.h1`
    font-family: 'Roboto Condensed';
    font-size: 16px;
    letter-spacing: 0.1em;
    line-height: 1.5em;
    color: #303033;
    font-weight: 800;
    margin: 24px 24px;
`

const BlogDescription = styled.h1`
    font-size: 14px;
    font-family: 'Open Sans';
    letter-spacing: 0.1em;
    line-height: 1.5em;
    width: 70%;
    height: 15vh;
    font-weight: 300;
    margin: 15px 24px;
    color: #4a4c4e;
`

const BlogContainer = styled.div`
    display: flex;
    width: 70%;
    margin: 70px auto;
`

const BlogItem = styled.div`
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
    border:2px solid black;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 400;
    margin: 24px;
`
const Date = styled.div`
    margin: 24px; 
`

const Footer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`

const Blog = ({item}) => {
    return(
        <BlogItem>
            <Image src={item.image}></Image>
            <BlogTitle>{item.title}</BlogTitle>
            <BlogDescription>{item.desc}</BlogDescription>
            <Footer>
                <Date>{item.date}</Date>
                <Button>READ MORE</Button>
            </Footer>
        </BlogItem>
    )
}

const WhatsNew = () => {
  return (
    <Container>
        <Title>WHAT'S NEW?</Title>
        <Subtitle>EVERYTHING ABOUT OUR FOOD AND OUR EVENTS, FEATURING CULINARY TIPS & HEALTHY RECIPES</Subtitle>
        <BlogContainer>
            {blogs.map((item) => (
                <Blog item={item} key={item.id} />
            ))}
        </BlogContainer>
    </Container>
  )
}

export default WhatsNew