import React, { useState } from "react";
import { Div, Actions, ActionsText } from "./styles";
import { Container, Header, Content, H1 } from "../Home/styles";
import DefaultButton from "../../components/DefaultButton";
import Item from "../../components/Item";
import Modal from "../../components/Modal";

let Produtos = JSON.parse(localStorage.getItem("produtos")!);

const Itens: React.FC = () => {
  const [showEdit, setShowEdit] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState({});

  return (
    <Container>
      <Header>
        <H1>Itens Cadastrados</H1>
        <DefaultButton to={"/new"} title={"Cadastrar"} />
        <Actions>
          <Modal
            product={selectedProduct}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          />
        </Actions>
      </Header>
      <Content>
        <Div>
          {Produtos && Produtos.length > 0 ? (
            Produtos.map((p: any) => (
              <Item
                key={p.Codigo}
                product={p}
                onClick={setSelectedProduct}
                setShowEdit={setShowEdit}
              />
            ))
          ) : (
            <ActionsText>Nenhum item cadastrado</ActionsText>
          )}
        </Div>
      </Content>
    </Container>
  );
};

export default Itens;
