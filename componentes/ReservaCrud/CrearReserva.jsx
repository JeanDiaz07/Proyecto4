import { useState } from "react"
import { db } from "../config/Firebase"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

import { Formulario } from "./Formulario.jsx"

export const CrearReserva = () => {

    const [ Nombre, setNombre ] = useState('')
    const [ Rut, setRut] = useState('')
    const [ email, setemail ] = useState('')
    const [ Mesa, setMesa ] = useState('')
    const [ Telefono, setTelefono ] = useState('')
    const [ Fecha, setFecha] = useState('') 

    const navigate = useNavigate()

    const userCollectionRef = collection(db, 'Reserva')

    const onStore = async (event) => {
        event.preventDefault();
        await addDoc( userCollectionRef, {Nombre, Rut, email, Mesa, Telefono,Fecha} 
            
            )
        navigate('/')
    }

return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                

                    <CrudForm 
                        submit = {onStore}
                        Nombre={Nombre}
                        Rut={Rut}
                        email={email}
                        Mesa={Mesa}
                        Telefono={Telefono}
                        Fecha={Fecha}
                        setNombre={setNombre}
                        setRut={setRut}
                        setemail={setemail}
                        setMesa={setMesa}
                        setTelefono={setTelefono}
                        setFecha={setFecha}
                        button='Create'
                        />
                    
                </div>
            </div>
        </div>
    </>
)
}