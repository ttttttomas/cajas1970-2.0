import products from "@/app/api";
import { findProduct } from "@/app/api";

export default async function ProductPage({ params: { id } }) {
    const product = findProduct(id);

    return (
        <div>
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
        </div>
    )
}

