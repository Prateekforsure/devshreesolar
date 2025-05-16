import { categories } from '@/lib/data/products'
import ProductCategorySection from '@/components/products/product-category-section'

export default function ProductsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solar Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality solar energy solutions designed for efficiency, 
            durability, and sustainability.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="bg-gray-100 dark:bg-gray-700 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 p-4 rounded-lg text-center transition-colors"
              >
                <span className="text-gray-800 dark:text-white font-medium">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product Listings by Category */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((category) => (
            <ProductCategorySection 
              key={category.id} 
              categoryId={category.id} 
              categoryName={category.name} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}