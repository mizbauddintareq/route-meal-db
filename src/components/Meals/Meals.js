import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meals = (props) => {
  const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
  return (
    <Col>
      <Card className="shadow-sm mb-4 p-2 bg-body rounded">
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions.slice(0, 100)}</Card.Text>
          <Button as={Link} to={`/meal/${idMeal}`} variant="dark">
            See More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Meals;
