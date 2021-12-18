import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Seat from "./Seat.js";
import "./css/Seats.css";

export default function Seats() {
    const [Seats, setSeats] = useState([]);
    const { idSeats } = useParams();
    const [SeatColor, setSeatColor] = useState();
  
    useEffect(() => {
      const promisse = axios.get(
        `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSeats}/seats`
      );
  
      promisse.then((res) => {
        setSeats(res.data);
      });
    }, []);

 if(Seats.length === 0){
            return(
              <div className="LayoutSessions">
              <h1>Carregando...</h1>
              </div>
            )
           
          }

    return(
       
        <div className="layoutSeats">  
        <header>
                <h1>Selecione o(s) assento(s)</h1>
        </header>
        <div className="seats">
          
            {Seats.seats.map((sea) => <Seat 
            id={sea.id}
            name={sea.name}
            isAvailable={sea.isAvailable}
            
        /> )}</div>
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
<input placeholder="Digite seu nome..."></input>
<h2>CPF do comprador:</h2>
<input placeholder="Digite seu CPF..."></input>
        </div>

        <button> Reservar assento(s)</button>

        <footer className="movieInfo">
            <div className="poster">
                <img src={Seats.movie.posterURL}></img>
            </div>
            <div className="title">
                <h2>{Seats.movie.title}</h2>
                <h2>{Seats.day.date} - {Seats.name}</h2>
            </div>
        </footer>
        </div>
            
        
    )

}