"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const slides = [
  {
    image: "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg",
    title: "Powering a Sustainable Future",
    subtitle: "Innovative solar lighting solutions for a brighter tomorrow",
  },
  {
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    title: "Eco-Friendly Illumination",
    subtitle: "Reduce your carbon footprint with our solar lighting systems",
  },
  {
    image: "https://images.pexels.com/photos/8853508/pexels-photo-8853508.jpeg",
    title: "Reliable Power Solutions",
    subtitle: "Trusted by businesses and communities across India",
  }
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="relative h-screen">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <Image 
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 transition-all duration-700">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-3 px-6 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-6 rounded-md font-medium inline-flex items-center transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-yellow-500' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}