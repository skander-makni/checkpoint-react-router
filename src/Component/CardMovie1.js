import React from "react";
import { Card, Button } from "react-bootstrap";

const CardMovie = ({ location, history }) => {
  console.log(location);

  const card = location.state;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={card.posterUrl} width="260" height="260" />
        <Card.Body>
          <Card.Title> {card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <iframe
            width="853"
            height="480"
            src={card.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Button onClick={() => history.goBack()}>GoBack</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardMovie;
