import Cards from "./Cards";
import "./index.css";

const Home = () => {
  const poemsPreview = [
    {
      id: 0,
      cardTittle: "teste 1",
      cardText:
        " Primeiro poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 1,
      cardTittle: "teste 2",
      cardText:
        " Segundo poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 2,
      cardTittle: "teste 3",
      cardText:
        " Terceiro poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 3,
      cardTittle: "teste 4",
      cardText:
        " Quarto poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 4,
      cardTittle: "teste 5",
      cardText:
        " Quinto poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 5,
      cardTittle: "teste 6",
      cardText:
        " Sexto poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 6,
      cardTittle: "teste 7",
      cardText:
        " Setimo poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 7,
      cardTittle: "teste 8",
      cardText:
        " Oitavo poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
    {
      id: 8,
      cardTittle: "teste 9",
      cardText:
        " Nono poema: Aliqua dolore commodo ut cupidatat. Mollit ea sit mollit non ut ipsum. Anim irure proident aliqua voluptate ullamco.",
    },
  ];

  return (
    <div className="home-root">
      {poemsPreview.map((row) => (
        <Cards
          cardTittle={row.cardTittle}
          key={row.id}
          cardText={row.cardText}
        />
      ))}
    </div>
  );
};

export default Home;
