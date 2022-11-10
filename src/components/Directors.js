import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      <div>{directorItems}</div>
    </React.Fragment>
  );
}

export default Directors;
