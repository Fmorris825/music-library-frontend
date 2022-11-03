import React, { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        id="SongData"
        name="SongData"
        onChange={(event) => setId(event.target.value)}
        value={id}
      />
      <input
        type="text"
        id="SongData"
        name="SongData"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <input
        type="text"
        id="SongData"
        name="SongData"
        onChange={(event) => setArtist(event.target.value)}
        value={artist}
      />
      <input
        type="text"
        id="SongData"
        name="SongData"
        onChange={(event) => setAlbum(event.target.value)}
        value={album}
      />
      <input
        type="text"
        id="SongData"
        name="SongData"
        onChange={(event) => setReleaseDate(event.target.value)}
        value={release_date}
      />
      <input
        type="text"
        id="SongData"
        name="SongData"
        onChange={(event) => setGenre(event.target.value)}
        value={genre}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default UpdateSong;
