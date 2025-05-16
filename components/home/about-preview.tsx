import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <Image 
                src="https://cdn.pixabay.com/photo/2014/09/21/11/00/businesswoman-454874_1280.jpg"
                alt="CEO Narendra Sain with solar panel installation" 
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-lg shadow-lg max-w-xs dark:bg-yellow-600">
              <p className="text-lg font-bold text-gray-900">
  &quot;Our mission is to illuminate India with clean, sustainable solar energy solutions.&quot;
</p>

              <div className="mt-4 flex items-center">
                <div className="text-gray-900">
                  <p className="font-semibold">Narendra Sain</p>
                  <p className="text-sm">CEO & Founder</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Devshree Solar Lights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
  Since our inception, Devshree Solar Lights has been at the forefront of solar innovation in India. 
  With an annual turnover of 25-100 Cr, we&apos;ve established ourselves as a trusted provider of high-quality 
  solar lighting solutions for both residential and commercial applications.
</p>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Award className="h-10 w-10 text-yellow-500 mb-2" />
                <div className="text-center">
                  <span className="block font-bold text-xl">15+</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Users className="h-10 w-10 text-yellow-500 mb-2" />
                <div className="text-center">
                  <span className="block font-bold text-xl">1000+</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Happy Clients</span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <TrendingUp className="h-10 w-10 text-yellow-500 mb-2" />
                <div className="text-center">
                  <span className="block font-bold text-xl">25-100 Cr</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">Annual Turnover</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center text-yellow-600 dark:text-yellow-400 font-medium hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}