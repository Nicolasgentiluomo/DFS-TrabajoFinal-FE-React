import { Link } from 'react-router-dom';
import Producto from '../../assets/Producto2.png';
import Textura from '../../assets/Textura1.png';
import Trabajo from '../../assets/Trabajando.png';
import './home.css'


function Home(){
    return (
        <section className="main-section">

            <Link to={"/notfound"} className="boxContainer1">
                <div className="text1">
                    <h1>Nosotros</h1>
                    <p>
                        Somos un emprendimiento que basa sus servicios y productos
                        en la elaboracion de muebles, herrajes, espejos e iluminacion.
                    </p>
                    <p>Hace click en la imagen para saber mas de nosotros</p>
                </div>
                <img href="hola" src={Trabajo} alt=""/>
            </Link>

            <Link to={"/notfound"} className="boxContainer2">
                <div className="text2">
                    <h1>Texturas</h1>
                    <p>Realizamos diferentes tipos de texturas tanto al hierro
                        como a la madera. Podes elegir la textura que mas te guste!
                    </p>
                    <p>Hace click en la imagen para ver algunas de las texturas que ofrecemos</p>
                </div>
                <img src={Textura} alt=""/>
            </Link>   

            <Link to={"/Products"} className="boxContainer1">
                
                    <div className="text1">
                        <h1>Productos</h1>
                        <p>Queres ver algunos de los productos que tenemos a la venta?</p>
                        <p>Hace click para poder verlos, y si te gustan, comprarlos!</p>
                    </div>
                    <img src={Producto} alt=""/>
                
            </Link>
            
        </section> 
        );
};

export default Home;