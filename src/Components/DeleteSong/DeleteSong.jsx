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

const DeleteSong = ({ songs, getAllSongs }) => {
  const [id, setId] = useState(0);

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
      <Form onSubmit={handleSubmit}>
        <FormLabel>Delete Song</FormLabel>
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
