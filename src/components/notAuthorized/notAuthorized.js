import css from './notAuthorized.module.css'

function NotAuthorized({permissionsGranted}){
    console.log(permissionsGranted)
    return(
        <div>
            <p className={css.notAuthorizedClass}>No tenes acceso a esta seccion</p>
        </div>
    )
}

export default NotAuthorized;