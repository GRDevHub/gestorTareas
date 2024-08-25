import { useState } from "react"
import Tareas from "./Components/Tareas";
import Formulario from "./Components/Formulario";
import Swal from 'sweetalert2';

const tareasIniciales = [
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
  },
  {
    id: 3,
    title: 'Tarea #3',
    description: 'Descripcion #3',
    state: false,
    priority: true,
  },
]
function App() {
const [tareasArray, setTareasArray] = useState(tareasIniciales);

const agregarTarea = nueva_tarea => {
  setTareasArray([...tareasArray, nueva_tarea]);
}

const eliminarTarea = (id) => {
  let tareas = tareasArray.filter( item => item.id !== id);
  setTareasArray(tareas);
  Swal.fire({
    position: "center",
    icon: "success",
    title: "La tarea se elimino correctamente",
    showConfirmButton: false,
    timer: 1800
});
}

  return (
    <div className="container my-1">
      <h2 className="text-primary mb-3">Formulario</h2>
      <Formulario agregarTarea={agregarTarea} />
      <Tareas tareasArray={tareasArray} eliminar={ eliminarTarea }/>
    </div>
  )
}

export default App;
