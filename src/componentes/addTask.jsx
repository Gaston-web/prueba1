import { useState } from "react"
    
export const AddTask = ({sett,cancelTask}) => {
    const [taskValue, setTaskValue] = useState({actividad:'',dia:''})
    const handleChange=(e)=>{
        const {name , value} = e.target
        setTaskValue({...taskValue,[name]:value})
    }

    const submitTask = (e) => {
        e.preventDefault()
        if (taskValue.actividad !== '' && taskValue.dia !== ''){
        sett(taskValue)
        setTaskValue({actividad:'',dia:''})
        }
        else {
        alert('por qUEEE')
        }
    }
  return (
    <form className="flex flex-col gap-1" onSubmit={submitTask}>
            <input 
                name="actividad"
                className="text-white bg-[#444]" 
                type='text'
                value={taskValue.actividad}
                onChange={handleChange} 
            />
            <input
                name="dia"
                className="text-white bg-[#444]"
                type="date"
                value={taskValue.dia}
                onChange={handleChange}
            />
            <input 
                type="submit" 
                className="bg-[#aaa]" 
                value='Agregar'/>
            <button
                onClick={cancelTask}
                className="bg-[#aaa]"
                >
                Cancelar
            </button>
        </form>

  )
}
