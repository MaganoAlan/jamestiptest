import React from "react";

import { Container, Header, Content, Footer, Button, H1 } from "./styles";
import { Link } from "react-router-dom";
import ProdCard from "../../Components/ProdCard";

const Home: React.FC = () => {
  function HandleClick() {
    // window.location.reload();
  }

  return (
    <Container>
      <Header>
        <H1>Cadastrar Produto</H1>
        <Button onClick={HandleClick}>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/Itens">
            CONSULTAR ITENS
          </Link>
        </Button>
      </Header>
      <Content>
        <ProdCard />
      </Content>
      <Footer>Desenvolvido por Alan Magano</Footer>
    </Container>
  );
};

export default Home;
