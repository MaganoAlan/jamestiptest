import React from "react";
import { Link } from "react-router-dom";

import { Card, Cod, Div } from "./styles";

import { Container, Header, Content, Footer, Button, H1 } from "../Home/styles";

let Produtos = JSON.parse(localStorage.getItem("produtos")!);

const Itens: React.FC = () => {
  return (
    <Container>
      <Header>
        <H1>Itens Cadastrados</H1>
        <Button>
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            to="/"
          >
            VOLTAR
          </Link>
        </Button>
      </Header>
      <Content>
        <Div>
          <Cod>
            <p>Código</p>
            {Produtos &&
              Produtos.map((p: any) => <Card key={p.Codigo}>{p.Codigo}</Card>)}
          </Cod>
          <Cod>
            <p>Categoria</p>
            {Produtos &&
              Produtos.map((p: any) => (
                <Card key={p.Codigo}>{p.Categoria}</Card>
              ))}
          </Cod>
          <Cod>
            <p>Nome</p>
            {Produtos &&
              Produtos.map((p: any) => <Card key={p.Codigo}>{p.Nome}</Card>)}
          </Cod>
          <Cod>
            <p>Fornecedor</p>
            {Produtos &&
              Produtos.map((p: any) => (
                <Card key={p.Codigo}>{p.Fornecedor}</Card>
              ))}
          </Cod>
          <Cod>
            <p>Valor</p>
            {Produtos &&
              Produtos.map((p: any) => <Card key={p.Codigo}>{p.Valor}</Card>)}
          </Cod>
        </Div>
      </Content>
      <Footer>Desenvolvido por Alan Magano</Footer>
    </Container>
  );
};

export default Itens;
