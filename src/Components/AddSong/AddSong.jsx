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

import "bootstrap/dist/css/bootstrap.min.css";

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
    addSong();
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Title</FormLabel>
          <FormControl
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <FormLabel>Artist</FormLabel>
          <FormControl
            type="text"
            onChange={(event) => setArtist(event.target.value)}
            value={artist}
          />
          <FormLabel>Album</FormLabel>
          <FormControl
            type="text"
            onChange={(event) => setAlbum(event.target.value)}
            value={album}
          />
          <FormLabel>Release Date</FormLabel>
          <FormControl
            type="date"
            onChange={(event) => setReleaseDate(event.target.value)}
            value={release_date}
          />
          <FormLabel>Genre</FormLabel>
          <FormControl
            type="text"
            onChange={(event) => setGenre(event.target.value)}
            value={genre}
          />
        </FormGroup>
        <div>
          <Button>Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddSong;
