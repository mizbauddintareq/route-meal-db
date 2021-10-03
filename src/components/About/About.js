import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div className="text-center">
      <h1>Details Comming Soon</h1>
      <Button as={Link} to="/" variant="dark">
        Back To Home
      </Button>
    </div>
  );
};

export default About;
