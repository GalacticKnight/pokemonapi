import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listState, setListState] = useState([])
  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res=>{
      console.log(res);
      setListState(res.data.results )})
    .catch(err=>console.log("error"))
  },[])
  return (
    <div className="App">
      {
        listState.map(( item, index ) =>( 
          <li>
            {item.name}

          </li>
        ))
      }
    </div>
  );
}

export default App;
