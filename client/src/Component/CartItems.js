import orange from "./images/orange.jpg";
import styles from "./CartItem.module.css";
import { useEffect, useState } from "react";
function CartItem({ item, quantityy, Unitss }) {
  console.log()
  const { id, price, quantityList, unitsList, name } = item;
  const [Units, setUnits] = useState(Unitss);
  const quantites = quantityList[Units];
  const [quantity, setQuantity] = useState(quantityy);
  const map = { kgs: 1, lts: 1, mg: 0.001, ml: 0.001 };
  // console.log(price, map[Units], quantity, quantites);
  // console.log(Units);
  console.log(Units,map[Units],Unitss);
  const cost = Math.ceil(price * map[Units] * quantity);
  // const originalcost = Math.ceil(originalprice * map[Units] * quantity);
  useEffect(
    function () {
      setQuantity(quantites[0]);
    },
    [Units]
  );
  return (
    <div className={`${styles.card}`}>
      <img src={orange} alt={name} className={`${styles.image}`} />
      <div className={` ${styles.labels}`}>
        <span className={`${styles.label}`}>{`Name:${name}`}</span>
        <span
          className={`${styles.label}`}
        >{`quantity: ${quantity} ${Units}`}</span>
       
        <span>quantity:</span>
        
        <div className={styles["quantity"]}>
          <select
            id={`dropdown1${id}`}
            name="dropdown1"
            className="dropdown"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {quantites.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            id={`dropdown${id}`}
            name="dropdown"
            className="dropdown"
            value={Units}
            onChange={(e) => {
              console.log(e.target.value);
              setUnits(e.target.value);
            }}
          >
            {unitsList.map((option) => (
              
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <span className={`${styles.label}`} style={{marginLeft:'auto'}}>{`Price: ₹${cost}`}</span>
      </div>
    </div>
  );
}


 export default function CartItems({CartId}){
  
  return <>

  </>
}