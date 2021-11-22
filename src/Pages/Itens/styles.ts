import styled from "styled-components";

const Proditem = styled.div`
  margin: 0 auto;
  margin-top: 3vh;
  display: flex;
  flex-direction: row;
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

const ActionsText = styled.p`
  font-weight: bold;
`;

export { Proditem, Div, Actions, ActionsText };
