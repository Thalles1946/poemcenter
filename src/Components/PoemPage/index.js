import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import data from "./../../db.json";

const PoemPage = () => {
  const [liked, setliked] = useState(false);
  const poemId = getId();
  const poems = data.poemPreview;
  const poem = getPoem(poemId)[0];

  console.log(poem, "poema");

  function iconChecker() {
    if (liked) {
      return faHeartCircleCheck;
    } else {
      return faHeart;
    }
  }

  function like() {
    setliked(!liked);
  }

  function getPoem(id) {
    let poem = poems.filter((poem) => poem.idLink === id);

    return poem;
  }

  function getId() {
    const link = window.location.href;
    console.log(link, "Url");
    const splitLink = link.split("/");
    console.log(splitLink, "array splited");
    return splitLink[4];
  }
  return (
    <div className="divParent">
      <div className="poemPageContainer">
        <div className="pageTitle">
          <h2>{poem.cardTittle}</h2>
          {/* <>
            <Button variant="outline-primary" onClick={() => like()}>
              <FontAwesomeIcon icon={iconChecker()} />
            </Button>
          </> */}
        </div>
        <div className="pagePoem">
          <p className="poemText">{poem.cardText}</p>
        </div>
      </div>
    </div>
  );
};

export default PoemPage;
