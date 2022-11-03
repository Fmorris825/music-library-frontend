import axios from "axios";
import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        id="SongData"
        name="SongData"
        onChange={(event) => setId(event.target.value)}
        value={id}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default DeleteSong;
