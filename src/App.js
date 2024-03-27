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
  const [users, setOrders] = useState([]);
  const inputOrders = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post("http://localhost:3000/order", {
      order: inputOrders.current.value,
      clientName: inputName.current.value,
    });
    console.log(newOrder);
    setOrders((prevOrders) => {
      if (!Array.isArray(prevOrders)) {
        return [newOrder];
      }
      return [...prevOrders, newOrder];
    });
  }

  useEffect(() => {
    async function fetchOrders() {
      const { data: newClients } = await axios.get(
        "http://localhost:3000/order"
      );
      setOrders(newClients);
    }
    fetchOrders();
  }, []);

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
          {users.length > 0 &&
            users.map((order) => (
              <Order key={order.id}>
                <p>{order.order}</p>{" "}
                {/* Corrigido para exibir o texto do pedido */}
                <ClientName>{order.clientName}</ClientName>{" "}
                {/* Corrigido para exibir o nome do cliente */}
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
