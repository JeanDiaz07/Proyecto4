//import { CrearResrva } from "./ReservaCrud/CrearResrva";
import { TablaDatos } from "./ReservaCrud/TablaDatos.jsx";
import {Formulario} from "./Reserva/Formulario.jsx";

import { Row } from "react-bootstrap";



export const Reserva = () => {
    return(
    <>
    
    
    
    <div class="formularioR">
    <h2>Reservas</h2>
    
    <Formulario/>

    </div>
    
    

    <div class="tabla">
    <h2>Listado de Reserva</h2>

    
    <TablaDatos/>



    </div>
    


    










    
    
    </>
    
    
    );
    
    };