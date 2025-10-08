import { VscCheck, VscClose } from "react-icons/vsc";


export const TaskList = ( {data,completeTask} ) => {
  const completar = () => {
    completeTask(data.actividad)
  }
  return (

    <div className="p-1 flex justify-between bg-[#aaa] max-w-96 min-w-sm">
        <div className="flex items-center">
            <button
              onClick={completar}
              className=" rounded-2xl bg-[#888] p-2">
              {data.realizado ? <VscCheck className="text-[#2b7] text-2xl"/>
                              : <VscClose className="text-[#f00] text-2xl" />}
            </button>
            <div className="font-bold pl-0.5 text-xl">
              {data.actividad}
            </div>
        </div>
        <div>{data.dia}</div>
        
    </div>
  )
}
