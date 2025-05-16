import Image from 'next/image'
import { Award, Users, Target, Rocket, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Devshree Solar Lights</h1>
              <p className="text-xl text-blue-100 mb-6">
                Leading the way in sustainable solar energy solutions since 2010.
              </p>
            </div>
            <div className="relative">
              <Image 
                src="Solar panels on a rooftop.jpg"
                alt="Solar panels on a rooftop" 
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Devshree Solar Lights Private Limited is a leading manufacturer and supplier of high-quality 
                solar lighting products in India. With an annual turnover of 25-100 Cr, we have established 
                ourselves as a trusted name in the solar energy sector.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our comprehensive range of products includes solar street lights, solar panels, solar 
                inverters, solar water heaters, and complete solar home systems, designed to meet diverse 
                energy needs for both residential and commercial applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">Quality Assured</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">ISO Certified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">5-Year Warranty</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-200">Nationwide Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image 
                src="https://images.pexels.com/photos/6970079/pexels-photo-6970079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Solar manufacturing facility" 
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the team driving innovation and excellence at Devshree Solar Lights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="ceo.jpg"
                  alt="Narendra Sain, CEO" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Narendra Sain</h3>
                <p className="text-yellow-600 dark:text-yellow-400 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  With over 20 years of experience in the energy sector, Narendra leads Devshree Solar 
                  with a vision to make solar energy accessible and affordable across India.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="https://images.pexels.com/photos/5990876/pexels-photo-5990876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Priya Desai, CTO" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Priya Desai</h3>
                <p className="text-yellow-600 dark:text-yellow-400 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Priya spearheads our R&D initiatives, ensuring Devshree Solar stays at the cutting 
                  edge of solar technology and product innovation.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image 
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Vikram Mehta, COO" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Vikram Mehta</h3>
                <p className="text-yellow-600 dark:text-yellow-400 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Vikram oversees all operational aspects of the company, ensuring efficient 
                  manufacturing, quality control, and timely delivery of our solar products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-lg">
              <div className="inline-block p-3 bg-yellow-100 dark:bg-yellow-800 rounded-full mb-4">
                <Target className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
  To accelerate India&apos;s transition to clean energy by providing innovative, reliable, and 
  affordable solar solutions that reduce carbon footprints and energy costs for our customers.
</p>

            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-lg">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-800 rounded-full mb-4">
                <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                To be the leading provider of solar energy solutions in India, recognized for quality, 
                innovation, and customer satisfaction, while contributing to a sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our actions and decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mr-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">1</span>
                </span>
                Quality Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain the highest standards in our products and services, ensuring reliability and durability.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mr-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">2</span>
                </span>
                Customer Focus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize customer needs and satisfaction in everything we do, providing tailored solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mr-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">3</span>
                </span>
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We continually seek to improve our products and processes through research and development.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mr-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">4</span>
                </span>
                Environmental Stewardship
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to reducing environmental impact and promoting sustainable energy solutions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mr-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">5</span>
                </span>
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We conduct our business with honesty, transparency, and ethical practices at all times.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mr-2">
                  <span className="text-yellow-600 dark:text-yellow-400 font-bold">6</span>
                </span>
                Teamwork
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We value collaboration, respect, and diversity among our employees, partners, and customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Solar Revolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Partner with Devshree Solar Lights for your renewable energy needs and contribute to a sustainable future.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-md font-medium inline-flex items-center transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}