import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './products.css'


function Products(){
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('Todo');
    const [categoryButton, setCategoryButton] = useState(false);

    useEffect(() => {     
        fetch('./Products.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

   function filterByCategory(filter){
        setCategory(filter);
   }

   function showCategories(){
    setCategoryButton(!categoryButton);
   }

    return (
        <section className = "main">
            <button onClick={showCategories}>Categorias</button>
            <div className={`category-items ${categoryButton ? 'show':''}`}>
                <ul>
                    <li className="category-item" onClick={() => {filterByCategory('Todo'); showCategories()}}>Todo</li>
                    <li className="category-item" onClick={() => {filterByCategory('Mesas'); showCategories()}}>Mesas</li>
                    <li className="category-item" onClick={() => {filterByCategory('Sillas'); showCategories()}}>Sillas</li>
                    <li className="category-item" onClick={() => {filterByCategory('Lamparas'); showCategories()}}>Lamparas</li>
                </ul>
            </div>
            <section className="products">
                {products.map((product) => (
                    <Link to={`/productDetails/${product.Id}`} className={`productContainer ${product.Category == category || category == "Todo" ? '': 'hide'}`} key={product.Id}>
                        <img src={`./img/Producto${product.ImgId}.jpeg`} alt=''/>
                        <div className='productsText'>
                            <h1>{product.Title}</h1>
                            <p>{product.Price}</p>
                            <p>{product.Description}</p>
                        </div>
                    </Link>
                    ))}
            </section>
        </section>

    )
};

export default Products;