import CardTareas from "./CardTareas";
import PropTypes from 'prop-types'

const Tareas = ({tareasArray}) => {
    return (
        <div className='my-5'>
            <h2 className='text-primary text-center mb-2'>Tareas</h2>
            {/* [{3}].map() */}
            
            <ul>
                { tareasArray.map( item => (
                    <CardTareas key={item.id} item={item} />
                ))}
            </ul>
            
        </div>
    )
}

Tareas.propTypes = {
    tareasArray: PropTypes.object.isRequired,
}

export default Tareas;