import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { H1 } from "../../Components/Title/styles";
import { Button } from "../../Components/Buttons/styles";
import {
  Containner,  
  Image,
  ContainnerItens,
  InputLabel,
  Input,
} from "./styles";
import Logo from "../../assets/burger.svg";

const App = () => {
  const [setOrders, setClientOrders] = useState([]);
  const history = useHistory();
  const inputOrders = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrders.current.value,
      clientName: inputName.current.value,
    });

    setClientOrders([...setOrders, newOrder]);

    history.push("/pedidos");
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

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainnerItens>
    </Containner>
  );
};

export default App;
