import React from 'react';
import './resultado.css'

const Resultado = (props) =>{
    const {firstName, lastName, email, password, confirm} = props.data;

    return (
        <div className='prinOutput'>
            <h2>Your From Data</h2>
            <div className="boxOutput">
                    <label className="titOutput">First Name: {firstName}</label>
                    <label className="titOutput">Last Name: {lastName}</label>
                    <label className="titOutput">Email: {email}</label>
                    <label className="titOutput">Password: {password}</label>
                    <label className="titOutput">Confirm password: {confirm}</label>
            </div>
        </div>
    );
}

export default Resultado;