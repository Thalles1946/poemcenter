import Cards from "./Cards";
import "./index.css";
import data from "./../../db.json";

const Home = () => {
  console.log(data, "json");
  const poemsPreview = data.poemPreview;

  return (
    <div className="home-root">
      {poemsPreview.map((row) => (
        <Cards
          cardTittle={row.cardTittle}
          key={row.id}
          id={row.id}
          idPoemLink={row.idLink}
          cardText={row.cardText}
        />
      ))}
    </div>
  );
};

export default Home;
