import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Homepage(props) {
  return (

          <Card
          bg="primary"
          text="light"
          style={{ width: "20rem" }}>
          <Card.Img variant="top" src={props.recipe.fields.image} />
          <Card.Body>
            <Card.Title>{props.recipe.fields.title}</Card.Title>
            <Card.Text>{`Check out this delicious ${props.recipe.fields.type} meal.`}</Card.Text>
            <Button variant="light">
              <Link to={`/recipes/descrip/${props.recipe.id}`}>View the Dish!</Link>
            </Button>
          </Card.Body>
        </Card>
    
  );
}

export default Homepage;
