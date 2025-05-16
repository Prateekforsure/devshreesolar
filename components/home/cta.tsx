import Link from 'next/link'
import { ArrowRight } from 'lucide-react'


export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Switch to Solar Energy?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who have reduced their energy costs and 
          carbon footprint with Devshree Solar Lights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="bg-white text-yellow-600 hover:bg-gray-100 py-3 px-8 rounded-md font-medium inline-flex items-center justify-center transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            href="/products"
            className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-md font-medium inline-flex items-center justify-center transition-colors"
          >
           Explore
          </Link>
        </div>
      </div>
    </section>
  )
}