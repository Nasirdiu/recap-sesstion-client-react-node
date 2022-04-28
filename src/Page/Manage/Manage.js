import React, { useEffect, useState } from "react";

const Manage = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      const url = `http://localhost:5000/product`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         const remaining = orderList.filter((product) => product._id !== id);
         setOrderList(remaining);
        });
    }
  };
  return (
    <div>
      <h1>Manage:-{orderList.length}</h1>
      {orderList.map((order) => (
        <div key={order._id}>
          <h5>
            {order.name}
            <button onClick={() => handleDelete(order._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Manage;
