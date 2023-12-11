import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./index.css";
import { fetchPreviewPoems } from "../../Services/get";

const PoemPage = ({ data, refetch }) => {
  const poemId = getId();
  const dataPoem = getPoem(poemId);
  const poem = dataPoem;

  function getPoem(id) {
    let poem = data.find((poem) => poem.idLink === id);
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
        {poem && (
          <>
            <div className="pageTitle">
              <h2>{poem.cardTittle}</h2>
            </div>
            <div className="pagePoem">
              <p className="poemText">{poem.cardText}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PoemPage;
