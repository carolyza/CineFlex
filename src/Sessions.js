import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Session from "./Session.js";
import "./css/Sessions.css"

export default function Sessions() {
  const { idSessions } = useParams();
  const [Sessions, setSession] = useState([]);
  const [Teste, setTeste] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idSessions}/showtimes`
    );

    requisicao.then((res) => {
      setSession(res.data)
      setTeste(res.data.days);
    });
  }, []);

  if(Sessions.length === 0){
    return(
      <div className="LayoutSessions">
      <h1>Carregando...</h1>
      </div>
    )
   
  }
 console.log(Sessions.days);
return(
<div className="layoutSessions">  
<header>
        <h1>Selecione o horário</h1>
</header>
<div className="sessions">
  
    {Sessions.days.map((ses) => <Session 
    id={ses.id}
    date={ses.date}
    weekday={ses.weekday}
    showtimes={ses.showtimes}
/> )}


</div>
<footer className="movieInfo">
    <div className="poster">
        <img src={Sessions.posterURL}></img>
    </div>
    <div className="title">
        <h2>{Sessions.title}</h2>
    </div>
</footer>
</div>
    
)

}