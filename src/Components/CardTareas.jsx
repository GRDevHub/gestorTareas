import PropTypes from 'prop-types';

const CardTareas = ( {item, id, eliminar} ) => {
    const {title, description, state, priority} = item;

    return (
        <li className='list-group-item d-flex justify-content-between align-items-start mt-2 border p-2'> 
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    { title }
                    { state ? <spam className='bg-success text-light badge ms-5'>Completado</spam> : <spam className='bg-info text-light badge ms-5'>Pendiente</spam> }
                </div>
                <p>{ description }</p>
                <div>
                    <button className="btn btn-sm btn-danger me-1" onClick={ () => eliminar(id) }>Eliminar</button>
                    <button className="btn btn-sm btn-warning me-1">Editar</button>
                </div>
            </div>
            { priority ? <p className="badge bg-primary rounded-pill">Prioritario</p> : <p className="badge bg-warning rounded-pill">No prioritario</p>}
        </li>
    )
}

CardTareas.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    eliminar: PropTypes.func.isRequired
}

export default CardTareas;