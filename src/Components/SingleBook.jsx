import { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
/*
class SingleBook extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={4}>
        <Card style={{ height: "30em" }}>
          <Card.Img
            style={{ height: "20em", objectFit: "contain" }}
            variant="top"
            src={this.props.img}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>Genere: {this.props.category}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook; */

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Col xs={12} md={6} lg={4}>
        <Card
          style={{ height: "30em" }}
          /*onClick={
            this.state.selected === false
              ? this.setState({ selected: true })
              : this.setState({ selected: false })
          }*/
        >
          <Card.Img
            style={{ height: "20em", objectFit: "contain" }}
            src={book.img}
            alt={book.title}
          />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
