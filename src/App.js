import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const nayoks = ['Benzir','Moiuno','Aziz','Hairs','Joseph'];
  const person = [{name:'Shakib', age:'35', money:'3.5cr'},
     {name:'Tamim',age:'34', money:'4cr'}
]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
      nayoks.map(nayok => <Nayok name={nayok}></Nayok>)
      }
      {
        person.map(star =><Nayok name={star.name} age={star.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+1);

  return(
    <div>
      <button onClick={handleClick}>Add Movie </button>
      <h3>Numbers of Movies:{count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  );
};
function MovieDisplay(props){
  return(
    <div>
      <h1>number of Movies that I have acted :{props.movies}</h1>
    </div>
  )
}
function Nayok(props){
  //console.lonpg(props);
  const nayokStyle={
    border:'1px solid purple',
    margin:'10px'
  }
  return(
    <div style={nayokStyle}>
      <h1>{props.name}</h1>
      <h4>{props.age || 30}</h4>
      <h2>WE all Are Sheikh Hasinas Man </h2>
      <h3>Dhaka Mafiya</h3>
    </div>
  )
}
export default App;
