import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import "./Pages.css";

function Stores() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/stores")
      .then((response) => {
        setStores(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center stores-container">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading...</span>
      </Container>
    );
  }

  return (
    <Container className="mt-5 stores-container">
      <h2 className="text-center mb-4 text-primary">List of Stores</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {stores.map((store) => (
          <Col key={store.storeID}>
            <Card className="store-card shadow-sm">
              <Card.Img
                variant="top"
                src={`https://www.cheapshark.com${store.images.logo}`}
                alt={store.storeName}
                className="store-logo"
              />
              <Card.Body>
                <Card.Title className="text-center text-primary">
                  {store.storeName}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Stores;
