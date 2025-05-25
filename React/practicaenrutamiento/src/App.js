import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router-dom';

const Home = () => <h1>Bienvenida</h1>;

const Contenido = () =>{
  const {content} = useParams();
  if(isNaN(content)){
    return <h1>La palabra es: {content}</h1>;
  }else{
    return <h1>El numero es: {content}</h1>
  }
}

const WordColor = ()=> {
  const {word, color1, color2} = useParams();
  return(
    <h1 style={{color: color1, background:color2}}>La palabra es: {word}</h1>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/:content' element={<Contenido></Contenido>}></Route>
        <Route path='/:word/:color1/:color2' element={<WordColor></WordColor>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
