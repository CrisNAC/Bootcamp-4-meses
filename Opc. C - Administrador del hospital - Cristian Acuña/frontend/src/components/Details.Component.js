import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Style.css'

const Details = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState({
        name: '',
        age: '',
        symptoms: ''
    });

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/details/${id}`);
                console.log(response.data);
                setPatient(response.data);
            } catch (error) {
                console.error('Error fetching patient details:', error);
            }
        };
        fetch();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/${id}`);
        } catch (error) {
            console.error('Error deleting patient:', error);
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
                <h1>{patient.name} Details</h1>
                <Link to={`/edit/${id}`}>
                    <button className='btn'>
                        Update
                    </button>
                </Link>
            </nav>
            <div className='details'>
                <h2>{patient.age} years of age</h2>
                <h2>Symptoms {patient.symptoms}</h2>
                <Link to={'/patients'}>
                    <button onClick={handleDelete} className='btn'>Delete Patient</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;
