import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

const Update = () => {
    const { id } = useParams();
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

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/details/${id}`);
                setPatient(response.data);
            } catch (error) {
                console.error('Error fetching patient update:', error);
            }
        };
        fetch();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatient({ ...patient, [name]: value });
        if (name === 'name') {
            if (value.length < 1 || value.length > 40) {
                setError(error => ({ ...error, name: 'El nombre tiene que tener entre 1 a 40 caracteres' }));
            } else {
                setError(error => ({ ...error, name: '' }));
            }
        } else if (name === 'age') {
            if (isNaN(value) || value < 1 || value > 140) {
                setError(error => ({ ...error, age: 'El año tiene que estar entre 1 a 140' }));
            } else {
                setError(error => ({ ...error, age: '' }));
            }
        } else if (name === 'symptoms') {
            if (value.length < 4) {
                setError(error => ({ ...error, symptoms: 'Los sintomas tiene que tener al menos 4 caracteres' }));
            } else {
                setError(error => ({ ...error, symptoms: '' }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(error).every(error => error === '')) {
            try {
                await axios.put(`http://localhost:5000/edit/${id}`, {
                    name: patient.name,
                    age: patient.age,
                    symptoms: patient.symptoms
                });
                navigate(`/details/${id}`); // Redirigir a la página de detalles después de actualizar
            } catch (error) {
                console.error('Error updating patient:', error);
            }
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
                <h1 className='titulo'>Update {patient.name}</h1>
            </nav>
            <div>
                <form className='contInput' onSubmit={handleSubmit}>
                    <h2>Age</h2>
                    <p className='error'>{error.age}</p>
                    <input type='number' name='age' value={patient.age} onChange={handleChange} />
                    <h2>Name</h2>
                    <p className='error'>{error.name}</p>
                    <input type='text' name='name' value={patient.name} onChange={handleChange} />
                    <h2>Symptoms</h2>
                    <p className='error'>{error.symptoms}</p>
                    <textarea name='symptoms' className='areatext' value={patient.symptoms} onChange={handleChange} />
                    <button type='submit' className='btn'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
