import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  buttonColor?: string;
}

export const Button = styled.button<ButtonProps>`
  border: none;
  background-color: ${({ buttonColor }) => buttonColor || "#00d0b3"};
  border-radius: 4px;
  margin: 1%;
  padding: 8px;
  font-weight: 700;
  color: #fff;

  :hover {
    background-color: #64fce8;
  }
`;

export const SecondaryButton = styled.button<ButtonProps>`
  border: none;
  background-color: ${({ buttonColor }) => buttonColor || "#00d0b3"};
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

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
