import ProductsFiltering from "@/components/ProductsFiltering";

export default function ProductsPage() {
    
    return (
    <>
        <h1 className="text-center pt-5 text-white text-4xl font-bold">TODOS NUESTROS PRODUCTOS</h1>
        <section id="product-filtered" className="grid grid-cols-[300px,1fr]">
            <ProductsFiltering />
        </section>
    </>
    )
}