/*import { Container, Row, Col } from "react-bootstrap";
import fantasyBooks from "../data/fantasy.json";
import SingleBook from "./SingleBook";

const BookList = function () {
  return (
    <Container>
      <Row className="g-1 my-2">
        {fantasyBooks.map((bookAr, i) => {
          <SingleBook
            img={bookAr[i].img}
            title={bookAr[i].title}
            category={bookAr[i].category}
          />;
        })}
      </Row>
    </Container>
  );
};

export default BookList; */
import React from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Container>
      <Row className="g-1 my-2">
        {books.map((book) => (
          <SingleBook book={book} key={book.asin} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
