import { useState } from "react";
import axios from "axios";

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
    <form onSubmit={handleSubmit}>
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

export default AddSong;
