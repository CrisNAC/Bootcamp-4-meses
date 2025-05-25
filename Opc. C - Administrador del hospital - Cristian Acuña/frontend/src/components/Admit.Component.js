import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

const Admit = () => {
    const navigate = useNavigate();

    const [patient, setPatient] = useState({
        name: '',
        age: '',
        symptoms: ''
    });

    const [error, setError] = useState({
        name: '',
        age: '',
        symptoms: ''
    });

    const changeName = (e) => {
        const name = e.target.value;
        if (name.length < 1 || name.length > 40) {
            setError(error => ({ ...error, name: 'El nombre debe tener entre 1 y 40 caracteres' }));
        } else {
            setError(error => ({ ...error, name: '' }));
            setPatient({ ...patient, name: name });
        }
    };

    const changeAge = (e) => {
        const age = e.target.value;
        if (isNaN(age) || age < 1 || age > 140) {
            setError(error => ({ ...error, age: 'La edad debe estar entre 1 y 140' }));
        } else {
            setError(error => ({ ...error, age: '' }));
            setPatient({ ...patient, age: age });
        }
    };

    const changeSym = (e) => {
        const symptoms = e.target.value;
        if (symptoms.length < 4) {
            setError(error => ({ ...error, symptoms: 'Los síntomas deben tener al menos 4 caracteres' }));
        } else {
            setError(error => ({ ...error, symptoms: '' }));
            setPatient({ ...patient, symptoms: symptoms });
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/', {
                name: patient.name,
                age: patient.age,
                symptoms: patient.symptoms
            });
            console.log(response.data);
            navigate("/patients");
        } catch (error) {
            console.error('Error al enviar el paciente:', error);
        }
    };

    return (
        <div className='prin'>
            <nav className='nav'>
                <Link to='/patients'>
                    <button className='btn'>
                        Home
                    </button>
                </Link>
                <h1 className='titulo'>Admitir Paciente</h1>
            </nav>
            <div>
                <form className='contInput' onSubmit={submit}>
                    <h2>Edad</h2>
                    <p className='error'>{error.age}</p>
                    <input type='number' onChange={changeAge}></input>
                    <h2>Nombre</h2>
                    <p className='error'>{error.name}</p>
                    <input type='text' onChange={changeName}></input>
                    <h2>Síntomas</h2>
                    <p className='error'>{error.symptoms}</p>
                    <textarea className='areatext' onChange={changeSym}></textarea>
                    <button type='submit' className='btn'>Admitir</button>
                </form>
            </div>
        </div>
    );
};

export default Admit;
