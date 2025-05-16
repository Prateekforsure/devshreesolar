"use client"

import { useState } from 'react'
import { getProductsByCategory } from '@/lib/data/products'
import ProductCard from '@/components/products/product-card'

interface ProductCategorySectionProps {
  categoryId: string;
  categoryName: string;
}

export default function ProductCategorySection({ 
  categoryId, 
  categoryName 
}: ProductCategorySectionProps) {
  const products = getProductsByCategory(categoryId)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (products.length === 0) {
    return null
  }

  return (
    <section id={categoryId} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">{categoryName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  )
}