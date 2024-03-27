import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Containner,
  H1,
  Image,
  ContainnerItens,
  InputLabel,
  Input,
  Button,
  Order,
  ClientName,
} from "./styles";
import Logo from "./assets/burger.svg";
import Trash from "./assets/trash.svg";

const App = () => {
  //const users = [];

  const [users, setOrders] = useState([]);
  const inputOrders = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputOrders.current.value,
      clientName: inputName.current.value,
    });
    console.log(newOrder);
    setOrders([...users, newOrder]);
  }

  useEffect(() => {
    async function fetchOrders() {
      const { data: newClients } = await axios.get(
        "http://localhost:3001/order"
      );

      setOrders(newClients);
    }
    fetchOrders();
  }, [users]);

  function deleteOrder(userId) {
    const newOrders = users.filter((order) => order.id !== userId);

    setOrders(newOrders);
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

        <ul>
          {users.map((order) => (
            <Order key={order.id}>
              <p>{order.orders}</p>
              <ClientName>{order.name}</ClientName>
              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="trash-can" />
              </button>
            </Order>
          ))}
        </ul>
      </ContainnerItens>
    </Containner>
  );
};

export default App;
