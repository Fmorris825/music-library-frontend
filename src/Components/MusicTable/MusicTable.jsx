import { Table, Container, Button, Modal } from "react-bootstrap";

import "./MusicTable.css";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";

const MusicTable = ({ songs, getAllSongs }) => {
  return (
    <Container>
      <h3>Music Library</h3>
      <Table>
        <thead>
          <tr>
            <th>ID:</th>
            <th>Song Title:</th>
            <th>Artist:</th>
            <th>Album:</th>
            <th>Release Date:</th>
            <th>Genre:</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => {
            return (
              <tr>
                <td>{song.id}</td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>
                  <Container className="d-inline-flex p-2">
                    <EditButton
                      songs={songs}
                      song={song}
                      getAllSongs={getAllSongs}
                    />
                    <DeleteButton song={song} getAllSongs={getAllSongs} />
                  </Container>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* <Button onClick={getAllSongs}>Refresh Table</Button> */}
    </Container>
  );
};

export default MusicTable;
