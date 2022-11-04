import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Container,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "/Users/fredmorris/DevCodeCamp/music-library-frontend/src/App.css";

const DeleteButton = ({ song, getAllSongs }) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(song.id);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    DeleteSong();
    handleClose();
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
    <>
      <Button id="button" variant="primary" onClick={handleShow}>
        Delete
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <h4>Delete Song</h4>
            <Container>
              Are you sure you want to delete {song.title} by {song.artist}{" "}
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
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteButton;
