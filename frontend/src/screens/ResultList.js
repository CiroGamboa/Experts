import React from "react";
import { Container, Row, CardGroup, Card, Button } from "react-bootstrap";

const ResultList = () => {
  const listData = {
    fruits: [
      { title: "Manzana", price: 1400, measure: "libra", photo: "photourl" },
    ],
    vegetables: [
      { title: "Brocoli", price: 1400, measure: "libra", photo: "photourl" },
      {},
      {},
    ],
    dairy: [
      { title: "Queso", price: 1400, measure: "libra", photo: "photourl" },
      {},
      {},
    ],
  };

  const renderCards = (selectedProduct) => {
    var products = listData[selectedProduct];
    var cards = [];
    products.map((item) => {
      var card = (
        <Card>
          <Card.Img variant="top" src={item.photo} width="100" height="200" />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.measure}: ${item.price}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      );

      cards.push(card);
    });

    return cards;
  };
  return (
    <Container>
      <Row>
        <CardGroup>{renderCards("fruits")}</CardGroup>
      </Row>
    </Container>
  );
};

export default ResultList;
