import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Details = (props) => {
  const { strMeal, strMealThumb, idMeal, strCategory, strInstructions } =
    props.detail;
  return (
    <Col className="mx-auto">
      <Card className="shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>
            {strMeal} ({idMeal})
          </Card.Title>
          <Card.Text>
            <p className="fw-bold">{strCategory}</p>
            <p>{strInstructions.slice(0, 100)}</p>
          </Card.Text>
          <Button as={Link} to="/" variant="dark">
            Back To Home
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Details;
