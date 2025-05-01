import "./App.css";
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import { Container, Card } from "react-bootstrap";
import React from "react";

import product from "./product";

function App() {
  const firstName = "Tlili Zohra";
  return (
    <Container>
      <Card style={{ width: "18rem", margin: "auto", marginTop: "20px" }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
        </Card.Body>
      </Card>
      <p className="greeting">
        {firstName ? `Hello, ${firstName}` : "Hello, there!"}
      </p>

      {firstName && (
        <img
          className="profile-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCVkSqyY_J8UE__kICij6G8W0do4hg4qw7w&s"
          alt="Your image"
        />
      )}
    </Container>
  );
}

export default App;
