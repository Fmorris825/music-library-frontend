import { useState } from "react";

const SearchBar = ({ filterByCriteria }) => {
  const [searchCriteria, setSearchCriteria] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let searchBox = document.querySelector("#searchCriteria");
    console.log(searchBox.value);
    filterByCriteria(searchBox.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="searchCriteria"
        name="searchCriteria"
        onChange={(event) => setSearchCriteria(event.target.value)}
        value={searchCriteria}
      />
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SearchBar;
