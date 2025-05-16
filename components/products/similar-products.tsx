"use client"

import { useState } from 'react'
import { getProductsByCategory, type Product } from '@/lib/data/products'
import ProductCard from '@/components/products/product-card'

interface SimilarProductsProps {
  currentProductId: string;
  category: string;
}

export default function SimilarProducts({ 
  currentProductId, 
  category 
}: SimilarProductsProps) {
  const allCategoryProducts = getProductsByCategory(category)
  const similarProducts = allCategoryProducts.filter(product => product.id !== currentProductId)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (similarProducts.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarProducts.slice(0, 3).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}