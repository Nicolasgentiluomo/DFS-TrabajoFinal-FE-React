import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './productDetails.css'

function ProductDetails(){
    let {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {     
        fetch('../Products.json')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error al cargar datos:', error));
    }, [id]);

    const filteredProduct = products.filter(product => product.Id == id) 
    console.log(filteredProduct)

    return(
        <section className='products'>
            <div className='productsContainer' key={filteredProduct.Id}>
                <img src={`../img/Producto${filteredProduct.ImgId}.jpeg`} alt=''/>
                <div className='productsText'>
                    <h1>{filteredProduct.Title}</h1>
                    <p>{filteredProduct.Price}</p>
                    <p>{filteredProduct.Description}</p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails;