import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import css from './products.module.css'


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

    if (!products) {
        return <div className={css.main}>Loading...</div>;
    }

    return (
        <section className = {css.main}>
            <button onClick={showCategories}>Categorias</button>
            <div className={`${css.categoryItems} ${categoryButton ? css.show:''}`}>
                <ul>
                    <li className={css.categoryItem} onClick={() => {filterByCategory('Todo'); showCategories()}}>Todo</li>
                    <li className={css.categoryItem} onClick={() => {filterByCategory('Mesas'); showCategories()}}>Mesas</li>
                    <li className={css.categoryItem} onClick={() => {filterByCategory('Sillas'); showCategories()}}>Sillas</li>
                    <li className={css.categoryItem} onClick={() => {filterByCategory('Lamparas'); showCategories()}}>Lamparas</li>
                </ul>
            </div>
            <section className={css.products}>
                {products.map((product) => (
                    <Link to={`/productDetails/${product.Id}`} className={`${css.productContainer} ${product.Category == category || category == "Todo" ? '': css.hide}`} key={product.Id}>
                        <img src={`./img/Producto${product.ImgId}.jpeg`} alt=''/>
                        <div className={css.productsText}>
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