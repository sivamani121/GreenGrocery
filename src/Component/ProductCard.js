import { useState } from "react";
import styles from "./ProductCard.module.css";
import orange from "./images/orange.jpg" ;

export function ProductCard() {
    const [quantity,setQuantity]=useState(1);
    
  return (
    <div className={`card ${styles.mycard} `} style={{ padding: "10px" }}>
      <span>
        <img
          src={orange}
          alt="orange"
          className={styles["productimage"]}
        />
      </span>
      <div style={{ textAlign: "left" }}>
        <p className={`text-muted ${styles.para}`}>Fresh</p>
        <h4 className={styles["name"]}>Carrot</h4>
      </div>
      <div className={styles["quantity"]}>
        <input
          type="text"
          value="quantity"
          placeholder="quantity"
          className={styles["quantity"]}
          style={{ width: "100px" }}
          onChange={() => {}}
        />
        <select
          id="dropdown"
          name="dropdown"
          className="dropdown"
          onChange={() => {}}
        >
          <option value="option1">kgs</option>
          <option value="option2">llb</option>
          <option value="option3">ltrs</option>
        </select>
      </div>
      <div style={{ textAlign: "left" }}>
        <span className={styles["price"]}>₹66</span>
        <span
          className={`${styles.actualprice} text-muted text-decoration-line-through`}
        >
          ₹99
        </span>
        <div className={styles["cart-comp"]}>
          <button className={`${styles.cart} btn btn-light`}>
            <svg
              fill="none"
              height="25"
              viewBox="0 0 20 20"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              strokeWidth="1"
            >
              <path
                d="M0.978822 0.356323L0.0209961 0.643671L3.12789 11H14.9999V4.5C14.9999 3.11929 13.8806 2 12.4999 2H1.47192L0.978822 0.356323Z"
                stroke="#fff"
              />
              <path
                clipRule="evenodd"
                d="M5.5 12C4.67157 12 4 12.6716 4 13.5C4 14.3284 4.67157 15 5.5 15C6.32843 15 7 14.3284 7 13.5C7 12.6716 6.32843 12 5.5 12ZM5 13.5C5 13.2239 5.22386 13 5.5 13C5.77614 13 6 13.2239 6 13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5Z"
                stroke="#fff"
              />
              <path
                clipRule="evenodd"
                d="M12.5 12C11.6716 12 11 12.6716 11 13.5C11 14.3284 11.6716 15 12.5 15C13.3284 15 14 14.3284 14 13.5C14 12.6716 13.3284 12 12.5 12ZM12 13.5C12 13.2239 12.2239 13 12.5 13C12.7761 13 13 13.2239 13 13.5C13 13.7761 12.7761 14 12.5 14C12.2239 14 12 13.7761 12 13.5Z"
                stroke="#fff"
              />
            </svg>
            <span style={{ color: "#fff" }}>ADD</span>
          </button>
        </div>
      </div>
    </div>
  );
}
