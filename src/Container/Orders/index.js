import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button } from "../../Components/Buttons/styles";
import {
  Containner,
  Image,
  ContainnerItens,
  Order,
  ClientName,
} from "./styles";
import Package from "../../assets/package.svg";
import Trash from "../../assets/trash.svg";
import { H1 } from "../../Components/Title/styles";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrders(newOrders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);

    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Containner>
      <Image alt="logo-codeclub" src={Package} />
      <H1> Pedidos </H1>
      <ContainnerItens>
        <ul>
          {orders.length > 0 &&
            orders.map((order) => (
              <Order key={order.id}>
                <p>{order.order}</p> <ClientName>{order.clientName}</ClientName>{" "}
                <button onClick={() => deleteOrder(order.id)}>
                  <img src={Trash} alt="trash-can" />
                </button>
              </Order>
            ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainnerItens>
    </Containner>
  );
};

export default Orders;
