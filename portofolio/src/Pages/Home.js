import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container, Spinner, Badge } from "react-bootstrap";
import "./Pages.css";

function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.cheapshark.com/api/1.0/deals")
      .then((response) => {
        setGames(response.data.slice(0, 30)); // Ambil 30 data pertama
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading...</span>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 header-glow">Game Deals</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {games.map((game) => (
          <Col key={game.dealID}>
            <Card className="shadow-sm game-card">
              <Card.Img
                variant="top"
                src={game.thumb}
                alt={game.title}
                className="game-image"
              />
              <Card.Body>
                <Card.Title className="game-title text-center">
                  {game.title}
                </Card.Title>
                <Card.Text className="text-center">
                  <Badge bg="danger" className="me-2">
                    Save {Math.round(game.savings)}%
                  </Badge>
                  <span className="text-muted text-decoration-line-through">
                    ${game.normalPrice}
                  </span>{" "}
                  <span className="text-success fw-bold">${game.salePrice}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
