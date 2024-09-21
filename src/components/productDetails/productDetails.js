import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import css from './productDetails.module.css'

function ProductDetails(){
    let {id} = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState()

    let Currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {     
        fetch('../Products.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error al cargar datos:', error));
    },[]);

    useEffect(() => {
        if(products.length > 0){
            const product = products.find(product => product.Id == id)
            setFilteredProduct(product) 
            console.log(product.Title)
        }
    },[products,id])

    if (!filteredProduct) {
        return <div className={css.main}>Loading...</div>;
    }
    
    // console.log(filteredProduct)

    return(
        <section className={css.main}>
            <div className={css.products}>
                <div className={css.productContainer} key={filteredProduct.Id}>
                    <img src={`../img/Producto${filteredProduct.ImgId}.jpeg`} alt=''/>
                    <div className={css.productsText}>
                        <h1>{filteredProduct.Title}</h1>
                        <p>Precio: {Currency.format(filteredProduct.Price)}</p>
                        <p>{filteredProduct.LargeDescription}</p>
                    </div>
                    <button>Comprar</button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;