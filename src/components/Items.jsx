import React, { useEffect, useState } from "react";
import { dummyProducts } from "./dummyData";
import styles from "./Items.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Items() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(res => setData(res))
    .catch((err)=>{
      console.log("Error while fetching api", err)
    })
  }, []);

  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <div key={item.id} className={styles.card}>
          <img src={item.image} alt={item.title} />
          <div className={styles["card-body"]}>
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
            <p className={styles.price}>${item.price}</p>
            <button onClick={()=> dispatch(addToCart(item))}>Buy now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Items;
