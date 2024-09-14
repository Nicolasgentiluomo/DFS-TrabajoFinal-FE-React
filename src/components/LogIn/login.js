import './login.css'
import React, {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';



function LogIn({permissionsGranted,setPermissionsGranted}){
    const [credentialsInput, setCredentialsInput] = useState({userName:'' , password: ''}); //used to get the values of the form
    const [credentials, setCredentials] = useState({}); //used to get the values of the json with credentials
    const navigate = useNavigate();

    useEffect(() => {     
        fetch('./adminCredentials.json')
        .then((response) => response.json())
        .then((data) => setCredentials(data))
        .catch((error) => console.error('Error al cargar datos:', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentialsInput((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const validation = (e) => {
        e.preventDefault();
        if (credentialsInput.userName == credentials.UserName && credentialsInput.password == credentials.Password) {
            setPermissionsGranted('success');
            // navigate('/')
        }
        else{
            setPermissionsGranted('incorrect')
        }
    }

    return(
        <div className="main-login">
            <section className="formContainerLogin">
                <h1>Iniciar sesion</h1>
                <form className="formLogin" onSubmit={validation}>
                    <label htmlFor="userName">Usuario:</label>
                    <input type="text" name="userName" id="userName" placeholder="Ingrese el usuario" value={credentialsInput.userName} onChange={handleChange}/>

                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password" placeholder="Ingrese la contraseña" value={credentialsInput.password} onChange={handleChange}/>
                    <p className={`${permissionsGranted == 'incorrect' ? 'show' : ''}`}>Datos ingresados incorrectos</p>

                    <button type='submit'>Iniciar sesion</button>
                </form>
            </section>
        </div>
    )
};

export default LogIn;