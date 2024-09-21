import css from './admin.module.css';
import { useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';

function Admin({permissionsGranted}){
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({name:'', price:0, description:'', image:''})
    const [show, setShow] = useState(false)

    let Currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {    
        if(permissionsGranted != 'success'){
            navigate('/notAuthorized');
        }
    },[permissionsGranted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewProduct((prevState) => ({
            ...prevState,
            image: URL.createObjectURL(file),
        }));
    };

    const validation = (e) => {
        e.preventDefault();
        console.log(newProduct)
        setShow(true)
    }

    return(
        <div className={css.admin}>
            <section className={css.formContainer}>
                <h1>Agregar nuevo producto</h1>
                <form className={css.formAdmin} onSubmit={validation}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" name="name" id="name" placeholder="Nombre del producto" onChange={handleChange}/>

                    <label htmlFor="price">Precio:</label>
                    <input type="number" name="price" id="price" placeholder="Precio del producto" onChange={handleChange}/>

                    <label htmlFor="description">Descripcion</label>
                    <textarea name="description" id="description" placeholder="Ingrese la descripcion del producto" onChange={handleChange}></textarea> 

                    <label htmlFor="image">Cargar imagen:</label>
                    <input type="file" name="image" id="image" onChange={handleFileChange} />

                    <button type='submit'>Guardar</button>

                </form>
            </section>
            {show &&
            <section className={css.reviewContainer}>
                <div className={css.products}>
                    <div className={css.productContainer} key={1}>
                        <img src={newProduct.image} alt=''/>
                        <div className={css.productsText}>
                            <h1>{newProduct.name}</h1>
                            <p>{Currency.format(newProduct.price)}</p>
                            <p>{newProduct.description}</p>
                        </div>
                    </div>
                </div>
            </section>
            }
        </div>
    )
};

export default Admin;