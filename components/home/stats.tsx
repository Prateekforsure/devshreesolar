"use client"

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Stats data
const stats = [
  { value: 10000, label: "Solar Installations", symbol: "+" },
  { value: 50, label: "MW Capacity Installed", symbol: "+" },
  { value: 15, label: "Years of Experience", symbol: "+" },
  { value: 98, label: "Customer Satisfaction", symbol: "%" }
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) return

    const intervals = stats.map((stat, index) => {
      const duration = 2000 // animation duration in ms
      const steps = 30 // number of steps
      const stepValue = stat.value / steps
      let currentStep = 0

      return setInterval(() => {
        if (currentStep >= steps) {
          clearInterval(intervals[index])
          return
        }

        setCounts(prevCounts => {
          const newCounts = [...prevCounts]
          newCounts[index] = Math.round(stepValue * currentStep)
          return newCounts
        })

        currentStep++
      }, duration / steps)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We&apos;re driving the renewable energy revolution with impressive results
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                {counts[index]}
                <span>{stat.symbol}</span>
              </div>
              <p className="text-lg text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}