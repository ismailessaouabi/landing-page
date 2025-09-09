import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAd, faAppleWhole, faCalendar } from '@fortawesome/free-solid-svg-icons'

export const Services = () => {
  const services = [
    {
      icon: faSearch,
      title: "SEO/SEM",
      description: "Boost your website's visibility and rankings with expert SEO strategies tailored to drive organic traffic and engagement.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: faAd,
      title: "Marketing",
      description: "Strategic process of promoting, selling, and distributing products or services to meet customer needs and drive business growth.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: faAppleWhole,
      title: "App Development",
      description: "Create innovative mobile and web applications with cutting-edge technology and user-centered design principles.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: faCalendar,
      title: "Web Development",
      description: "Build dynamic, responsive websites with modern frameworks and technologies for optimal user experience and performance.",
      gradient: "from-orange-500 to-red-600"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight">
            We Provide Best{' '}
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mx-auto mb-6"></div>
        </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          An advertising agency helps businesses promote their products or services by creating 
          strategic and creative campaigns that drive results
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
          >
            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
            
            {/* Icon Container */}
            <div className="relative">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="text-xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              <div className={`absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br ${service.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* CTA Button */}
              <button className={`
                relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r ${service.gradient} 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-lg
                focus:outline-none focus:ring-4 focus:ring-orange-200
                group-hover:shadow-xl
              `}>
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Decorative Corner */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.gradient} opacity-5 rounded-bl-3xl rounded-tr-2xl`}></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-20">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help grow your business with our expert services.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  )
}