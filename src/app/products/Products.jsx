'use client'
// import Link from "next/link";
import products from "../api";

export default function Products() {
    const [Saludar, setSaludar] = useState()

    function handleClick () {
        setSaludar(alert("Hola!"))
    }
  return (
    <>
    <aside id="filters" className="bg-black w-full">
            <h2 className="text-center text-white text-2xl font-bold">FILTROS</h2>
        <div className="">
        <select name="" id="">TIPOS DE CAJAS...
            <option value="tipos de cajas...">tipos de cajas...</option>
            <option value="tipos de cajas...">BUDINERAS</option>
            <option value="tipos de cajas...">BUDINERAS</option>
        </select>
        </div>  
        </aside>
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {products.map((product) => {
          return (
              <article className="m-5" key={product.id}>
            <h1>Hola</h1>
            <img
              alt="no hay foto"
              className="m-3 w-32 rounded-full"
              src="/logo.jpg"
              />
            <h2 className="inline-flex gap-2 text-lg font-bold">
              <small className="inline-flex gap-1">
                <span>{product.medida}</span>
                <button onClick={handleClick}>Hola {Saludar}</button>
              </small>
            </h2>
          </article>
        );
    })}
    </ul>
    </>
  )
}
