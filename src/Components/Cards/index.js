import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./index.css";
import banner from "./banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { fetchLike } from "../../Services/set";

const Cards = ({ cardTittle, cardText, idPoemLink, likedPoem, refetch }) => {
  const liked = likedPoem;

  function iconChecker() {
    if (liked) {
      return faHeartCircleCheck;
    } else {
      return faHeart;
    }
  }

  function like() {
    fetchLike(idPoemLink);
    refetch();
  }

  function read() {
    window.location.href = `/poem/${idPoemLink}`;
  }

  return (
    <Card className="Card-body">
      <Card.Img className="image" variant="top" src={banner} />
      <Card.Body>
        <Card.Title className="title-card">{cardTittle}</Card.Title>
        <Card.Text className="description-card">{cardText}</Card.Text>
        <div className="button-group">
          <Button onClick={() => read()} variant="primary">
            Ler
          </Button>
          <Button variant="outline-primary" onClick={() => like()}>
            <FontAwesomeIcon icon={iconChecker()} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
