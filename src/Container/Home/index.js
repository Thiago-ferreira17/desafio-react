import React, { useState, useRef } from "react";
import axios from "axios";
import {
  Containner,
  H1,
  Image,
  ContainnerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";
import Logo from "../../assets/burger.svg";

const App = () => {
  const [setOrders,setClientOrders] = useState([]);
  const inputOrders = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrders.current.value,
      clientName: inputName.current.value,
    });
    
    setClientOrders([...setOrders, newOrder])

  }

  return (
    <Containner>
      <Image alt="logo-codeclub" src={Logo} />
      <H1>Faça Seu Pedido !!</H1>
      <ContainnerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrders} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <Button to="/pedidos" onClick={addNewOrder}>Novo Pedido</Button>
      </ContainnerItens>
    </Containner>
  );
};

export default App;