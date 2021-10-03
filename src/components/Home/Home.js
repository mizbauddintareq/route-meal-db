import React, { useEffect, useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Meals from "../Meals/Meals";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);
  const handleSearchField = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Mermaid Cafe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/delivery">
                Delivery
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                onChange={handleSearchField}
                type="search"
                placeholder="Search Meals"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid mt-2">
        <Row xs={1} md={2} lg={4} className="g-4">
          {meals?.map((meal) => (
            <Meals key={meal.idMeal} meal={meal}></Meals>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
