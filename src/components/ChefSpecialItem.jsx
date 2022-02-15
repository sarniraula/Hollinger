import React from 'react'
import styled from 'styled-components'


const InfoTitle = styled.h1`
    text-align: center;
    color: white;
    font-family: 'Roboto Condensed';
    letter-spacing: 0.05em;
    font-size: 16px;
    margin: 10px;
    padding: 0 10px;
`
const InfoDescription = styled.h1`
    text-align: center;
    color: #bbbbbb;
    font-family: 'Open Sans';
    font-size: 13px;
    font-weight: 100;
    margin: 10px;
`

const Info = styled.div`
    padding: 10px;
    width: 60%;
    margin: 0px auto;
`
const ChefSpecialItem = ({item}) => {
  return (   
    <Info>
        <InfoTitle>{item.infoTitle}</InfoTitle>
        <InfoDescription>{item.infoDesc}</InfoDescription>
    </Info>
            
       
    
  )
}

export default ChefSpecialItem