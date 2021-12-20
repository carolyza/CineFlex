import Seats from "./Seats.js";
import { Link } from "react-router-dom";
import axios from "axios";
import Seat from "./Seat.js";
import "./css/Ticket.css";
import { useParams, useNavigate } from "react-router-dom";

export default function Ticket({
  Hour,
  Date,
  MovieName,
  InputName,
  InputCPF,
  tickets,
}) {
  let navigate = useNavigate();

  function Home(navigate) {
    navigate("/");
  }

  return (
    <div className="finalPage">
      <h1>Pedido feito com sucesso!</h1>

      <div className="ticketInfo">
        <section>
          <h2>Filme e sessão</h2>
          <p>{MovieName}</p>

          <p>
            {Date} {Hour}
          </p>
        </section>
        <section>
          <h2>Ingressos</h2>

          {tickets.map((seat) => (
            <p>Assento {seat}</p>
          ))}
        </section>
        <section>
          <h2>Comprador</h2>
          <p>Nome: {InputCPF}</p>
          <p>CPF: {InputName}</p>
        </section>
      </div>
      <div className="final">
        <button onClick={() => Home(navigate)} className="returnHome">
          Voltar pra Home
        </button>
      </div>
    </div>
  );
}
