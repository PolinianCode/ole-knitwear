"use client"

import Link from "next/link"
import Image from "next/image"
import { Product } from "@/types/Product"
import { usePrice } from "@/hooks/usePrice"

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const price = usePrice(product.price)
  const oldPrice = usePrice(Number(product?.oldPrice))

  return (
    <div
      className="fade-in-up opacity-0 animate-fade-in-up w-full max-w-[340px]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <Link
        href={`/product/${product.slug}`}
        className="block group overflow-hidden"
      >
        <div className="relative w-full aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="pt-5 pb-5">
          <h3 className="text-base font-raleway font-medium text-gray-800 mb-1.5">{product.name}</h3>
          <div className="text-base font-raleway text-black">
            {product.oldPrice && (
              <span className="line-through text-gray-400 mr-2">{oldPrice}</span>
            )}
            <span className="font-bold">{price}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
