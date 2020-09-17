import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner">
      <div className="banner__contents">
        {/* <<< background image */}
        {/* Title */}
        {/* div > 2 buttons */}
        {/* description */}
      </div>
    </header>
  );
}

export default Banner;