import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function GalleryComponent() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 justify-items-center max-w-[1200px] px-4 mx-auto font-raleway">
        {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
        ))}
        </div>
    )
}