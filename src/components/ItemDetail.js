import React, {useState} from "react";
import toast, { Toaster } from "react-hot-toast";

import "./ItemDetail.scss";

const ItemDetail = ({id, pictureUrl, title, description, price, stock, callBack}) => {
	

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

        </div>
      </section>
    </article>
  );
};

export default ItemDetail;
