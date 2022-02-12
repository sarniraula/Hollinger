import React from 'react'
import styled from 'styled-components'
import { exploreMenu } from '../data'
import ExploreMenuItem from './ExploreMenuItem'

const Container = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    height: 70vh;
    display:flex;
    align-items: center;
    justify-content: center;
`
const ExploreMenu = () => {
    return (
      <Container>
        {exploreMenu.map((item) => (
          <ExploreMenuItem item={item} key={item.id}/>
        ))}
      </Container>
    );
  };

export default ExploreMenu