import { useState, useEffect } from "react";

let list = [];
let tickets = [];

export default function Seat({ id, name, isAvailable, setTicket, setFinish }) {
  const [SeatColor, setSeatColor] = useState();

  function checkSeat(check, numberSeat) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] == check) {
        let removed = list.splice(i, 1);
        let remove = tickets.splice(i, 1);
        setSeatColor("");
        return;
      }
    }

    if (list.includes(check) == false) {
      list.push(check);
      tickets.push(numberSeat);

      //   setFinish(list);
      setTicket(tickets);
      setSeatColor("green");
    }
  }

  return (
    <div
      onClick={() =>
        isAvailable
          ? checkSeat(id, name)
          : alert("Esse assento não está disponível")
      }
      className={`seatMovie ${!isAvailable && "yellow"} ${SeatColor}`}
    >
      <h2>{name}</h2>
    </div>
  );
}
