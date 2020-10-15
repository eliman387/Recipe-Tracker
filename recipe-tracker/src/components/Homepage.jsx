import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";

function Homepage(props) {
  return (
    <Container id="hp-gid">
      <Row>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={props.recipe.fields.image} />
          <Card.Body>
            <Card.Title>{props.recipe.fields.title}</Card.Title>
            <Card.Text>Check out this delicious meal.</Card.Text>
            <Button variant="primary" href="/recipes/:type">
              View the Dish!
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default Homepage;
