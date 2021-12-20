import { useState, useEffect } from "react";

let list = [];

export default function Seat({id,name,isAvailable}){
   
    const [SeatColor, setSeatColor]= useState();

    function checkSeat(check){
        for(let i=0;i<list.length;i++){
          if(list[i]==check){
            let removed = list.splice(i,1);
            setSeatColor("");
             return;
            
          }
        }

        if (list.includes(check)==false){

        list.push(check);
        setSeatColor("green");
        console.log(list)
        }}

    return(
        <div onClick={() => 
             isAvailable
             ? checkSeat(id)
            : alert("Esse assento não está disponível")
          } className={`seatMovie ${!isAvailable && ("yellow")} ${SeatColor}` } >
            <h2>{name}</h2>
        </div>
    )

}

