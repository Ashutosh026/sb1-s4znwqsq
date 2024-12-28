import React from 'react';
import { Palette, Ruler, Box, Users, Home, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Consultation",
    description: "One-on-one design consultation to understand your vision, style preferences, and requirements.",
    price: "Free"
  },
  {
    icon: Ruler,
    title: "2D Design",
    description: "Detailed 2D floor plans, elevations, and layout designs for your space.",
    price: "₹15/sq.ft"
  },
  {
    icon: Box,
    title: "3D Visualization",
    description: "Photorealistic 3D renderings to help you visualize your space before execution.",
    price: "₹25/sq.ft"
  },
  {
    icon: Home,
    title: "Full Service Design",
    description: "End-to-end interior design service including concept, execution, and styling.",
    price: "Custom Quote"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From initial concept to final styling, we offer comprehensive interior design services
            tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className={`font-semibold ${service.price === 'Free' ? 'text-green-600' : 'text-indigo-600'}`}>
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}