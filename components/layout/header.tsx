"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      
      {/* Mobile header bar with background */}
      <div className="flex md:hidden items-center justify-between h-20 px-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md">
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400 dark:text-yellow-400">Devshree</span>
            <span className="text-2xl font-bold ml-1 text-blue-700 dark:text-blue-700">Solar</span>
          </div>
        </Link>

        <div className="flex items-center">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-gray-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-yellow-400 dark:text-yellow-400">Devshree</span>
                <span className="text-2xl font-bold ml-1 text-blue-700 dark:text-blue-700">Solar</span>
              </div>
            </Link>
          </div>

          <div className="border-2 rounded-full bg-white/90 shadow-md dark:bg-gray-900/90 backdrop-blur-md border-yellow-400">   
            <div className="ml-10 flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isScrolled
                      ? 'text-gray-800 hover:text-yellow-600 dark:text-gray-200 dark:hover:text-yellow-400'
                      : 'text-gray-800 hover:text-yellow-600 dark:text-white dark:hover:text-yellow-400'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 "
                aria-label="Toggle theme"
              >
                {mounted && theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-yellow-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-yellow-400 dark:hover:bg-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
