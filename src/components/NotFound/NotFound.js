import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Row } from "react-bootstrap";

const NotFound = () => {
  const history = useHistory();

  const clickhandler = () => {
    history.push("/");
  };
  return (
    <div className="text-center">
      <Row xs={1} md={3} className="g-0">
        <Card className="mx-auto text-danger">
          <Card.Header>Error alert!!!</Card.Header>
          <Card.Body>
            <Card.Title>404</Card.Title>
            <Card.Text>Opp!! Page Not Fond</Card.Text>
            <Button onClick={clickhandler} variant="danger">
              Back To Home
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default NotFound;
