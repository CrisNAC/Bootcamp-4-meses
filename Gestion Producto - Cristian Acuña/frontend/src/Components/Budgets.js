import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

const Budgets = () => {
    const [budgets, setBudgets] = useState([]);
    

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const response = await axios.get("http://localhost:5000/getAllBudget");
                setBudgets(response.data);
            } catch (error) {
                console.error('Error fetching budgets:', error);
            }
        };
        fetchBudgets();
    }, []);

    const handleDeleteBudget = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/deleteBudget/${id}`);
            setBudgets(budgets.filter(budget => budget._id !== id));
        } catch (error) {
            console.error('Error deleting budget:', error);
        }
    };

    const handlePrintBudget = async (clientName, budgetProducts, totalAmount) => {
        try {
            await axios.get('http://localhost:5000/invoice', {
                params: {
                    clientName: clientName,
                    budgetProducts: budgetProducts, // Cambiado de 'products' a 'budgetProducts'
                    totalAmount: totalAmount
                }
            });
        } catch (error) {
            console.error('Error al crear el pdf:', error);
        }
    };


    return (
        <div className='prin'>
            <nav className='nav'>
                <h1>Presupuestos</h1>
                <Link to='/budget'>
                    <button className='btn'>Agregar Presupuesto</button>
                </Link>
            </nav>
            <div className='listBudgets'>
                {budgets.map((budget) => (
                    <div className='dataBudget' key={budget._id}>
                        <h2>{budget.clientName}</h2>
                        <p>Total a Pagar: {budget.totalPrice}</p>
                        <div className='buttons'>
                            <Link to={`/editBudget/${budget._id}`}>
                                <button className='btn'>Editar</button>
                            </Link>
                            <button className='btn' onClick={() => handlePrintBudget(budget.clientName, budget.products, budget.totalPrice)}>Descargar en PDF</button>
                            <button className='btn' onClick={() => handleDeleteBudget(budget._id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Link to='/createProduct'>
                    <button className='btn'>Agregar Producto</button>
                </Link>
                <Link to='/products'>
                    <button className='btn'>Ver Todos los Productos</button>
                </Link>
            </div>
        </div>
    );
};

export default Budgets;
