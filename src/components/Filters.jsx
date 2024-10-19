'use client'

export default function Filters ({onChange}) {

    const handleChangeCategory = (e) => {
        onChange(prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }

  return (
   <aside id="filters" className="w-full">
            <h2 className="mb-5 text-center text-white text-2xl font-bold">FILTROS</h2>
        <div className="">
        <select onChange={handleChangeCategory} className="bg-white/50 hover:none w-52 ml-12 h-12 pl-5 rounded-xl font-bold">TIPOS DE CAJAS...
            <option value="tipos de cajas...">TODAS LAS CAJAS</option>
            <option value="tipos de cajas...">BOX</option>
            <option value="tipos de cajas...">DESAYUNO</option>
        </select>
        </div>  
    </aside>
  )
}
