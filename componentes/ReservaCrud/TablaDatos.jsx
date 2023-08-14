import { useState, useEffect } from "react"

import { collection, getDocs } from 'firebase/firestore'
import { db } from "../config/firebase";
import { Link } from "react-router-dom";


export const TablaDatos = () => {

    const [ Reserva, setReserva ] = useState([]);

    const userCollectionRef = collection(db, 'Reserva')
    
    const getReserva = async () => {
        const data = await getDocs(userCollectionRef)
        setReserva(
            data.docs.map(doc => ({...doc.data(), id: doc.id}))
        )
    }

    useEffect(() => {
        getReserva()
    }, [Reserva])



return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-grid gap-2">
                        <Link to='create' className= ' btn btn-success my-2 p-2'>
                        Realizar Reserva
                        </Link>
                    </div>

                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Rut</th>
                                <th>Email</th>
                                <th>Mesa</th>
                                <th>Telefono</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>

                        <tbody>
                            { Reserva.map( Reserva => (
                                <tr key={Reserva.id}>
                                    <td>{Reserva.Nombre}</td>
                                    <td>{Reserva.Rut}</td>
                                    <td>{Reserva.email}</td>
                                    <td>{Reserva.Mesa}</td>
                                    <td>{Reserva.Telefono}  </td>
                                    <td>{Reserva.Fecha}</td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
)
}