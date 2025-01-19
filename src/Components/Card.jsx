import { FaHeart } from "react-icons/fa6";
import "../App.css";
import { useState } from "react";

function Card({product,handleFavorite,favorite,onPurchase}) {
  const { title, price, image, specifications, stock } = product;
  
  const [show,setShow] = useState(false);


  return (
    <div className="item">
      <div onClick={handleFavorite} className="favorite">
        { 
          favorite 
          ? <FaHeart className="heart red" /> 
          : <FaHeart className="heart" /> 
        }
      </div>
      <div className="infos">
        <div className="titre">
          <h2>{title}</h2>
        </div>
        <div className="img">
          <img src={`./assets/${image}`} alt="iphone" />
        </div>
        <div className="spec">
          <h3>Specification: </h3>
          <div className="btn">
            <button onClick={()=>setShow(!show)}>
              {!show ? "Show" : "Hide"}
            </button>
          </div>
        </div>
        {show && <p>{specifications}</p> }
        {
          stock > 0 
          ? <p className="stock"> En Stock: <strong>{stock}</strong></p>
          : <p className="rupture">Produit en rupture de stock</p>
        }
        <p className="price">$ {price}</p>
        {
        stock > 0 && 
        <div className="btns">
          <button onClick={()=>onPurchase(product.id)}>buy</button>
          {stock > 1 && <button onClick={()=>onPurchase(product.id,2)}>buy 2</button>}
        </div>
        }
      </div>
    </div>
  );
}

export default Card;
