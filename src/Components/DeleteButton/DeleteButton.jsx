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
import "./DeleteButton.css";

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
        <Modal.Header id="bgc" closeButton>
          <Modal.Title>
            <h4>Delete Song</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="bgc">
          <Container id="container">
            <Container id="container">
              Are you sure you want to delete {song.title} by {song.artist}{" "}
              delete.
            </Container>
            <Form onSubmit={handleSubmit}>
              <FormControl
                className="shadow-sm p-1 mb-1 bg-body rounded"
                type="number"
                id="SongData"
                name="SongData"
                onChange={(event) => setId(event.target.value)}
                value={id}
              />
              <div>
                <Button id="button" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
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

export default DeleteButton;
