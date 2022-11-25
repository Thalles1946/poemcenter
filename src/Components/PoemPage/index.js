import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const PoemPage = () => {
  const [liked, setliked] = useState(false);

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

  function getId() {
    const link = window.location.href;
    console.log(link, "Url");
    const splitLink = link.split("/");
    console.log(splitLink, "array splited");
    return splitLink[4];
  }
  const poemId = getId();
  return (
    <div className="divParent">
      <div className="poemPageContainer">
        <div className="pageTitle">
          <h2>Titulo Aqui</h2>
          <>
            <Button variant="outline-primary" onClick={() => like()}>
              <FontAwesomeIcon icon={iconChecker()} />
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

export default PoemPage;
