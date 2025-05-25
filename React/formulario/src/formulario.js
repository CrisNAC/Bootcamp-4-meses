import React from "react";
import './formulario.css'

const Formulario = ({input, setInput}) =>{
    const cambio = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="prin">    
            <form>
                <div className="boxInput">
                    <label className="titulo">First Name</label>
                    <input className="entrada" type="text" name="firstName" onChange={cambio}></input>
                </div>
                <div className="boxInput">
                    <label className="titulo">Last Name</label>
                    <input className="entrada" type="text" name="lastName" onChange={cambio}></input>
                </div>
                <div className="boxInput">
                    <label className="titulo">Email</label>
                    <input className="entrada" type="text" name="email" onChange={cambio}></input>
                </div>
                <div className="boxInput">
                    <label className="titulo">Password</label>
                    <input className="entrada" type="password" name="password" onChange={cambio}></input>
                </div>
                <div className="boxInput">
                    <label className="titulo">Confirm password</label>
                    <input className="entrada" type="password" name="confirm" onChange={cambio}></input>
                </div>
            </form>
        </div>
    );
}

export default Formulario;