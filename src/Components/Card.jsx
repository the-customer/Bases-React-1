import { FaHeart } from "react-icons/fa6";
import "../App.css";

function Card({ title, price, image, spec, stock }) {
  return (
    <div className="item">
      <div className="favorite">
        <FaHeart className="heart" />
      </div>
      <div className="infos">
        <div className="titre">
          <h1>{title}</h1>
        </div>
        <div className="img">
          <img src={`./assets/${image}`} alt="iphone" />
        </div>
        <div className="spec">
          <h3>Specification: </h3>

          <div className="btn">
            <button>show</button>
          </div>
        </div>
        <p>{spec}</p>
        <p className="stock">
          En Stock: <strong>{stock}</strong>
        </p>
        <p className="price">$ {price}</p>
        <div className="btns">
          <button>buy</button>
          <button>buy 2</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
