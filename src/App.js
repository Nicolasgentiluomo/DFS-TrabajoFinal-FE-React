import logo from './logo.svg';
import { Routes, Route } from  "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import Footer from './components/footer/footer.js'


function App() {
  return (
    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/character/:id' element={ <Home/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;
