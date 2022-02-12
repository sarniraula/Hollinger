import styled from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 35vh;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    font-family: "Roboto Condensed";
    font-weight: 500;
    margin: 20px 0px 28px;
    font-size: 16px;
    color: black;
    margin-bottom: 20px;
`;

const Description = styled.h1`
    font-size: 14px;
    font-weight: 300;
    width: 70%;
    margin: 0px 28px;
    line-height: 2;
    text-align: center;
    color: #4a4c4e;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:2px solid black;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 400;
`;

const IconSrc = styled.img`
  width: 50px;
  opacity: 60%;
`

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Info>
        <IconSrc src={item.icon}/>
        <Title>{item.title}</Title>
        <Description>{item.desc}</Description>
        <Button>{item.button}</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
