
import {Route, Routes}  from 'react-router-dom'

import {Nav} from './Nav'
import { Inicio} from './Inicio'
import {Pedido} from './Pedido'
import {Reserva} from './Reserva'
import {Contact} from './Contact'

export const AppRouter = () =>{

return(
    <>
    <Nav/>
    <Routes>

        <Route path='/Inicio' element={<Inicio/>} />     
        <Route path='/Pedido' element={<Pedido/>} />  
        <Route path='/Reserva' element={<Reserva/>} />  
        <Route path='/Contact' element={<Contact/>}/>
        
    </Routes>
    </>
)

}; 