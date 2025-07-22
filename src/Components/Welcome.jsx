import Alert from "react-bootstrap/Alert";

const Welcome = function () {
  return (
    <Alert variant="success" className="m-0">
      <Alert.Heading className="text-center">Welcome</Alert.Heading>
      <p className="text-center">
        Benvenuto nel nostro sito di card di libri ;)
      </p>
      <hr />
    </Alert>
  );
};

export default Welcome;
