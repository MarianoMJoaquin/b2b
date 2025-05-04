import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 -z-10 opacity-20">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-300 to-blue-600"></div>
        </div>
        <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3 -z-10 opacity-20">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-gray-300 to-gray-600"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Conectamos <span className="text-blue-600">Negocios</span> con los <span className="text-blue-600">Mejores Proveedores</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-xl">
              La plataforma B2B que simplifica la búsqueda de proveedores de calidad para tu negocio. Encuentra los mejores servicios y productos para tu empresa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/register?type=client" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Buscar Proveedores
              </a>
              <a href="/register?type=provider" className="px-8 py-4 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors shadow-md">
                Convertirme en Proveedor
              </a>
            </div>
            <div className="mt-12">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                  ))}
                </div>
                <span className="ml-4 text-secondary-600 font-medium">
                  +1,000 empresas confían en nosotros
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-xl">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-gray-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden">
                <div className="bg-blue-700 h-12 flex items-center px-5">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gray-200 rounded"></div>
                      <div className="h-24 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-6 bg-blue-200 rounded-full w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}