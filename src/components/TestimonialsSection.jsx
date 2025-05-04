import React from 'react';

const testimonials = [
  {
    quote: "B2B ha transformado por completo nuestra forma de encontrar proveedores. En menos de una semana encontramos exactamente lo que necesitábamos.",
    author: "María Rodríguez",
    role: "Directora de Compras, TechSolutions Inc."
  },
  {
    quote: "Como proveedor, B2B me ha permitido conectar con clientes que realmente valoran nuestros servicios. Las ventas han aumentado un 40% desde que nos unimos.",
    author: "Carlos López",
    role: "CEO, Servicios Industriales López"
  },
  {
    quote: "La plataforma es intuitiva y el equipo de soporte siempre está disponible. Ha sido una inversión que ha valido completamente la pena para nuestro negocio.",
    author: "Laura Martínez",
    role: "Gerente General, Innovatech"
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que Nuestros Usuarios Dicen
          </h2>
          <p className="text-xl text-gray-600">
            Miles de empresas ya han encontrado el camino hacia el crecimiento a través de nuestra plataforma.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-6 text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}