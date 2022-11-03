import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
} from "react-bootstrap";

const UpdateSong = ({ songs, getAllSongs }) => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateSong();
  };

  async function UpdateSong() {
    let updateSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    let response = await axios.put(
      `http://127.0.0.1:8000/api/music/${id}/`,
      updateSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  return (
    <Container>
      <h4>Update Song</h4>
      <Container></Container>
      <Form onSubmit={handleSubmit}>
        <FormLabel>Song ID</FormLabel>
        <FormControl
          type="number"
          id="SongData"
          name="SongData"
          onChange={(event) => setId(event.target.value)}
          value={id}
        />
        <FormLabel>Title</FormLabel>
        <FormControl
          placeholder={title}
          type="text"
          id="SongData"
          name="SongData"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <FormLabel>Artist</FormLabel>
        <FormControl
          placeholder={artist}
          type="text"
          id="SongData"
          name="SongData"
          onChange={(event) => setArtist(event.target.value)}
          value={artist}
        />
        <FormLabel>Album</FormLabel>
        <FormControl
          placeholder={album}
          type="text"
          id="SongData"
          name="SongData"
          onChange={(event) => setAlbum(event.target.value)}
          value={album}
        />
        <FormLabel>Release Date</FormLabel>
        <FormControl
          placeholder={release_date}
          type="text"
          id="SongData"
          name="SongData"
          onChange={(event) => setReleaseDate(event.target.value)}
          value={release_date}
        />
        <FormLabel>Genre</FormLabel>
        <FormControl
          placeholder={genre}
          type="text"
          id="SongData"
          name="SongData"
          onChange={(event) => setGenre(event.target.value)}
          value={genre}
        />
        <Container>
          <Button>Submit</Button>
        </Container>
      </Form>
    </Container>
  );
};

export default UpdateSong;
