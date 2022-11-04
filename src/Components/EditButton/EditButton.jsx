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

const EditButton = ({ song, getAllSongs }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [id, setId] = useState(song.id);
  const [title, setTitle] = useState(song.title);
  const [artist, setArtist] = useState(song.artist);
  const [album, setAlbum] = useState(song.album);
  const [release_date, setReleaseDate] = useState(song.release_date);
  const [genre, setGenre] = useState(song.genre);

  const handleSubmit = (event) => {
    event.preventDefault();
    UpdateSong();
    handleClose();
    getAllSongs();
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
    if (response.status === 200) {
      await getAllSongs();
    }
  }

  return (
    <>
      <Button id="button" variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header id="bgc" closeButton>
          <Modal.Title>
            <h4>Update Song</h4>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body id="bgc">
          <Form onSubmit={handleSubmit}>
            <Container>
              <FormLabel>Title:</FormLabel>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
              />
              <FormLabel>Artist:</FormLabel>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setArtist(event.target.value)}
                value={artist}
              />
              <FormLabel>Album:</FormLabel>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setAlbum(event.target.value)}
                value={album}
              />
              <FormLabel>Release Date</FormLabel>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setReleaseDate(event.target.value)}
                value={release_date}
              />
              <FormLabel>Genre</FormLabel>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="text"
                id="SongData"
                name="SongData"
                onChange={(event) => setGenre(event.target.value)}
                value={genre}
              />
              <Container>
                <Button id="button" type="submit">
                  Submit
                </Button>
              </Container>
            </Container>
          </Form>
        </Modal.Body>

        <Modal.Footer id="bgc">
          <Button id="close_button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditButton;
