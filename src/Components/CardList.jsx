import "./CardList.css";

const CardList = ({ children }) => {
  return (
    <>
      <h1>Liste des produits</h1>
      <div className="card-list">{children}</div>
    </>
  );
};

export default CardList;
