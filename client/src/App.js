import "./App.css";
import { FullComp, LoginForm, RegForm } from "./Component/LoginForm";
// import { useState } from "react";
import { ProductCard } from "./Component/ProductCard";
import React, { useState, useEffect } from "react";
import ProductList from "./Component/ProductList";
import { CartItem } from "./Component/CartItems";

function App() {
  const [LoginUser, setLoginUser] = useState();
  const [cart, setCart] = useState([]);
  const item = [
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
    {
      price: 66,
      originalprice: 99,
      unitsList: ["kgs", "mg"],
      name: "Orange",
      tag: "Fresh",
      quantityList: { kgs: [1, 2, 5, 10], mg: [250, 500, 750] },
    },
  ];
  return (
    <div className="App">
      <ProductList setCart={setCart} Products={item} cart={cart}/>
      {/* <CartItem item={item[0]} Unitss={"mg"} quantityy={250} key={1}></CartItem> */}
    </div>
  );
}

export default App;
