"use client"

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { type Product } from '@/lib/data/products'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product;
  isHovered?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

export default function ProductCard({ 
  product, 
  isHovered = false,
  onHover,
  onLeave
}: ProductCardProps) {
  return (
    <Link 
      href={`/products/${product.id}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500",
        isHovered && "scale-[1.02] shadow-2xl"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="aspect-[4/3] w-full relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isHovered && "scale-110 brightness-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
        
        {product.isFeatured && (
          <div className="absolute top-4 right-4 flex items-center space-x-1 bg-yellow-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            <Star className="w-4 h-4 fill-current" />
            <span>Featured</span>
          </div>
        )}
      </div>
      
      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-600 dark:text-yellow-400 font-medium group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute inset-0 border-2 border-yellow-400 rounded-2xl pointer-events-none"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </Link>
  )
}