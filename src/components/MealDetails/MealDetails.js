import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router";
import Details from "../Details/Details";

const MealDetails = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState([]);
  //   const { strMeal } = meal;
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [idMeal]);

  return (
    <div className="container-fluid my-2">
      <Row xs={1} md={1} lg={3} className="g-4">
        {meal.map((details) => (
          <Details key={details.idMeal} detail={details}></Details>
        ))}
      </Row>
    </div>
  );
};

export default MealDetails;
