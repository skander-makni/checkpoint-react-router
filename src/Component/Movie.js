import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Rater from "./Rating";
import { Link } from "react-router-dom";

const Movie = ({ cardMovie }) => {
  console.log(cardMovie);
  return (
    <div>
      {/* <Link
        to={{
          pathname: "test",
          state: cardMovie,
        }}
      > */}
      <Card
        style={{
          width: "18rem",
          backgroundColor: "black",
          border: "#11ffee00",
          borderRadius: "5%",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <Card.Img
          variant="top"
          src={cardMovie.posterUrl}
          width="260"
          height="260"
        />
        <Card.Body>
          <Link
            to={{
              pathname: `/movie/${cardMovie.title}`,
              state: cardMovie,
            }}
          >
            <Card.Title> {cardMovie.title}</Card.Title>
          </Link>
          <Card.Text>{cardMovie.description}</Card.Text>
          <Rater rating={cardMovie.rating} />
        </Card.Body>
      </Card>
      {/* </Link> */}
    </div>
  );
};

export default Movie;
