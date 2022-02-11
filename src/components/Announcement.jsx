import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #303033;
  color: white;
  display: flex;
  align-items: center;
  justify-content: right;
  font-size: 14px;
  font-weight: 500;
  padding-right: 30px;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
