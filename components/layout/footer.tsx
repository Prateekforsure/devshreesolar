import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-yellow-400">Devshree</span>
              <span className="text-xl font-bold ml-1 text-blue-400">Solar</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of solar energy solutions with a commitment to 
              sustainability and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-yellow-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-yellow-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-yellow-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/solar-street-lights" className="text-gray-300 hover:text-yellow-400 transition">
                  Solar Street Lights
                </Link>
              </li>
              <li>
                <Link href="/products/solar-panels" className="text-gray-300 hover:text-yellow-400 transition">
                  Solar Panels
                </Link>
              </li>
              <li>
                <Link href="/products/solar-inverters" className="text-gray-300 hover:text-yellow-400 transition">
                  Solar Inverters
                </Link>
              </li>
              <li>
                <Link href="/products/solar-water-heaters" className="text-gray-300 hover:text-yellow-400 transition">
                  Solar Water Heaters
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">123 Solar Street, Green City, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info@devshreesolar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Devshree Solar Lights Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}