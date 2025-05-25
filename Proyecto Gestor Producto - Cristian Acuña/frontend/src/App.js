import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProduct from './Components/CreateProduct.js';
import EditProduct from './Components/EditProduct.js';
import Products from './Components/Products.js'
import Budget from './Components/CreateBudget.js';
import Budgets from './Components/Budgets.js';
import EditBudget from './Components/EditBudget.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/createProduct' element={<CreateProduct></CreateProduct>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/editProduct/:id' element={<EditProduct></EditProduct>}></Route>
        <Route path='/' exact element={<Budgets></Budgets>}></Route>
        <Route path='/budget' element={<Budget></Budget>}></Route>
        <Route path='/editBudget/:id' element={<EditBudget></EditBudget>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
