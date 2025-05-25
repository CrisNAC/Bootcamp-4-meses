import React, {useState} from "react";
import './lista.css'

const Lista = () =>{
    const [lista, setLista]=useState([
        { id: 1, texto: 'Hacer la compra', completado: false }
    ]);
    const [newLista, setNewLista]=useState('');

    const completado = (id) =>{
        setLista(lista.map(list=>{
            if(list.id===id) return {...list, completado: !list.completado};
            return list;
        }));
    };

    const eliminar = (id) =>{
        setLista(lista.filter(list=>list.id!==id));
    };

    const agregar =()=>{
        if(newLista !== ""){
            const list = {id: lista.length+1, texto: newLista, completado: false};
            setLista([...lista, list]);
            setNewLista("");
        }
    };

    return (
        <div className="principal">
            <h1>Lista de Tareas</h1>
            <div className="inputBox">
                <input className="input" type="text" placeholder="Agregar aqui su tarea" value={newLista} onChange={(e) => setNewLista(e.target.value)}></input>
                <button className="agregar" onClick={agregar}>Agregar tarea</button>
            </div>
            <ul className="lista">
                {lista.map(list => (
                    <li className="listaContenido" key={list.id} style={{textDecoration: list.completado ? 'line-through':'none'}}>
                        {list.texto}
                        <input className="tarea" type="checkbox" checked={list.completado} onChange={()=>completado(list.id)}></input>
                        <button className="eliminar" onClick={()=>eliminar(list.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lista;