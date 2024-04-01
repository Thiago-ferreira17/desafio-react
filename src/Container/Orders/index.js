import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Containner,
  H1,
  Image,
  ContainnerItens,
  Button,
  Order,
  ClientName,
} from "./styles";
import Package from "../../assets/package.svg";
import Trash from "../../assets/trash.svg";

const Orders = () => {
  const [users, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const { data: newClients } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrders(newClients);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(userId) {
    await axios.delete(`http://localhost:3001/order/${userId}`);

    const newOrders = users.filter((order) => order.id !== userId);
    setOrders(newOrders);
  }

  return (
    <Containner>
      <Image alt="logo-codeclub" src={Package} />
      <H1> Pedidos </H1>
      <ContainnerItens>
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
        <Button to="/">Voltar</Button>
      </ContainnerItens>
    </Containner>
  );
};

export default Orders;
