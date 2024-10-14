    
import Image from "next/image";

import Cart from "./Icons/Cart";
import Sucursales from "./Icons/Sucursales";
import Instagram from "./Icons/Instagram";
import Facebook from "./Icons/Facebook";
import Link from "next/link";

import '@fontsource-variable/montserrat';

export default function Header() {
    return (
        <header 
        className="bg-white/30 text-black flex flex-col items-center
         justify-center w-full fixed top-0 left-0 z-50 gap-y-5 px-5 py-2">
            <Link href="/" className="flex gap-x-5 items-center">
                <Image className="min-m-[400px] rounded-full" src="/logo.jpg" alt="logo" width={80} height={80} />
                <div className="flex flex-col items-start justify-center">
                <p className="font-bold">CAJAS 1970</p>
                <p className="">SOMOS FABRICANTES</p>
                </div>
            </Link>
            <div className="font-bold w-full flex justify-between gap-x-10">
                <Link 
                className="flex justify-center items-center gap-x-2" 
                href="/products">
                    <Cart /> 
                    <p>Productos</p>
                </Link>
                <Link 
                className="flex justify-center items-center gap-x-2" 
                target="_blank" 
                href="">
                    <Sucursales /> 
                    <p>Sucursales</p>
                </Link>
                <div className="flex justify-center items-center gap-x-8">
                <Link
                target="_blank" 
                href="https://www.instagram.com/cajas1970/?hl=es">
                    <Instagram /> 
                </Link>
                <Link 
                target="_blank" 
                href="https://www.facebook.com/p/Cajas1970-100063628059239/?_rdr">
                    <Facebook /> 
                </Link>
                </div>
            </div>
        </header>
    );
}
