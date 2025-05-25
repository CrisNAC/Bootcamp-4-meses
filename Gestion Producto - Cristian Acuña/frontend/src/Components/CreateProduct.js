import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

const CreateProduct = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: ''
    });

    const [error, setError] = useState('');

    const changeName = (e) => {
        const name = e.target.value;
        setProduct({ ...product, name: name });
    };

    const changePrice = (e) => {
        const price = e.target.value;
        setProduct({ ...product, price: price });
    };

    const changeDescription = (e) => {
        const description = e.target.value;
        setProduct({ ...product, description: description });
    };

    const submit = async (e) => {
        e.preventDefault();
        if (!product.name || !product.price || !product.description) {
            setError('Por favor completa todos los campos');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/createProduct', {
                name: product.name,
                price: product.price,
                description: product.description
            });
            console.log(response.data);
            navigate("/products");
        } catch (error) {
            console.error('Error al enviar el producto:', error);
        }
    };

    return (
        <div className='prin'>
            <nav className='nav'>
                <h1 className='titulo'>Crear Producto</h1>
                <Link to='/products'>
                    <button className='btn'>
                        Productos
                    </button>
                </Link>
            </nav>
            <div className='contInput'>
                <h2>Nombre</h2>
                <input type='text' onChange={changeName}></input>
                <h2>Precio</h2>
                <input type='number' onChange={changePrice}></input>
                <h2>Descripción</h2>
                <textarea className='areatext' onChange={changeDescription}></textarea>
                {error && <span className='error'>{error}</span>}
                <button onClick={submit} className='btn'>Crear</button>
            </div>
        </div>
    );
};

export default CreateProduct;
