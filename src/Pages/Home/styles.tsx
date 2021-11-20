import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #54595f;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: #00d0b3;
`;

const Header = styled.div`
  background-color: #000;
`;

const Content = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`;

const Footer = styled.div`
  margin-top: 4%;
`;

const Button = styled.button`
  border: none;
  background-color: #00d0b3;
  border-radius: 4px;
  margin: 1%;
  padding: 8px;
  font-weight: 700;
  color: #fff;

  :hover {
    background-color: #64fce8;
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-weight: 800;
`;

export { Container, Header, Content, Footer, Button, H1 };
