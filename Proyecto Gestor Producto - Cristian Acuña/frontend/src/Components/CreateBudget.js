import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Style.css';

const Budget = () => {
    const [clientName, setClientName] = useState('');
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(0);
    const [budgetProducts, setBudgetProducts] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getAllProducts');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProductToBudget = () => {
        if (clientName && selectedProduct && quantity > 0) {
            const productToAdd = products.find(prod => prod.name === selectedProduct);
            if (productToAdd) {
                const existingProductIndex = budgetProducts.findIndex(prod => prod.name === selectedProduct);
                if (existingProductIndex !== -1) {
                    const updatedProducts = [...budgetProducts];
                    updatedProducts[existingProductIndex].quantity += quantity;
                    updatedProducts[existingProductIndex].amount += productToAdd.price * quantity;
                    setBudgetProducts(updatedProducts);
                } else {
                    const amount = productToAdd.price * quantity;
                    setTotalAmount(totalAmount + amount);
                    const newBudgetProducts = [...budgetProducts, { ...productToAdd, quantity, amount }];
                    setBudgetProducts(newBudgetProducts);
                }
            }
        } else {
            setError('Por favor completa todos los campos');
        }
    };

    const removeProductFromBudget = (productName) => {
        const updatedProducts = budgetProducts.filter(prod => prod.name !== productName);
        setBudgetProducts(updatedProducts);
        const newTotalAmount = updatedProducts.reduce((total, product) => total + product.amount, 0);
        setTotalAmount(newTotalAmount);
    };

    const updateQuantity = (productName, newQuantity) => {
        if (newQuantity > 0) {
            const updatedProducts = budgetProducts.map(prod => {
                if (prod.name === productName) {
                    prod.quantity = newQuantity;
                    prod.amount = prod.price * newQuantity;
                }
                return prod;
            });
            setBudgetProducts(updatedProducts);
            const newTotalAmount = updatedProducts.reduce((total, product) => total + product.amount, 0);
            setTotalAmount(newTotalAmount);
        }
    };

    const saveBudget = async () => {
        if (!clientName) {
            setError('Por favor ingresa el nombre del cliente');
            return;
        }
        if (budgetProducts.length === 0) {
            setError('Por favor agrega al menos un producto al presupuesto');
            return;
        }
        try {
            await axios.post('http://localhost:5000/createBudget', {
                clientName: clientName,
                products: budgetProducts,
                totalPrice: totalAmount
            });
            navigate("/");
        } catch (error) {
            console.error('Error al guardar el presupuesto:', error);
        }
    };
    

    const printBudget = async () => {
        try {
            await axios.get('http://localhost:5000/invoice', {
                clientName: clientName,
                products: budgetProducts,
                totalPrice: totalAmount
            });
        } catch (error) {
            console.error('Error al crear el pdf:', error);
        }
    };

    return (
        <div className='budget'>
            <h1>Presupuesto</h1>
            <div className='client'>
                <label>Nombre del Cliente:</label>
                <input type='text' value={clientName} onChange={(e) => setClientName(e.target.value)} />
            </div>
            <div className='product-selection'>
                <input type='text' list='products' placeholder='Nombre del Producto' value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} />
                <datalist id='products'>
                    {products.map(product => (
                        <option key={product._id} value={product.name} />
                    ))}
                </datalist>
                <input type='number' value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                <button className='btn' onClick={addProductToBudget}>Agregar</button>
                <Link to={"/products"}>
                    <button className='btn'>Productos Registrados</button>
                </Link>
                <Link to={"/createProduct"}>
                    <button className='btn'>Agregar Producto</button>
                </Link>
            </div>
            <table className='budget-table'>
                <thead>
                    <tr>
                        <th>Cantidad</th>
                        <th>Nombre del Producto</th>
                        <th>Precio del Producto</th>
                        <th>Monto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {budgetProducts.map(product => (
                        <tr key={product._id}>
                            <td><input type='number' value={product.quantity} onChange={(e) => updateQuantity(product.name, parseInt(e.target.value))} /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.amount}</td>
                            <td><button className='btn' onClick={() => removeProductFromBudget(product.name)}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='total'>
                <h2>Total: {totalAmount}</h2>
            </div>
            <div className='buttons'>
                <button className='btn' onClick={saveBudget}>Guardar</button>
                <button className='btn' onClick={printBudget}>Descargar en PDF</button>
                <Link to={"/"}>
                    <button className='btn'>Presupuestos</button>
                </Link>
            </div>
            {error && <span className='error'>{error}</span>}
        </div>
    );
};

export default Budget;
