import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Page/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Page/Header/Header";
import Product from "./Page/Product/Product";
import UploadProduct from "./Page/UploadProduct/UploadProduct";
import Order from "./Page/Order/Order";
import Login from "./Page/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/uploadpd"
          element={
            <PrivateRoute>
              <UploadProduct></UploadProduct>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/order"
          element={
            <PrivateRoute>
              <Order></Order>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
