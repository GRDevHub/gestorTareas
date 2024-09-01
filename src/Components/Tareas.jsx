import CardTareas from "./CardTareas";
import PropTypes from 'prop-types'

const Tareas = ({ tareasArray, eliminar, actualizar }) => {
    return (
        <div className='my-5'>
            <h2 className='text-primary text-center mb-2'>Tareas</h2>
            {/* [{3}].map() */}
            
            <ul>
                { tareasArray.length == 0
                    ?   <div className="text-center mt-2 border border-2 p-2">
                            <h5 className="text text-center mb-2">No hay tareas</h5>
                        </div>
                    :   tareasArray.map( item => (
                        <CardTareas key={ item.id } id={ item.id } item={ item } eliminar={ eliminar } actualizar={ actualizar } />
                )) }
            </ul>
            
        </div>
    )
}

Tareas.propTypes = {
    tareasArray: PropTypes.array.isRequired,
    eliminar: PropTypes.func.isRequired,
    actualizar: PropTypes.func.isRequired,
}

export default Tareas;