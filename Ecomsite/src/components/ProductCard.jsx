import React from "react";
import style from "../style/productcard.module.css";

function ProductCard({ product }) {
  return (
    <div className={style.product}>
      ProductCard
      {product.map((user) => (
        <div className={style.card}>
            <img src={user.image} alt={user.catagory} />
          <p>{user.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
