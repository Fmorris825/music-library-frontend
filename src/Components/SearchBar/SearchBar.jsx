import { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

const SearchBar = ({ filterByCriteria, getAllSongs }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let searchBox = document.querySelector("#searchCriteria");
    filterByCriteria(searchBox.value);
  };

  return (
    <Container>
      <h4>Song Search</h4>
      <Container id="container">
        Enter the Title, Artist, album, Release Date, or Genre of song, to look
        it up.
      </Container>
      <form onSubmit={handleSubmit}>
        <FormControl
          className="shadow p-2 mb-2 bg-body rounded"
          type="text"
          id="searchCriteria"
          name="searchCriteria"
          onChange={(event) => setSearchCriteria(event.target.value)}
          value={searchCriteria}
        />
        <Container>
          <Button id="button" type="submit">
            Submit
          </Button>
          <Button id="button" onClick={getAllSongs}>
            Search Again
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default SearchBar;
