'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    consultRequest: false
  })

  // Check if this is a consultation request from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.get('consult') === 'true') {
      setFormData(prev => ({ ...prev, consultRequest: true }))
    }
  }, [])

  // Load Calendly and manage skeleton loader
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = false // Load synchronously to ensure Calendly object exists
    document.head.appendChild(script)

    // Initialize Calendly after script loads
    script.onload = () => {
      const skeleton = document.getElementById('skeleton-loader')
      const embedDiv = document.getElementById('calendly-embed')
      
      if (skeleton && embedDiv) {
        // Poll for iframe to load and then hide skeleton
        const poll = () => {
          const iframe = embedDiv.querySelector('iframe')
          if (!iframe) {
            requestAnimationFrame(poll)
            return
          }
          iframe.addEventListener('load', () => {
            skeleton.remove()
          })
        }
        poll()
      }
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {formData.consultRequest ? 'Book Your Free Consultation' : 'Get In Touch'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {formData.consultRequest 
                ? 'Ready to transform your space? Let\'s discuss your project and explore how we can bring your vision to life.'
                : 'We\'d love to hear about your project and discuss how we can help create your dream space.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Calendly Widget */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {formData.consultRequest ? 'Schedule Your Consultation' : 'Book an Appointment'}
              </h2>
              
              {/* Calendly Container with Skeleton Loader */}
              <div className="relative min-h-[700px] bg-white rounded-lg border border-gray-200">
                {/* Skeleton Loader */}
                <div id="skeleton-loader" className="absolute inset-0 z-10 flex flex-col gap-2 p-6">
                  {/* Header */}
                  <div className="skeleton-header mb-4">
                    <div className="skeleton-shape h-7 w-1/3 bg-gradient-to-r from-gray-200 to-gray-300 rounded"></div>
                  </div>
                  
                  {/* Month Navigation */}
                  <div className="skeleton-month-nav flex justify-between items-center mb-5 px-2">
                    <div className="skeleton-nav-arrow w-4 h-4 rounded-full bg-gradient-to-br from-[#A7C957] to-[#8BB63C] opacity-20"></div>
                    <div className="skeleton-shape h-5 w-1/4 bg-gradient-to-r from-[#374151] to-[#6B7280] opacity-20 rounded"></div>
                    <div className="skeleton-nav-arrow w-4 h-4 rounded-full bg-gradient-to-br from-[#A7C957] to-[#8BB63C] opacity-20"></div>
                  </div>
                  
                  {/* Weekdays */}
                  <div className="skeleton-weekdays grid grid-cols-7 gap-1 mb-2 px-1">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="skeleton-weekday h-2 w-3/4 mx-auto bg-gradient-to-r from-[#6B7280] to-[#374151] opacity-25 rounded"></div>
                    ))}
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="skeleton-calendar-grid grid grid-cols-7 gap-1 flex-grow px-1">
                    {Array.from({ length: 42 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`skeleton-date-box h-4 rounded border relative overflow-hidden ${
                          i % 7 === 2 || i % 7 === 5 
                            ? 'bg-gradient-to-br from-[#E63973]/8 to-[#E63973]/4 border-[#E63973]/15' 
                            : 'bg-gradient-to-br from-gray-50 to-gray-200 border-[#374151]/8'
                        }`}
                      >
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A7C957]/10 to-transparent animate-pulse"
                          style={{ 
                            animation: `shimmer 3s infinite ease-in-out ${i * 0.1}s`,
                            left: '-100%',
                            animationName: 'shimmer'
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="skeleton-footer mt-7 px-2">
                    <div className="skeleton-shape h-3 w-full bg-gradient-to-r from-[#6B7280] to-[#374151] opacity-20 rounded"></div>
                  </div>
                </div>

                {/* Calendly inline widget */}
                <div id="calendly-embed" className="calendly-inline-widget" data-url="https://calendly.com/elizabeth-dctbstudio/30min?text_color=374151&primary_color=a7c957" style={{minWidth:'320px',height:'700px'}}></div>
              </div>

              {/* CSS Animations */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes shimmer {
                  0% { left: -100%; }
                  100% { left: 100%; }
                }
                
                .skeleton-shape {
                  position: relative;
                  overflow: hidden;
                  background: linear-gradient(
                    45deg,
                    rgba(167, 201, 87, 0.1) 0%,
                    rgba(167, 201, 87, 0.25) 50%,
                    rgba(167, 201, 87, 0.1) 100%
                  );
                }
                
                .skeleton-shape::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -100%;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(
                    45deg,
                    transparent 30%,
                    rgba(167, 201, 87, 0.1) 50%,
                    transparent 70%
                  );
                  animation: skeleton-shimmer 3s infinite ease-in-out;
                }
                
                @keyframes skeleton-shimmer {
                  0% { left: -100%; }
                  100% { left: 100%; }
                }
                
                .calendly-placeholder {
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  min-height: 400px;
                }
                
                #calendly-embed {
                  min-width: 220px;
                  width: 100%;
                }
              ` }} />
            </div>

            {/* Contact Info & Gallery */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Serving Tampa Bay Area<br />Florida</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@dctbstudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Work Preview */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Work</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/living-room.jpg"
                      alt="Recent project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/Foyer.jpg"
                      alt="Recent project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/hallway.jpg"
                      alt="Recent project"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-32 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/living-CU.jpg"
                      alt="Recent project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Budget-conscious solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    Professional project management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    10+ years of experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
