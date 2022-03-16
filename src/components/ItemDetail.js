import React, {useState} from "react";
import toast, { Toaster } from "react-hot-toast";
import ItemCount from "./ItemCount";

import "./ItemDetail.scss";

const ItemDetail = ({id, pictureUrl, title, description, price, stock, setCartItems, cartItems}) => {
	
	const notify = (value) => {
		toast.success(value>1?"Productos agregados al carrito.":"Producto agregado al carrito.")
		setCartItems(cartItems+value)
		setItemStock(itemStock-value)
	};
	
	const [itemStock, setItemStock] = useState(stock)

  return (
    <article className="itemDetailBox">
      <div className="itemDetailBox__frame">
        <img src={"/pictures/" + pictureUrl} />
      </div>

      <section className="info">
        <div className="info__title">
          <h2>{title}</h2>
          <div className="info__title--overflow">
            <p>{description}</p>
          </div>
        </div>

        <div className="info__price">
          <div className="info__price__stock">
            <h4>${price}</h4>
            {itemStock ? (
              <span className="info__price-stock">
                STOCK DISPONIBLE: <b>{itemStock}</b>
              </span>
            ) : (
              <span className="info__price-nostock">SIN STOCK</span>
            )}
          </div>
					{<ItemCount stock={itemStock} initial={1} onAdd={notify} cartItems={cartItems} />}
        </div>
      </section>
    </article>
  );
};

export default ItemDetail;
