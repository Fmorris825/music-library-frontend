import axios from "axios";
import { useEffect, useState } from "react";

import MusicTable from "./Components/MusicTable/MusicTable.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import AddSong from "./Components/AddSong/AddSong.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";

import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  let [result, setResult] = useState([]);
  // const [searchCriteria, setSearchCriteria] = useState("");

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  async function filterByCriteria(criteria) {
    result = songs.filter((song) => {
      return (
        song.title === criteria ||
        song.artist === criteria ||
        song.album === criteria ||
        song.release_date === criteria ||
        song.genre === criteria
      );
    });
    setSongs(result);
  }

  return (
    <div>
      <NavBar />
      <Container className="d-flex justify-content-between Body">
        <Container>
          <SearchBar
            filterByCriteria={filterByCriteria}
            getAllSongs={getAllSongs}
          />
          <AddSong getAllSongs={getAllSongs} />
          {/* <UpdateSong songs={songs} getAllSongs={getAllSongs} /> */}
          {/* <DeleteSong songs={songs} getAllSongs={getAllSongs} /> */}
        </Container>
        <Container>
          {/* <SearchTable songs={songs} getAllSongs={getAllSongs} result={result} /> */}
          <MusicTable songs={songs} getAllSongs={getAllSongs} />
        </Container>
        {/* <button onClick={() => getAllSongs()}> Get All Songs</button> */}
      </Container>
    </div>
  );
}

export default App;
