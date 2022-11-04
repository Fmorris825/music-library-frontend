import { useState } from "react";
import axios from "axios";

import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  Container,
} from "react-bootstrap";

const AddSong = ({ getAllSongs }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // let newSongForm = document.querySelector("#SongData");
    // console.log(title, artist, album, release_date, genre);
    addSong("");
    setTitle("");
    setArtist("");
    setAlbum("");
    setReleaseDate("");
    setGenre("");
  };

  async function addSong() {
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    let response = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  return (
    <Container id="component">
      <h4>Add Song</h4>
      <Container id="container">
        Fill in the Criteria below for the song you would like to add.
      </Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormGroup>
            <div>
              <FormLabel>Title:</FormLabel>
            </div>

            <div>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <FormLabel>Artist:</FormLabel>
            </div>
            <div>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                onChange={(event) => setArtist(event.target.value)}
                value={artist}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <FormLabel>Album:</FormLabel>
            </div>
            <div>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                onChange={(event) => setAlbum(event.target.value)}
                value={album}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <FormLabel>Release Date:</FormLabel>
            </div>
            <div>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="date"
                onChange={(event) => setReleaseDate(event.target.value)}
                value={release_date}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <FormLabel>Genre:</FormLabel>
            </div>
            <div>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                onChange={(event) => setGenre(event.target.value)}
                value={genre}
              />
            </div>
          </FormGroup>
        </FormGroup>
        <Container>
          <Button id="button" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default AddSong;
