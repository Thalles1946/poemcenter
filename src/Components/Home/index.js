import Cards from "./Cards";
import "./index.css";
import { fetchPreviewPoems } from "../../Services/get";
import { useEffect, useState } from "react";

const Home = () => {

  const [data,setData] = useState([])

  useEffect(() => {
    fetchPreviewPoems(setData)
  },[])

  return (
    <div className="home-root">
      {data !== undefined ? data.map((row) => (
        <Cards
          cardTittle={row.cardTittle}
          key={row.id}
          id={row.id}
          idPoemLink={row.idLink}
          cardText={row.cardText}
          likedPoem={row.like}
        />
      )):<></>}
    </div>
  );
};

export default Home;
