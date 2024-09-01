import { useState } from "react";
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';

const Formulario = ({ agregarTarea }) => {
    const [tarea, setTarea] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: false,
    });

    const {title, description, state, priority} = tarea;

    const modificarCampo = (e) => {
        // console.log(e.target.name)
        if(e.target.name !== 'priority'){
            setTarea({ ...tarea, [e.target.name]: e.target.value })
        }else{
            setTarea({ ...tarea, [e.target.name]: e.target.checked })
        }
    }

    const enviarFormulario = (e) => {
        e.preventDefault();
        
        if(!title.trim() || !description.trim()){
            console.log('complete los campos')
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debe completar la tarea y la descripcion",
            });
            return;
        }
        //Crear Tarea 
        const nueva_tarea = {
            id: Date.now(),
            title: title,
            description: description,
            state: state === 'completado',
            priority: priority
        }

        // Llamar a agregarTarea
        agregarTarea(nueva_tarea);

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Nueva tarea agregada correctamente!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <>
            <form onSubmit={ (e) => enviarFormulario(e) }>
                <input 
                    type="text" 
                    className="form-control mb-2" 
                    placeholder="Ingrese tarea" 
                    name="title" 
                    value={ title } 
                    onChange={ (e) => modificarCampo(e) } />

                <textarea 
                    className="form-control mb-2" 
                    placeholder="Ingrese descripcion" 
                    name="description" 
                    value={ description } 
                    onChange={ (e) => modificarCampo(e) }></textarea>

                <select className="form-select mb-2"
                    name="state"
                    value={ state }
                    onChange={ (e) => modificarCampo(e) }>
                    <option value='pendiente'>pendiente</option>
                    <option value='completado'>completado</option>
                </select>

                <div className="form-check mb-2">
                    <input className="form-check-input"
                        id="priority"
                        type="checkbox"
                        name="priority"
                        checked={ priority }
                        onChange={ (e) => modificarCampo(e) } />
                        <label htmlFor="priority" className="form-check-label">Prioridad</label>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

Formulario.propTypes = {
    agregarTarea: PropTypes.func.isRequired
}

export default Formulario;