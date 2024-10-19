'use client'
import { useState } from "react";
import Link from "next/link";
import initialProducts from "../app/api";

export function useFilters (){
    const [filters, setFilters] = useState({
        category: "TODAS LAS CAJAS"
      })
    const filterProducts = products => {
        return products.filter(product =>{
            return (
                filters.category === "TODAS LAS CAJAS" ||
                product.category === filters.category
            )
        })
    }
    return {
        setFilters,
        filterProducts
    }
}


export default function Products() {
    const [filters, setFilters] = useState("")

    const matchedProducts = 
        filters ? 
        initialProducts.filter(product => product.category === filters) 
        : initialProducts

    const handleChange = (event) => {
        setFilters(event.target.value)  
    }

        return (
            
          <>
          <aside id="filters" className="w-full">
            <h2 className="mb-5 text-center text-white text-2xl font-bold">FILTROS</h2>
        <div className="">
        <select value={filters} onChange={handleChange} className="bg-white/50 hover:none w-52 ml-12 h-12 pl-5 rounded-xl font-bold">TIPOS DE CAJAS...
            <option value="">TODAS LAS CAJAS</option>
            <option value="BOX">BOX</option>
            <option value="DESAYUNO">DESAYUNO</option>
        </select>
        </div>  
    </aside>
          <ul className="grid h-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
            {matchedProducts.map((product) => {
                return (
                    <Link href={`/products/${product.id}`} className="m-5" key={product.id}>
                    
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
                </Link>
              );
          })}
          </ul>
          </>
        )
      }
