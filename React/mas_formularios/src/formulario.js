import React, { useState } from "react";
import './formulario.css'

const Formulario = ()=>{
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
    });

    const [error, setError]= useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmError: ""
    });

    const cambio = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        });

        if (value.length < 1) {
            setError(prevState => ({ ...prevState, [name + "Error"]: "Field is required!" }));
        } else if (value.length < 3) {
            setError(prevState => ({ ...prevState, [name + "Error"]: "Field must be 3 characters or longer!" }));
        } else {
            setError(prevState => ({ ...prevState, [name + "Error"]: "" }));
        }
    };
    return (
        <div className="prin">    
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className="boxInput">
                    <label className="titulo">First Name</label>
                    <input className="entrada" type="text" name="firstName" onChange={cambio}></input>
                </div>
                    {
                        error ?
                        <p style={{color:'red'}}>{ error.firstNameError }</p> :
                        ''
                    }
                <div className="boxInput">
                    <label className="titulo">Last Name</label>
                    <input className="entrada" type="text" name="lastName" onChange={cambio}></input>
                </div>
                {
                    error ?
                    <p style={{color:'red'}}>{ error.lastNameError }</p> :
                    ''
                }
                <div className="boxInput">
                    <label className="titulo">Email</label>
                    <input className="entrada" type="text" name="email" onChange={cambio}></input>
                </div>
                {
                    error ?
                    <p style={{color:'red'}}>{ error.emailError }</p> :
                    ''
                }
                <div className="boxInput">
                    <label className="titulo">Password</label>
                    <input className="entrada" type="password" name="password" onChange={cambio}></input>
                </div>
                {
                    error ?
                    <p style={{color:'red'}}>{ error.passwordError }</p> :
                    ''
                }
                <div className="boxInput">
                    <label className="titulo">Confirm password</label>
                    <input className="entrada" type="password" name="confirm" onChange={cambio}></input>
                </div>
                {
                    error ?
                    <p style={{color:'red'}}>{ error.confirmError }</p> :
                    ''
                }
            </form>
        </div>
    );
}

export default Formulario;