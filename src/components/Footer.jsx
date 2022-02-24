import {
  Facebook,
  FavoriteBorderOutlined,
  Instagram,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
margin-top: 70px;
  display: flex;
  padding: 20px 0px;
  background-color: #eee;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #1a1c1e;
  margin: 10px;
`;

const Logo = styled.h1`
  color: white;
`;

const Desc = styled.p`
  color: #aaaaaa;
  font-family: "Open Sans";
  font-size: 14px;
  margin: 20px 0px;
  line-height: 3em;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  // padding: 20px;
  margin: 10px;

  ${mobile({ display: "none" })}
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`


const Right = styled.div`
  flex: 1;
  background: #1a1c1e;
  padding: 20px;
  margin: 10px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const Button = styled.button`
    border:2px solid white;
    padding: 10px;
    color: white;
    background: none;
    cursor: pointer;
    font-weight: 400;
    width: 40%;
`
// const Form = styled.form`

// `
// const Label = styled.h1`

// `
// const Input = styled.input`

// `
// const Label = styled.form`

// `

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>HOLLINGER.</Logo>
        <Desc>
          You can find us at <br></br>
          PATAN DHOKA, LALITPUR<br></br>
          WWW.HOLLINGER.COM 
        </Desc>
        <Button>VIEW ON GOOGLE MAPS</Button>
        <Desc>
          Or, call us at 9856641236<br></br>
          You can make a reservation online by clicking <ahref>here</ahref>.<br></br>
          See you. <FavoriteBorderOutlined style={{color: "white"}}/>
        </Desc>
        <SocialContainer>
          <SocialIcon color="1a1c1e">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="1a1c1e">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="1a1c1e">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="1a1c1e">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Image src="https://images.pexels.com/photos/3943178/pexels-photo-3943178.jpeg?cs=srgb&dl=pexels-cottonbro-3943178.jpg&fm=jpg"></Image>
      </Center>
      <Right>
        {/* <Form>
          <Label>Field</Label>
          <Input name="field"/>
          <Input type="submit">SEND</Input>
        </Form> */}
      </Right>
    </Container>
  );
};

export default Footer;
