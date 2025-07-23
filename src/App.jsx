import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import AllTheBooks from "./Components/AllTheBooks";
import SingleBook from "./Components/SingleBook";
import BookList from "./Components/BookList";
import fantasyBooks from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      {/*<SingleBook
        img={fantasyBooks[0].img}
        title={fantasyBooks[0].title}
        category={fantasyBooks[0].category}
      />
      <BookList />*/}
      <BookList books={fantasyBooks} />
      <MyFooter />
    </>
  );
}

export default App;
