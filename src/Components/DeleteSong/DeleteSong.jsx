import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Container,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const DeleteSong = ({ song, getAllSongs }) => {
  const [id, setId] = useState(song.song.id);

  const handleSubmit = (event) => {
    event.preventDefault();
    DeleteSong();
  };

  async function DeleteSong() {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/music/${id}/`
    );
    if (response.status === 204) {
      await getAllSongs();
    }
  }

  return (
    <Container>
      <h4>Delete Song</h4>
      <Container>
        Are you sure you want to delete {song.song.title} by {song.song.artist}{" "}
        delete.
      </Container>
      <Form onSubmit={handleSubmit}>
        <FormControl
          type="number"
          id="SongData"
          name="SongData"
          onChange={(event) => setId(event.target.value)}
          value={id}
        />
        <div>
          <Button>Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default DeleteSong;
