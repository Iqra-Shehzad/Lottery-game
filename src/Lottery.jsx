import {useState} from "react";
import {genTicket , sum} from "./helper.js";
import Ticket from "./Ticket.jsx";

export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket]= useState(genTicket(n));
    let isWinning= winCondition(ticket);

    let buyTicket= ()=>{
        setTicket(genTicket(n));
    }

    return (
    <>
        <Ticket ticket={ticket}/>
        <button onClick= {buyTicket}>Generate Ticket</button>
        <h3 style= {{color:"green"}}>{isWinning && "Congratulations you won!"}</h3>
    </>
    );
}