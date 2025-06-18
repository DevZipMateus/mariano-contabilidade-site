
import React from 'react';
import { CheckCircle, Users, Clock, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white pt-20 lg:pt-24">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Contabilidade <span className="text-blue-600">humanizada</span> 
                <br />para seu negócio
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Especialistas em MEI e Simples Nacional em Fortaleza. 
                Atendimento personalizado e soluções que fazem a diferença.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Nossos serviços
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-lg"
              >
                Fale conosco
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Atendimento Humanizado</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Equipe Experiente</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Pontualidade</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">Transparência</p>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800">Por que escolher a Mariano Contabilidade?</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Especialistas em MEI e Simples Nacional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Atendimento presencial e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Localizado no coração de Fortaleza</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">Linguagem simples e acessível</span>
                  </li>
                </ul>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
                  <p className="text-lg italic text-blue-800 font-medium">
                    "Assumimos a contabilidade dos nossos clientes como se fosse nossa"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
