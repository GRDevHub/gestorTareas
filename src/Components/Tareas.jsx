const Tareas = ({tareas}) => {
    return (
        <div className='my-5'>
            <h2 className='text-primary text-center mb-2'>Tareas</h2>
            {/* [{3}].map() */}
            
            <ul>
                { tareas.map( item => (
                    <li key={item} className='list-group-item d-flex justify-content-between align-items-start mt-2 border p-2'> 
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">titulo</div>
                            <p>description</p>
                            <div>
                                <button className="btn btn-sm btn-danger me-1">Eliminar</button>
                                <button className="btn btn-sm btn-warning me-1">Editar</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Tareas;