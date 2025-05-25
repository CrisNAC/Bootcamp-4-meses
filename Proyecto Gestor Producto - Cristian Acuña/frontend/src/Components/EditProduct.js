import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Style.css';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    const [error, setError] = useState({
        name: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/getProduct/${id}`);
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        if (name === 'name') {
            if (value.length < 1 || value.length > 40) {
                setError(error => ({ ...error, name: 'El nombre debe tener al menos un caracter' }));
            } else {
                setError(error => ({ ...error, name: '' }));
            }
        } else if (name === 'price') {
            if (isNaN(value) || value <= 0) {
                setError(error => ({ ...error, price: 'El precio debe ser un número mayor que cero' }));
            } else {
                setError(error => ({ ...error, price: '' }));
            }
        }
    };

    const handleSubmit = async () => {
        if (Object.values(error).every(error => error === '')) {
            
            try {
                await axios.put(`http://localhost:5000/editProduct/${id}`, {
                    name: product.name,
                    price: product.price,
                    description: product.description
                });
                navigate("/products");
            } catch (error) {
                console.error('Error updating product:', error);
            }
        }
    };

    return (
        <div className='prin'>
            <nav className='nav'>
                <Link to='/products'>
                    <button className='btn'>
                        Productos
                    </button>
                </Link>
                <h1 className='titulo'>Actualizar Producto: {product.name}</h1>
            </nav>
            <div>
                <div className='contInput'>
                    <h2>Nombre</h2>
                    <p className='error'>{error.name}</p>
                    <input type='text' name='name' value={product.name} onChange={handleChange} />
                    <h2>Precio</h2>
                    <p className='error'>{error.price}</p>
                    <input type='number' name='price' value={product.price} onChange={handleChange} />
                    <h2>Descripción</h2>
                    <textarea name='description' className='areatext' value={product.description} onChange={handleChange} />
                    <button onClick={handleSubmit} className='btn'>Actualizar</button>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
