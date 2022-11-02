import axios from "axios";
import { useEffect, useState } from "react";
import "./Components/MusicTable/MusicTable.jsx";
import MusicTable from "./Components/MusicTable/MusicTable.jsx";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  return (
    <div>
      <MusicTable songs={songs} />
      {/* <button onClick={() => getAllSongs()}> Get All Songs</button> */}
    </div>
  );
}

export default App;
