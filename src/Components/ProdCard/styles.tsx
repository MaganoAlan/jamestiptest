import styled from "styled-components";

const Container = styled.div`
  background-color: #d2f7ed;
  margin: 0 auto;
  margin-top: 2vh;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 30vh;
  height: 60vh;
  min-width: 30vw;
  width: 60vw;
  border-radius: 8px;
  color: #000;
`;

const Input = styled.input`
  width: min-content;
  margin-bottom: 1%;
`;

const Button = styled.button`
  border: none;
  background-color: #00d0b3;
  padding: 5px;
  border-radius: 5px;
  margin: 2%;
  margin-top: 10%;
  cursor: pointer;
  font-weight: 700;
  color: #fff;

  :hover {
    box-shadow: 2px 2px 2px #5c5c5c;
  }
`;

export { Container, Input, Button };
