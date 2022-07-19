import React, { useEffect, useState } from "react";
import "./style.scss";
import SearchResults from "./Components/SearchResults";

const API_KEY = "7gscCgrqXEXF66n83ZAYVz1ZXgkihMTO";
const SEARCH_URL = "https://api.giphy.com/v1/gifs/search";

export const App = (props) => {
  const { title } = props;
  const [gifs, setGifs] = useState([]);

  // fetch(`${SEARCH URL}?api_key=${API KEY}&q=${"nyancat"}&limit=50`)

  const fetchGifs = (str) => {
    fetch(`${SEARCH_URL}?api_key=${API_KEY}&q=${str}&limit=50`)
      .then((res) => res.json())
      .then((results) => setGifs(results.data));
  };

  const keyDownHandler = (event) => {
    if (event.keyCode === 13) {
      fetchGifs(event.target.value);
    }
  };

  useEffect(() => {
    fetchGifs();
  }, []);

  if (!gifs.length) return null;

  return (
    <div className="app">
      <header>{title}</header>
      <main>
        {/* <img src={gifs[4].images.original.url}></img> */}
        <h1>Search Giphy</h1>
        <input onKeyDown={keyDownHandler}></input>
        <SearchResults data={gifs} />
      </main>
    </div>
  );
};

export default App;
