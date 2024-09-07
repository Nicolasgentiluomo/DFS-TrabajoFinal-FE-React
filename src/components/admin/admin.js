import './admin.css';

function Admin(){
    return(
        <section className="formContainer">
            <h1>Agregar nuevo producto</h1>
            <form className="formAdmin">
                <label for="name">Nombre:</label>
                <input type="text" name="name" id="name" placeholder="Nombre del producto"/>

                <label for="price">Precio:</label>
                <input type="number" name="price" id="price" placeholder="Precio del producto"/>

                <label for="description">Descripcion</label>
                <textarea name="description" id="description" placeholder="Ingrese la descripcion del producto"></textarea>

                <button>Cargar imagen</button>

                <button>Guardar</button>
            </form>
        </section>
    )
};

export default Admin;