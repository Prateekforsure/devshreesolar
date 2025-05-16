import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { getProductById } from '@/lib/data/products'
import SimilarProducts from '@/components/products/similar-products'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
     <p className="mb-6">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>

        <Link
          href="/products"
          className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to All Products
        </Link>
      </div>
    )
  }

  const specItems = Object.entries(product.specifications)

  return (
    <div className="pt-20">
      {/* Product Detail */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-medium"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to All Products
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="mb-6 inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm font-medium">
                {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-md font-medium inline-flex items-center transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Specifications</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              {specItems.map(([key, value], index) => (
                <div key={index} className="p-6">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{key}</h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <SimilarProducts currentProductId={product.id} category={product.category} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in {product.name}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our team for pricing, installation information, and customized solutions.
          </p>
          <Link
            href="/contact"
            className="bg-white text-yellow-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium inline-block transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}