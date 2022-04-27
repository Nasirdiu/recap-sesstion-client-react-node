import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleOrder = (product) => {
    const { name, price } = product;
    //   console.log(product,user.email);
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast(data.success);
      });
  };
  return (
    <div>
      <h1>Product :-{products.length}</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-4" key={product._id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Name:{product.name}</Card.Title>
                <Card.Text>Price:{product.price}</Card.Text>
                <Button onClick={() => handleOrder(product)} variant="primary">
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
