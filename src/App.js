import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import CardList from "./Components/CardList";
import { produits } from "./Products";

function App() {
  
  const [products,setProducts] = useState(produits);
  const [favorites,setFavorites] = useState([]);
  const changeFavorite = (id) => {
    if(favorites.includes(id)){ //le produit est deja dans le tableau : enlever le prod du  tableau
      const otherId = favorites.filter(idProd=>idProd !== id)
      setFavorites(otherId);
    }else{ //le prioduit n'est pas dans le tableau : ajouter le produit
      setFavorites([...favorites,id]);
    }
  }

  const handlePurchase = (idProd,qte=1) =>{
    //Deminuer le stock de 1
    setProducts(prevProduts =>
      prevProduts.map(p =>
        p.id === idProd ? {...p,stock:p.stock-qte} : p
      )
    );
  }
  return (
    <>
      <CardList>
        {products.map((prod) => (
          <Card 
            onPurchase={handlePurchase}
            handleFavorite={()=>changeFavorite(prod.id)}
            favorite={favorites.includes(prod.id)}
            product={prod} 
            key={prod.id} />
        ))}
      </CardList>
    </>
  );
}

export default App;
