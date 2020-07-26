import React from 'react';
import {useState} from 'react';
import './App.css';

let colors = [
  '#9055A2',
  '#D499B9',
  '#E8C1C5',
  '#00A8E8',
  '#007EA7',
  '#78E0DC',
  '#A1CDF1'
];
let max = colors.length;

function handleClick(count,setmsg){
  document.body.style.backgroundColor=colors[Math.floor(Math.random()*max)];
  
  switch (count) {
    case 5:
      setmsg("Hmm, you seem interesing!")
      break;
    case 10:
      setmsg("I think you like smashing!")
      break;
    case 25:
      setmsg("Yo, Seriously?")
      break;
    case 50:
      setmsg("wow! I love your energy!")
      break;
    case 70:
      setmsg("you never give up huh?")
      break;
    case 80:
      setmsg("Let's see where you reach 🤔")
      break;
  
    default:
      break;
  }

}

function App() {
  let [Count, setCount] = useState(0);
  let [msg, setmsg] = useState('Smash the button!');

  return (
    <div className="App">
      <h1>{ Count? Count : "Counter"}</h1>
      <h3 onClick={(e)=>{e.target.innerHTML = "Not here you dumbass 😂😂 <br> Smash the damn button 😁"}} className="sub">{msg}</h3>
      <button onClick={()=>{ setCount(Count+1); handleClick(Count,setmsg); }}>Smash me!</button>
    </div>
  );
}

export default App;
