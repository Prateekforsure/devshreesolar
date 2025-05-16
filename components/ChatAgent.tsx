"use client"

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, Send, X, Phone, MapPin, ShoppingBag, HelpCircle, Mail, Sun } from 'lucide-react'

interface Message {
  type: 'user' | 'agent'
  content: string
  timestamp: Date
}

interface QuickOption {
  icon: JSX.Element
  label: string
  response: string[]
}

const quickOptions: QuickOption[] = [
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Contact Info",
    response: [
      "📞 Phone: +91 98765 43210",
      "📱 WhatsApp: +91 12345 67890",
      "📧 Email: info@devshreesolar.com",
      "⏰ Mon-Sat: 9 AM - 6 PM"
    ]
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Address",
    response: [
      "🏢 Devshree Solar Lights Pvt. Ltd.",
      "123 Solar Street, Green City",
      "Jaipur, Rajasthan 302001"
    ]
  },
  {
    icon: <ShoppingBag className="w-4 h-4" />,
    label: "Products",
    response: [
      "Our main products:",
      "🌟 Solar Street Lights",
      "☀️ Solar Panels",
      "🔌 Solar Inverters",
      "💧 Solar Water Heaters"
    ]
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Enquiry",
    response: [
      "Contact us for enquiries:",
      "📱 Sales: +91 98765 43210",
      "📧 Email: sales@devshreesolar.com",
      "💬 WhatsApp: +91 12345 67890"
    ]
  },
  {
    icon: <HelpCircle className="w-4 h-4" />,
    label: "Support",
    response: [
      "🛠️ Technical Support:",
      "📞 +91 12345 67890",
      "📧 support@devshreesolar.com",
      "⚡ 24/7 Emergency: +91 90909 90909"
    ]
  }
]

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isTyping, setIsTyping] = useState(false)
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          type: 'agent',
          content: "नमस्ते! I'm Prateek. Please select an option below for assistance.",
          timestamp: new Date()
        }
      ])
    }
    scrollToBottom()
  }, [isOpen, messages])

  const simulateTyping = (content: string[]) => {
    setIsTyping(true)
    setTimeout(() => {
      const agentMessage: Message = {
        type: 'agent',
        content: content.join('\n'),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 500)
  }

  const handleQuickOption = (option: QuickOption) => {
    const userMessage: Message = {
      type: 'user',
      content: option.label,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    simulateTyping(option.response)
  }

  return (
    <div className="fixed bottom-8 right-6 z-50">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[300px] bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 scale-100 opacity-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-3 text-white">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Sun className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h3 className="font-bold">Prateek</h3>
                <p className="text-xs text-yellow-100">Solar Expert</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[300px] overflow-y-auto p-3 space-y-3 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                  <p className="text-[10px] mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="p-2 bg-gray-50 border-t border-gray-300 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ">
            <div className="grid grid-cols-3 gap-2">
              {quickOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickOption(option)}
                  className="flex flex-col items-center justify-center p-2  rounded-lg text-xs border border-gray-200 hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-700 transition-colors"
                >
                  {option.icon}
                  <span className="mt-1">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}