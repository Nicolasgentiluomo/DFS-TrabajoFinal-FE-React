import './footer.css';

function Footer(){
    return (
        <footer className="footer">
        <div className="footer-content">
            <h3>Contacto</h3>
            <p><i className="fas fa-envelope"></i> contacto@gmail.com</p>
            <p><i className="fas fa-phone"></i> +54 123 456 789</p>
            <a href="https://wa.me/541131503073?text=Hola!%20Quiero%20hacerte%20una%20consulta...">
                <i className="fa-brands fa-whatsapp"></i> Haceme tu pregunta!</a>
        </div>

        <div className="footer-content">
            <h3>Síguenos</h3>
            <div className="social-icons">
                <a href="#" className="icon-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="icon-link"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
            
        <div className="footer-content">
            <p>Copyright &copy; 2024, Todos los derechos reservados</p>
        </div>
    </footer>
    )
}

export default Footer;