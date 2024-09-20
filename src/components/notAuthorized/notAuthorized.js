import css from './notAuthorized.module.css'

function NotAuthorized(){
    return(
        <p className={css.notAuthorizedClass}>No tenes acceso a esta seccion</p>
    )
}

export default NotAuthorized;