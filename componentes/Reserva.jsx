//import { CrearResrva } from "./ReservaCrud/CrearResrva";
import { TablaDatos } from "./ReservaCrud/TablaDatos.jsx";
import {Formulario} from "../Reserva/Formulario.jsx";





export const Reserva = () => {
    return(
    <>
    
    <h2>Reservas</h2>
    <div class="Reserva">
    <div class="formularioR">

    
    <Formulario/>

    </div>
    
    

    <div class="tabla">
    <h2>Listado de Reserva</h2>

    
    <TablaDatos/>



    </div>
    </div>


    










    
    
    </>
    
    
    );
    
    };