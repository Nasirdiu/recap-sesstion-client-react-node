import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [user, loading, error] = useAuthState(auth);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/orderList`;
    fetch(url, {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, [user.email]);

  return (
    <div>
      <h2>Total Orders : {orderList.length}</h2>
      <ol>
        {orderList.map((order) => (
          <div>
            <li>{order.name}</li>
            <img src={order.img} width="100px" alt="" />
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Order;
