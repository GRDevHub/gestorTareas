import { useState } from "react"
import Tareas from "./Components/Tareas";

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
    description: 'Descripcion #1',
    state: true,
    priority: false,
  },
  {
    id: 3,
    title: 'Tarea #3',
    description: 'Descripcion #1',
    state: false,
    priority: true,
  },
]
function App() {
const [tareasArray, setTareasArray] = useState(tareasIniciales);

  return (
    <div className="container my-1">
      <h2 className="text-primary mb-3">Formulario</h2>
      {/* Formulario */}
      <h2>...</h2>
      {/* Titulo de la tarea */}

      {/* tareas */}
      <Tareas tareas={tareasArray} />
    </div>
  )
}

export default App
