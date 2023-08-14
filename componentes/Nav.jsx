import {Link} from 'react-router-dom'



export const Nav = ()=>{
return(
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <Link class="link"    to="/inicio">Inicio</Link>
    <Link class="link" to="/pedido">Pedido </Link>
    <Link class="link" to="/reserva">Reserva</Link>
    <Link class="link"  to="/Contact">Contacto</Link>
</div>
</nav>



</>



)

}