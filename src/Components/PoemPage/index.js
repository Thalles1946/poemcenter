import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { fetchPoem } from "../../Services/get";

const PoemPage = () => {
  const [poem, setPoem] = useState({});

  const poemId = getId();

  useEffect(() => {
    fetchPoem({ setPoem, poemId });
  }, []);

  function getId() {
    const link = window.location.href;
    const splitLink = link.split("/");
    return splitLink[4];
  }

  return (
    <div className="divParent">
      <div className="poemPageContainer">
        {poem && (
          <>
            <div className="pageTitle">
              <h2>{poem.title}</h2>
            </div>
            <div className="pagePoem">
              <p className="poemText">{poem.poem}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PoemPage;
