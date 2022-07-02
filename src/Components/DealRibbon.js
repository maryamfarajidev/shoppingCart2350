
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color:yellow;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const DealRibbon = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default DealRibbon;