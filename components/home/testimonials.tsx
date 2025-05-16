"use client"

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

// Testimonial data
const testimonials = [
  {
    id: 1,
    content: "The solar street lights from Devshree Solar have completely transformed our township. They're reliable, bright, and have significantly reduced our electricity costs. The installation team was professional and efficient.",
    author: "Rajesh Sharma",
    position: "Township Manager, Green Valley",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    content: "We've been using Devshree's solar water heaters for our hotel chain, and they've been excellent. The quality is outstanding, and the after-sales service is prompt and helpful. Highly recommended for commercial applications.",
    author: "Priya Malhotra",
    position: "Operations Director, Sunshine Hotels",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    content: "The solar home system we purchased from Devshree has been a game-changer during power outages. It's reliable, easy to use, and the installation team was knowledgeable and efficient. Great investment for our family.",
    author: "Amit Patel",
    position: "Homeowner, Bangalore",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    )
  }, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    )
  }, [])

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses and homeowners across India
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700 p-8 md:p-12 shadow-lg">
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-5 h-5 text-yellow-500 fill-yellow-500" 
                />
              ))}
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-200">
  “{testimonials[activeIndex].content}”
</p>

            </div>
            
            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                <Image 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-0">
            <button 
              onClick={prevSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white transition-colors dark:bg-gray-800/80 dark:hover:bg-gray-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <button 
              onClick={nextSlide}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md hover:bg-white transition-colors dark:bg-gray-800/80 dark:hover:bg-gray-800"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'w-8 bg-yellow-500' 
                    : 'w-2 bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}