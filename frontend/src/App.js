
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from'react-router-dom';
import Product from './Pages/Product';
import ProductAdd from './Pages/ProductAdd';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Navigate to="/product" />} />
        <Route exact path='/product' element={<Product/>} />
        <Route exact path='/product/add' element={<ProductAdd/>} />
      </Routes>
    </BrowserRouter>
  );
}

<script>
  alert("Yes");
</script>

export default App;
