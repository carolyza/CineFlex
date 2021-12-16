import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Session from "./Session.js";

export default function Sessions() {
  const { idSessions } = useParams();
  const [Session, setSession] = useState([]);

  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idSessions}/showtimes`
    );

    requisicao.then((res) => {
      setSession(res.data);
    });
  }, []);

return(
<div className="LayoutSessions">  
<header>
        <h1>Selecione o horário</h1>
</header>
<div className="sessions">
  
    {Session.days.map((ses) => <Session 
    id={ses.id}
    date={ses.date}
    weekday={ses.weekday}
    showtimes={ses.showtimes}
/> )}


</div>
<footer>
    <div className="poster">
        <img src={Session.posterURL}></img>
    </div>
    <div className="title">
        <h2>{Session.title}</h2>
    </div>
</footer>
</div>
    
)

}