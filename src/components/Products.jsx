export default function ProductsPage( {products} ) {
  return (
    <>
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
    <ul className="grid h-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
      {products.map((product) => {
          return (
              <article className="m-5" key={product.id}>
              
            <h1>{product.title}</h1>
            <img
              alt="no hay foto"
              className="m-3 w-32 rounded-full"
              src="/logo.jpg"
              />
            <h2 className="inline-flex gap-2 text-lg font-bold">
              <small className="inline-flex gap-1">
                <span>{product.medida}</span>
              </small>
            </h2>
          </article>
        );
    })}
    </ul>
    </>
  )
}
