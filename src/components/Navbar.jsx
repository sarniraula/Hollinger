import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 0.1em;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-family: 'Open Sans';
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 50px;
  letter-spacing: 0.2em;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  &:hover {
    color: #ff4229;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>HOLLINGER.</Logo>
        </Left>
        <Right>
          <MenuItem>HOME</MenuItem>
          <MenuItem>MENU</MenuItem>
          <MenuItem>BLOG</MenuItem>
          <MenuItem>EVENTS</MenuItem>
          <MenuItem>TEAM</MenuItem>
          <MenuItem>CONTACT</MenuItem>
          <MenuItem>|</MenuItem>
          <MenuItem>SHOP</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
