import css from './footer.module.css';

function Footer(){
    return (
        <footer className={css.footer}>
        <div className={css.footerContent}>
            <h3>Contacto</h3>
            <p><i className="fas fa-envelope"></i> contacto@gmail.com</p>
            <p><i className="fas fa-phone"></i> +54 123 456 789</p>
            <a href="https://wa.me/541131503073?text=Hola!%20Quiero%20hacerte%20una%20consulta...">
                <i className="fa-brands fa-whatsapp"></i> Haceme tu pregunta!</a>
        </div>

        <div className={css.footerContent}>
            <h3>Síguenos</h3>
            <div className={css.socialIcons}>
                <a href="#" className={css.iconLink}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className={css.iconLink}><i className="fab fa-instagram"></i></a>
            </div>
        </div>
            
        <div className={css.footerContent}>
            <p>Copyright &copy; 2024, Todos los derechos reservados</p>
        </div>
    </footer>
    )
}

export default Footer;