import Cards from "../../Components/Cards";
import "./index.css";
import { fetchPreviewPoems } from "../../Services/get";
import { useEffect, useState } from "react";

const Home = ({ data, refetch }) => {
  return (
    <div className="home-root">
      {data !== undefined ? (
        data.map((row) => (
          <Cards
            cardTittle={row.cardTittle}
            key={row.id}
            id={row.id}
            idPoemLink={row.idLink}
            refetch={() => refetch()}
            cardText={row.cardText}
            likedPoem={row.like}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
