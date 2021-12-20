import "./css/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies.js";
import Sessions from "./Sessions.js";
import Seats from "./Seats.js";
import Ticket from "./Ticket.js";
import { useState } from "react";
import Top from "./Top.js";

export default function App() {
  const [tickets, setTicket] = useState([]);
  const [finish, setFinish] = useState([]);
  const [InputName, setInputName] = useState();
  const [InputCPF, setInputCPF] = useState();
  const [MovieName, setMovieName] = useState();
  const [Date, setDate] = useState();
  const [Hour, setHour] = useState();

  function Post(end) {
    setFinish(end);
  }

  return (
    <BrowserRouter>
      <Top />
      <Routes>
        <Route path="/" element={<Movies />}></Route>
        <Route path="/sessoes/:idSessions" element={<Sessions />}></Route>
        <Route
          path="/assentos/:idSeats"
          element={
            <Seats
              setMovieName={setMovieName}
              setDate={setDate}
              setHour={setHour}
              setTicket={setTicket}
              Post={Post}
              setFinish={setFinish}
              setInputName={setInputCPF}
              setInputCPF={setInputName}
              finish={finish}
              InputCPF={InputCPF}
              InputName={InputName}
            />
          }
        ></Route>
        <Route
          path="/ingresso"
          element={
            <Ticket
              tickets={tickets}
              InputCPF={InputCPF}
              InputName={InputName}
              MovieName={MovieName}
              Date={Date}
              Hour={Hour}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
