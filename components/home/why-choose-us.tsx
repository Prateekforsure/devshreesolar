import { CircleDollarSign, Leaf, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: CircleDollarSign,
    title: "Cost Effective",
    description: "Save on electricity bills with our energy-efficient solar lighting solutions that provide long-term savings."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reduce your carbon footprint with clean, renewable solar energy that helps protect our environment."
  },
  {
    icon: Clock,
    title: "Long Lifespan",
    description: "Our products are built to last with high-quality materials and rigorous quality control standards."
  },
  {
    icon: Shield,
    title: "Reliable Support",
    description: "Enjoy peace of mind with our comprehensive warranty and dedicated customer support team."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Devshree Solar
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide innovative solar solutions backed by quality, reliability, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full inline-block mb-4">
                <feature.icon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}