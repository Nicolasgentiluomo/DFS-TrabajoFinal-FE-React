import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './products.css'


function Products(){
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        fetch('./Products.json')
        .then((response) => response.json())
        .then((data) => setProductos(data))
        .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

   

    return (
        <section className = "main">
            <button>Categorias</button>
            <div className="category-items">
                <ul>
                    <li className="category-item" data-category="Todo">Todo</li>
                    <li className="category-item" data-category="Mesas">Mesas</li>
                    <li className="category-item" data-category="Sillas">Sillas</li>
                    <li className="category-item" data-category="Lamparas">Lamparas</li>
                </ul>
            </div>
            <section className="products">
                {productos.map((producto) => (
                    <Link to={"/"} className="productContainer" data-category={producto.category} key={producto.Id}>
                        <img src={`./img/Producto${producto.ImgId}.jpeg`} alt=''/>
                        <div className='productsText'>
                            <h1>{producto.Title}</h1>
                            <p>{producto.Price}</p>
                            <p>{producto.Description}</p>
                        </div>
                    </Link>
                    ))}
            </section>
        </section>

    )
};

export default Products;