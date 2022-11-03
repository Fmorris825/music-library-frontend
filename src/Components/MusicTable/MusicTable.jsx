import { Table, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const MusicTable = ({ songs }) => {
  return (
    <Container>
      <h3>Music Library</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Song ID</th>
            <th>Song Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Release Date</th>
            <th>Genre</th>
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
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default MusicTable;
