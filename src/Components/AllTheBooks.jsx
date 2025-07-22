import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="g-1 my-2">
        {fantasyBooks.map((book) => {
          return (
            <Col xs={12} md={6} lg={4} key={book.asin}>
              <Card style={{ height: "30em" }}>
                <Card.Img
                  style={{ height: "20em", objectFit: "contain" }}
                  variant="top"
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Genere: {book.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
