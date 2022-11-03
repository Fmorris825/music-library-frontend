import { Table, Container, Button, Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import EditButton from "../EditButton/EditButton";

const SearchTable = ({ songs, getAllSongs, result }) => {
  return (
    <Container>
      <h3>Search Results</h3>
      <Table striped hover>
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
          {result.map((song) => {
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
                      getAllSongs={getAllSongs}
                      song={song}
                    />
                    <Button>Delete </Button>
                  </Container>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default SearchTable;
