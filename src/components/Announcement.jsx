import styled from "styled-components";
import { LocationOn, Phone } from "@material-ui/icons";


const Container = styled.div`
  height: 50px;
  background-color: #303033;
  color: white;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 30px;
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
  font-size: 10px;
  font-weight: 400;
  padding-right: 30px;
  letter-spacing: 0.2em;
`

const Announcement = () => {
  return <Container>
            <ContactItem><LocationOn/>PATANDHOKA, LALITPUR</ContactItem>
            <ContactItem><Phone/> 984563214</ContactItem>
            <ContactItem>WWW.HOLLINGER.COM</ContactItem>
          </Container>;
};

export default Announcement;
