import React from "react";
import { Container, Header, Content, H1 } from "./styles";
import ProdCard from "../../components/ProdCard";
import DefaultButton from "../../components/DefaultButton";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <H1>Cadastrar Produto</H1>
        <DefaultButton title={"Voltar"} to={"/"} />
      </Header>
      <Content>
        <ProdCard />
      </Content>
    </Container>
  );
};

export default Home;
