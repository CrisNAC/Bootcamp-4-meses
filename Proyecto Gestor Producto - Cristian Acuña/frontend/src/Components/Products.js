import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getAllProducts');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/deleteProduct/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className='prin'>
            <nav className='nav'>
                <h1>Lista de Productos</h1>
                <Link to='/createProduct'>
                    <button className='btn'>Crear Producto</button>
                </Link>
                <Link to='/'>
                    <button className='btn'>Presupuestos</button>
                </Link>
            </nav>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/editProduct/${product._id}`}>
                                    <button className='btn'>Editar</button>
                                </Link>
                                <button onClick={() => handleDelete(product._id)} className='btn'>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductsList;
