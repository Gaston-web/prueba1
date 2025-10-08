import { AddTask } from "../componentes/addTask"
import { Nav } from "../componentes/Nav"
import { TaskList } from "../componentes/taskList"
import { useState } from "react"


export const ToDoList = () => {
    const [ addTaskModal, setAddTaskModal] = useState(false)

    const [filterStatus, setFilterStatus] = useState(null)
        
    const [ toDo, setToDo] = useState([
        {   
            id: 1759791882867,
            dia: "05-10-2025",
            actividad:'lavar los platos',
            realizado:false
        },
        {   
            id:1759791886194,
            dia: "05-10-2025",
            actividad:'cocinar',
            realizado:false
        },
        {   
            id:1759791886767,
            dia: "05-10-2025",
            actividad:'estudiar',
            realizado:false
        },
        {
            id:1759791907623,
            dia: "05-10-2025",
            actividad:'barrer',
            realizado:false
        }
    ])

    const mostrarInput = () => setAddTaskModal(true)

    const agregarAToDo = (nuevaActividad) => {
        const {actividad, dia } = nuevaActividad
        setToDo(()=>[
            ...toDo,
            { 
                id:Date.now(),
                dia:dia, 
                actividad:actividad,
                realizado:false
            }])
    }
    
    const taskDone = (act) => {
        setToDo(prevToDo =>
            prevToDo.map(tarea =>
            tarea.actividad === act
            ? { ...tarea, realizado: !tarea.realizado }
            : tarea
            )
        )
    };
    const closeAddTask = () => setAddTaskModal(false)

    const buttonTrue = () => setFilterStatus(true)
    const buttonFalse = ()=> setFilterStatus(false)
    const buttonNull = ()=> setFilterStatus(null)

    const tareasFiltradas =
      filterStatus === null
        ? toDo
        : toDo.filter((obj) => obj.realizado === filterStatus);

  return (
    <>
        <Nav />
        <div 
            className="h-screen bg-[#333] flex gap-2 justify-center">
            <div className="flex flex-col gap-1"> 
                <button 
                    className="bg-[#aaa]" 
                    onClick={buttonTrue}
                >
                    Completado
                </button>
                <button 
                    className="bg-[#aaa]" 
                    onClick={buttonFalse}
                >
                    Pendiente
                </button>
                <button 
                    className="bg-[#aaa]" 
                    onClick={buttonNull}
                >
                    Todas
                </button>
            </div>
            <div className="mt-10">
                <button className="bg-[#aaa] p-2 rounded-2xl text-center" onClick={mostrarInput}>Agregar Tarea</button>
                {addTaskModal ? <AddTask sett={agregarAToDo} cancelTask={closeAddTask} /> : null}
            </div>
            <div>
                {tareasFiltradas.map((toDoFilter)=><TaskList key={toDoFilter.id} data={toDoFilter} completeTask={taskDone} /> )}
            </div>
    </div></>
  )
}
