import { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = ({ setSongs, getAllSongs, songs }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = songs.filter((song) => {
      return (
        song.title.includes(searchCriteria) ||
        song.artist.includes(searchCriteria) ||
        song.album.includes(searchCriteria) ||
        song.release_date.includes(searchCriteria) ||
        song.genre.includes(searchCriteria)
      );
    });
    setSongs(result);
  };

  const handleClear = () => {
    setSearchCriteria("");
    getAllSongs();
  };

  return (
    <Container id="component">
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
        <Container id="search_buttons">
          <Button id="button" type="submit">
            Submit
          </Button>
          <Button id="button" onClick={handleClear}>
            Search Again
          </Button>
        </Container>
      </form>
    </Container>
  );
};

export default SearchBar;
