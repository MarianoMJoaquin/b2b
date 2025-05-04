import React from 'react';

const steps = [
  {
    number: "01",
    title: "Regístrate en nuestra plataforma",
    description: "Crea una cuenta gratuita como cliente o proveedor en solo unos minutos."
  },
  {
    number: "02",
    title: "Define tus necesidades",
    description: "Especifica qué productos o servicios necesitas para tu negocio con detalle."
  },
  {
    number: "03",
    title: "Conecta con proveedores",
    description: "Recibe propuestas de proveedores verificados que cumplen con tus requisitos."
  },
  {
    number: "04",
    title: "Colabora y crece",
    description: "Establece relaciones comerciales duraderas y haz crecer tu negocio."
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Simplificamos el proceso de encontrar y conectar con los proveedores adecuados para tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="text-4xl font-bold text-blue-500 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute mt-6 ml-16 translate-x-full">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#0ea5e9"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/register" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl">
            Comenzar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}