import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UploadProduct = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const img=event.target.img.value;
    // console.log(name,price,img);
    const url = "http://localhost:5000/uploadPd";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img,
      }),
     
      headers: {
        "authorization": `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        event.target.reset();
      });
  };
  return (
    <div className="container">
      <h1>Upload Product</h1>
      <div className="w-50 mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Product Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="img"
              placeholder="img-url"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UploadProduct;
