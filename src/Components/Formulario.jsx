import { useState } from "react";
import Swal from 'sweetalert2';

const Formulario = () => {
    const [tarea, setTarea] = useState({
        title: '',
        description: '',
        state: 'pendiente',
        priority: false,
    });

    const {title, description, state, priority} = tarea;

    const modificarCampo = (e) => {
        console.log(e.target.name)
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
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
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

export default Formulario;