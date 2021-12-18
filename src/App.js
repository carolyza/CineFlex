import "./css/reset.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Movies from"./Movies.js";
import Sessions from "./Sessions.js";
import Seats from "./Seats.js";
import Ticket from "./Ticket.js";
import { useState } from "react";
import Top from "./Top.js";




export default function App(){

    return(
<BrowserRouter>
<Top/>
<Routes>
    <Route path="/" element={<Movies/>}></Route>
    <Route path="/sessoes/:idSessions" element={<Sessions/>}>
    </Route>
    <Route path="/assentos/:idSeats" element={<Seats/>}></Route>
    <Route path="/ingresso" element={<Ticket/>}></Route>
</Routes>

</BrowserRouter>
    )
}