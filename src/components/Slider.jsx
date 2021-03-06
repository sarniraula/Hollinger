import { FavoriteBorderOutlined ,ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  // flex: 1;
  position: relative;
`;

const Image = styled.img`
  // height: 80%;
  width: 100%;
  background-position: center;
  background-size: cover;
 
`;

const InfoContainer = styled.div`
  // flex: 1;
  padding: 50px;
  position: absolute;
  top: 30%; 
  text-align: center;
  // right : 900; 
  width: 30%; 
`;

const Title = styled.h1`
  font-family: 'Open Sans';
  font-size: 50px;
  color: white;
  text-align: center;
  letter-spacing: 0.2em;
`;

const Desc = styled.p`
  font-family: 'Open Sans';
  margin: 20px 0px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 3px;
  color: white;
  text-align: center;
  letter-spacing: 0.2em;
`;

const HLine = styled.hr`
  width: 50px;
  color: white;
  margin: 20px auto;
`

// const Button = styled.button`
//   padding: 10px;
//   font-size: 20px;
//   background-color: transparent;
//   cursor: pointer;
// `;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <FavoriteBorderOutlined style={{color: "white"}}/>
              <Title>{item.title}
                <HLine />
              </Title>
              <Desc>{item.desc}</Desc>
              {/* <Button>SHOW NOW</Button> */}
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
