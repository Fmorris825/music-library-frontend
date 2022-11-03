import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const EditButton = (song, songs, getAllSongs) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState(song.song.id);
  const [title, setTitle] = useState(song.song.title);
  const [artist, setArtist] = useState(song.song.artist);
  const [album, setAlbum] = useState(song.song.album);
  const [release_date, setReleaseDate] = useState(song.song.release_date);
  const [genre, setGenre] = useState(song.song.genre);

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateSong();
    handleClose();
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
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container>
            <Form onSubmit={handleSubmit}>
              <h4>Update Song</h4>
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
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
              <FormLabel>Artist</FormLabel>
              <FormControl
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setArtist(event.target.value)}
                value={artist}
              />
              <FormLabel>Album</FormLabel>
              <FormControl
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setAlbum(event.target.value)}
                value={album}
              />
              <FormLabel>Release Date</FormLabel>
              <FormControl
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setReleaseDate(event.target.value)}
                value={release_date}
              />
              <FormLabel>Genre</FormLabel>
              <FormControl
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setGenre(event.target.value)}
                value={genre}
              />
            </Form>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Container>
            <Button onClick={handleSubmit}>Submit</Button>
          </Container>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditButton;
