import axios from "axios";
import { useEffect, useState } from "react";

import MusicTable from "./Components/MusicTable/MusicTable.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import AddSong from "./Components/AddSong/AddSong.jsx";
import UpdateSong from "./Components/UpdateSong/UpdateSong.jsx";
import DeleteSong from "./Components/DeleteSong/DeleteSong.jsx";
import { Container } from "react-bootstrap";

function App() {
  const [songs, setSongs] = useState([]);
  // const [searchCriteria, setSearchCriteria] = useState("");

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  function filterByCriteria(criteria) {
    let result = songs.filter((song) => {
      return (
        song.title === criteria ||
        song.artist === criteria ||
        song.album === criteria ||
        song.release_date === criteria ||
        song.genre === criteria
      );
    });
    console.log(result);
  }

  return (
    <Container>
      <MusicTable songs={songs} />
      <SearchBar filterByCriteria={filterByCriteria} />
      <AddSong getAllSongs={getAllSongs} />
      <UpdateSong songs={songs} getAllSongs={getAllSongs} />
      <DeleteSong songs={songs} getAllSongs={getAllSongs} />
      {/* <button onClick={() => getAllSongs()}> Get All Songs</button> */}
    </Container>
  );
}

export default App;
