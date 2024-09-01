import { useEffect, useState } from "react"
import Tareas from "./Components/Tareas";
import Formulario from "./Components/Formulario";
import Swal from 'sweetalert2';

const tareasIniciales = 
    localStorage.getItem('tareas') 
        ? JSON.parse(localStorage.getItem('tareas')) 
        : [
            {
                id: 1,
                title: 'Tarea #1',
                description: 'Descripcion #1',
                state: false,
                priority: false,
            },
            {
                id: 2,
                title: 'Tarea #2',
                description: 'Descripcion #2',
                state: true,
                priority: false,
            }
        ];
function App() {
    const [tareasArray, setTareasArray] = useState(tareasIniciales);

    useEffect( () => {
        // Guardar el arreglo al localStorage
        localStorage.setItem('tareas', JSON.stringify(tareasArray));
    },[tareasArray]);

    // Agregar tarea
    const agregarTarea = nueva_tarea => {
        setTareasArray([...tareasArray, nueva_tarea]);
    }

    // Eliminar tare
    const eliminarTarea = (id) => {
        const tareas = tareasArray.filter(item => item.id !== id);
        setTareasArray(tareas);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "La tarea se elimino correctamente!",
            showConfirmButton: false,
            timer: 1800
        });
    }

    // Actualizar tarea
    const updateTarea = (id) => {
        const tareaCambio = tareasArray.map(item => {
            if (item.id === id) {
                item.state = !item.state;
            }
            return item;
        })

        setTareasArray(tareaCambio);
    }

    return (
        <div className="container my-1">
            <h2 className="text-primary mb-3">Formulario</h2>
            <Formulario agregarTarea={agregarTarea} />
            <Tareas tareasArray={tareasArray} eliminar={eliminarTarea} actualizar={updateTarea} />
        </div>
    )
}

export default App;
