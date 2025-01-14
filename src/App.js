import "./App.css";
import Card from "./Components/Card";
import CardList from "./Components/CardList";
import { produits } from "./Products";

function App() {
  return (
    <>
      <CardList>
        {produits.map((prod) => (
          <Card
            title={prod.title}
            price={prod.price}
            stock={prod.stock}
            image={prod.image}
            spec={prod.specifications}
          />
        ))}
      </CardList>
    </>
  );
}

export default App;
