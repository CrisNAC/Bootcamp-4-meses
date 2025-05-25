import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

const url = 'https://swapi.dev/api/';

const Home = () =>{
  const [resource,setResource]=useState("");
  const [id,setId] = useState("");
  const [data,setData] = useState(null);
  const [error,setError] = useState(false);

  const btnSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.get(`${url}${resource}/${id}/`)
      setData(response.data);
      console.log(data);
      setError(false);
    }catch (error){
      console.log(error);
      setData("");
      setError(true);
    }
  }
  
  return (
    <div className='principal'>
        <form onSubmit={btnSubmit}>
          <label className='opc1'>
            Buscar por:
            <select className='input1' value={resource} onChange={(e)=>setResource(e.target.value)}>
              <option>people</option>
              <option>films</option>
              <option>starships</option>
              <option>vehicles</option>
              <option>species</option>
              <option>planets</option>
            </select>
          </label>
          <label className='opc2'>
            Id:
            <input type='number' className='input2' value={id} onChange={(e)=>setId(e.target.value)}></input>
            <button type='submit' className='btnSubmit'>Submit</button>
          </label>
        </form>

        <div className='response'>
          {error && <div> 
            Error: Estos no son los droides que está buscando
            <img src="https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg" alt='imagen de "Obi-Wan Kenobi"'></img>
            </div>
          }
          { data && <div className='dataResult'>
            <h1>{data.name}</h1>
            <p>Altura: {data.height}</p>
            <p>Color de cabello: {data.hair_color}</p>
            <p>Color de ojos: {data.eye_color}</p>
            <p>Año de nacimiento: {data.birth_year}</p>
          </div>
          }
        </div>
    </div>
  );
};


const People = () =>{
  const {id} = useParams();
  const [world, setWorld] = useState("");

  useEffect(() =>{
    const worldFuncion = async ()=>{
      try{
        const response = await axios.get(`${url}people/${id}`);
        const worldURL = response.data.homeworld;
        const wordlResponse = await axios.get(worldURL);
        setWorld(wordlResponse.data.name);
      }catch(error){
        console.log(error);
      }
    };
    worldFuncion();
  },[id]);

  return(
    <div>
      <p>Mundo: {world}</p>
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:id" element={<People></People>}></Route>
          <Route path="/people/:id" element={<People></People>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
