import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Seat from "./Seat.js";
import "./css/Seats.css";
import Ticket from "./Ticket.js";

export default function Seats({
  setTicket,
  setInputCPF,
  setInputName,
  setFinish,
  finish,
  InputName,
  InputCPF,
  Post,
  setMovieName,
  setDate,
  setHour,
}) {
  const [Seats, setSeats] = useState([]);
  const { idSeats } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSeats}/seats`
    );

    promisse.then((res) => {
      setSeats(res.data);
    });
  }, []);

  if (Seats.length === 0) {
    return (
      <div className="LayoutSessions">
        <h1>Carregando...</h1>
      </div>
    );
  }

  function SaveInfos(navigate) {
    setDate(Seats.day.date);
    setHour(Seats.name);
    setMovieName(Seats.movie.title);

    console.log(Seats.day.date);

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
      { finish, InputName, InputCPF }
    );
    promise.then(() => {
      console.log(finish);
      // setFinish(finish)
      setInputName(InputName);
      setInputCPF(InputCPF);
    });

    navigate("/ingresso");
  }

  return (
    <div className="layoutSeats">
      <header>
        <h1>Selecione o(s) assento(s)</h1>
      </header>
      <div className="seats">
        {Seats.seats.map((sea) => (
          <Seat
            id={sea.id}
            name={sea.name}
            isAvailable={sea.isAvailable}
            setTicket={setTicket}
          />
        ))}
      </div>
      <div className="caption">
        <div className="selected">
          <p> </p>
          <h3>Selecionado</h3>
        </div>
        <div className="available">
          <p> </p>
          <h3>Disponível</h3>
        </div>
        <div className="unavailable">
          <p> </p>
          <h3>Indisponível</h3>
        </div>
      </div>
      <div className="buyerInfo">
        <h2>Nome do comprador:</h2>
        <input
          onChange={(event) => setInputName(event.target.value)}
          placeholder="Digite seu nome..."
        ></input>
        <h2>CPF do comprador:</h2>
        <input
          onChange={(event) => setInputCPF(event.target.value)}
          placeholder="Digite seu CPF..."
        ></input>
      </div>
      {/* <Link to={`/ingresso`}> */}
      <button onClick={() => SaveInfos(navigate)}> Reservar assento(s)</button>
      {/* </Link> */}
      <footer className="movieInfo">
        <div className="poster">
          <img src={Seats.movie.posterURL}></img>
        </div>
        <div className="title">
          <h2>{Seats.movie.title}</h2>
          <h2>
            {Seats.day.date} - {Seats.name}
          </h2>
        </div>
      </footer>
    </div>
  );
}
