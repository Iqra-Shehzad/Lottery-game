import Lottery from "./Lottery.jsx";
import {sum} from "./helper.js";
import "./App.css"

function App() {
  let winCondition = (ticket)=>{
    return sum(ticket)=== 15
  }
  
  return (
    <div>
      <h1>Lottery Game</h1>
      {/* <Ticket ticket={[5,6,0]}/> */}
      < Lottery n={3} winCondition= {winCondition}/>
    </div>
  )
}

export default App;
