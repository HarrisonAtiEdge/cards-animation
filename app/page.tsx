"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Star, Users, Zap } from "lucide-react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform built for speed and efficiency.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team using our advanced collaboration tools and real-time features.",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Premium Quality",
      description: "Get access to premium features and top-tier quality that exceeds industry standards.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="text-blue-600"> Digital Experience</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover the power of innovation with our cutting-edge platform designed to elevate your business to new
            heights.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Animated Cards Section */}
      <section className="relative px-4 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make us the preferred choice for thousands of businesses worldwide.
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative h-96 flex items-center justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute w-80 bg-white rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transform: isVisible
                    ? `translateX(${(index - 1) * 320}px) translateY(0px) rotate(90deg)`
                    : `translateX(0px) translateY(128px) rotate(${-45 + index * 45}deg)`,
                  transitionDelay: `${index * 200}ms`,
                }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
