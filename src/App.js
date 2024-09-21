import logo from './logo.svg';
import { Routes, Route } from  "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import Footer from './components/footer/footer.js'
import Products from './components/products/products.js'
import Admin from './components/admin/admin.js'
import Login from './components/LogIn/login.js'
import NotAuthorized from './components/notAuthorized/notAuthorized.js';
import NotFound from './components/notFound/notFound.js';
import ProductDetails from './components/productDetails/productDetails.js';
import React, {useState} from 'react';


function App() {
  const [permissionsGranted, setPermissionsGranted] = useState(''); //used to store the credentials inputted by the user
  return (
    <BrowserRouter>

      <NavBar permissionsGranted={permissionsGranted}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/LogIn' element={<Login permissionsGranted={permissionsGranted} setPermissionsGranted={setPermissionsGranted}/>}/>
        <Route path='/Products' element={ <Products/>}/>
        <Route path='/Admin' element={ <Admin permissionsGranted={permissionsGranted}/>}/>
        <Route path='/notfound' element={ <NotFound/>}/>
        <Route path='/notAuthorized' element={ <NotAuthorized permissionsGranted={permissionsGranted}/>}/>
        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
