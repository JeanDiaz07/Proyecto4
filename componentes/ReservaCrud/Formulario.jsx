export const Formulario = ({submit, Nombre, Rut, email, Telefono,Mesa, Fecha, setNombre, setRut, setemail, setTelefono, setMesa, setFecha, button}) => {
    return (
        <form onSubmit = {submit}>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input 
                type="text" 
                className="form-control"
                value={Nombre}
                onChange= { (e) => setNombre(e.target.value) }
            />
            </div>
    
        <div className="mb-3">
            <label className="form-label">Rut</label>
            <input 
                type="text" 
                className="form-control"
                value={Rut}
                onChange= { (e) => setRut(e.target.value) }
            />
        </div>
    
        <div className="mb-3">
            <label className="form-label">email</label>
            <input 
                type="email" 
                className="form-control"
                value={email}
                onChange= { (e) => setemail(e.target.value) }
            />
            </div>
    
        <div className="mb-3">
            <label className="form-label">Mesa</label>
                <input 
                type="text" 
                className="form-control"
                value={Mesa}
                onChange= { (e) => setMesa(e.target.value) }
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Telefono</label>
                <input 
                type="number" 
                className="form-control"
                value={Telefono}
                onChange= { (e) => setTelefono(e.target.value) }
            />
            </div>
            <div className="mb-3">
            <label className="form-label">Fecha</label>
            <input 
                type="date" 
                className="form-control"
                value={Fecha}
                onChange= { (e) => setFecha(e.target.value) }
            />
        </div>

        <button type='submit' className="btn btn-success">{button}</button>
    </form>
    )
}