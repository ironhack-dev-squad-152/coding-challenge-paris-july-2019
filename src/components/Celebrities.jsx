import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [selectedCelebrityId, setSelectedCelebrityId] = useState(null);
  const [search, setSearch] = useState("");
  // useEffect only triggered after the 1st render
  useEffect(() => {
    for (let page = 1; page <= 100; page++) {
      axios
        .get(
          "https://api.themoviedb.org/3/person/popular?api_key=ac8d871bc92c64c3486c06e7c6f7224b&page=" +
            page
        )
        .then(response => {
          // setCelebrities([...celebrities, ...response.data.results]); // NOT WORKING because celebrities, during the 1st function call, is always []
          setCelebrities(lastCelebrities => [...lastCelebrities, ...response.data.results]); // lastCelebrities is the current state in the component
        });
    }
  }, []);

  function getImageUrl(celebrity) {
    return "https://image.tmdb.org/t/p/w185" + celebrity.profile_path;
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  let selectedCelebrity = celebrities.find(c => c.id === selectedCelebrityId);
  let filteredCelebrities = celebrities.filter(c =>
    c.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <div>
      <h1>Celebrities</h1>
      <input type="text" value={search} onChange={handleSearchChange} />
      <div className="row">
        <div>
          <h4>{filteredCelebrities.length} celebrities</h4>
          <table>
            <tbody>
              {filteredCelebrities.map(c => (
                <tr key={c.id} onClick={() => setSelectedCelebrityId(c.id)}>
                  <td>
                    <img
                      className="celebrity-img"
                      src={getImageUrl(c)}
                      alt=""
                    />
                  </td>
                  <td
                    className={
                      selectedCelebrityId === c.id ? "active-name" : ""
                    }
                  >
                    {c.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedCelebrity && (
          <div>
            <img src={getImageUrl(selectedCelebrity)} alt="" />
            <h2>{selectedCelebrity.name}</h2>
            <h4>Known for</h4>
            {selectedCelebrity.known_for.map(movie => (
              <div key={movie.id}>
                {movie.title} <br />
                <img
                  src={"https://image.tmdb.org/t/p/w185" + movie.backdrop_path}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
