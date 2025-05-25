import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css'

const Patients = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/patients/");
                setPatients(response.data);
            } catch (error) {
                console.log('Error:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className='prin'>
            <nav className='nav'>
                <Link to='/patients'>
                    <button className='btn'>Home</button>
                </Link>
                <h1>Hospital Manager</h1>
                <Link to='/'>
                    <button className='btn'>Admit</button>
                </Link>
            </nav>
            <div className='listPatients'>
                {patients.map((patient) => (
                    <div className='dataPatient' key={patient._id}>
                        <Link to={`/details/${patient._id}`}>{patient.name}</Link>
                        <Link to={`/edit/${patient._id}`}>
                            <button className='btn'>edit</button>
                        </Link>
                        <p>Age: {patient.age}</p>
                        <p>{patient.symptoms}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Patients;
