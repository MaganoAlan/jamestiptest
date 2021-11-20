import styled from "styled-components";

const Card = styled.div`
  margin: 0 auto;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Proditem = styled.div`
  margin: 0 auto;
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
`;

const Cod = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2%;
`;

const Modal = styled.div`
  border-radius: 10px;
  background-color: #fff;
  padding: 1%;
  text-align: end;
`;

const ModalButton = styled.button`
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

export { Card, Proditem, Cod, Div, Actions, Modal, ModalButton };
