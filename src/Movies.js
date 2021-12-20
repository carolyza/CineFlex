import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./css/Movies.css";

export default function Movies() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      "https://mock-api.driven.com.br/api/v4/cineflex/movies"
    );

    promisse.then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <div className="LayoutMovies">
      <header>
        <h1>Selecione o filme</h1>
      </header>
      <div className="movies">
        {Movies.map((mov) => (
          <div className="movie" key={mov.id}>
            <Link to={`/sessoes/${mov.id}`}>
              <img src={mov.posterURL}></img>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
