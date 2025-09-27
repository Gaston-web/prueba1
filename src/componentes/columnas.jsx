

export const Columnas = () => {
  return (
    <div>
      <div id="contenedor-de-columnas" className="h-screen bg-gray-800">
        <div id="columna" className="w-100">
            <h4 id="nombre-de-columna" className="border-2 text-white">columna</h4>
            <div id="conenedor-de-tarjetas" className="bg-[#333] text-[#fff] grid gap-1 p-1">
                <div id="tarjeta" className="border-amber-50 border-2 ">
                    <h5>tarjeta</h5>
                    <p>contenido</p>
                </div>
                
                <div id="tarjeta" className="border-2 border-amber-50 ">
                    <h5>tarjeta</h5>
                    <p>contenido</p>
                </div>
                
                <div id="tarjeta" className="border-2 border-amber-50 ">
                    <h5>tarjeta</h5>
                    <p>contenido</p>
                </div>
            </div>
        </div>
    </div></div>
  )
}
