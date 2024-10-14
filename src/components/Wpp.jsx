import Image from "next/image";
import Link from "next/link";

function Wpp() {
    return (
        <Link 
        target="_blank" 
        href="https://wa.me/+541160395129" 
        class="fixed right-[15px] bottom-[15px]
        rounded-full shadow-2xl transition-all">
            <Image src="/icowpp.png" alt="wpplogo" width={60} height={10} />
        </Link>
    );
}

export default Wpp;