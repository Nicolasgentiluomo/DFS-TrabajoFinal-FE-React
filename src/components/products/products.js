import { Link } from 'react-router-dom';
import Producto from '../../assets/Producto1.jpeg';
import './products.css'

function Products(){
    return (
        <section className = "main">
            <button>Categorias</button>
            <div class="category-items">
                <ul>
                    <li class="category-item" value="Todo">Todo</li>
                    <li class="category-item" value="Mesas">Mesas</li>
                    <li class="category-item" value="Sillas">Sillas</li>
                    <li class="category-item" value="Lamparas">Lamparas</li>
                </ul>
            </div>
            <section class="products">
                
                <a href="#" class="productContainer">
                    <img src={Producto} alt=""/>
                    <div class="productsText">
                        <h1>Lampara</h1>
                        <p>$1.000.000</p>
                        <p>Esta lampara es de un estilo vintage, con un acabado de madera</p>
                    </div>
                </a> 
            </section>
        </section>

    )
};

export default Products;