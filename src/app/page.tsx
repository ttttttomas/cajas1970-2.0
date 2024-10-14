import Wpp from "@/components/Wpp";
import Link from "next/link";
import Carousel from '@/components/Carousel';


export default function Home() {


  return (
    <>
    <Wpp />
    <section id="carousel" className="flex items-center justify-between">
            <div className="mr-96 text-[50px] font-bold gap-y-5 flex flex-col m-[200px] items-center text-3xl text-white">
               <p>NUESTROS</p> 
               <Link 
               className="border-2 hover:bg-white hover:text-black hover:scale-110 transition-all rounded-2xl p-3 text-3xl" 
               href="/products"
               >
                  PRODUCTOS
               </Link>
               <p>DESTACADOS</p> 
            </div>
            <div>
                <Carousel />
            </div>
        </section>
        <section className="flex justify-center items-center gap-x-5 bg-white/30 py-3 rounded-3xl text-white font-bold text-3xl">
          <h2>¿QUERES DESCARGAR NUESTRO CATALOGO?</h2>
          <a className="underline" href="CATALOGOCAJAS1970.pdf" download="CATALOGO 2024">HACE CLICK ACÁ</a>
        </section>
      <section id="boxs"></section>
      <section id="maps"></section>
      <section id="sucursales"></section>
    </>
  );
}
