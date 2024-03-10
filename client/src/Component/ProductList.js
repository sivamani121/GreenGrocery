import { ProductCard } from "./ProductCard";

export default function ProductList({ cart, setCart, Products }) {
  return (
    <div style={{'margin':'10px','padding':'10px','width':'95vw'}}>
      {Products.map((item, id) => {
        // console.log(item);
        return (<ProductCard cart={cart} setCart={setCart} item={item} id={id} key={id}/>);
      })}
    </div>
  );
}
