import logo from "./logo.svg";
import "./App.css";
import { FullComp, LoginForm, RegForm } from "./Component/LoginForm";
import { useState } from "react";
import { ProductCard } from "./Component/ProductCard";

function App() {
  const [LoginUser, setLoginUser] = useState();
  return (
    <div className="App">
      <ProductCard />
    </div>
  );
}

export default App;
