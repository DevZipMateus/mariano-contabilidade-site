
import React from 'react';
import { CheckCircle, Users, Clock, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-16 sm:pt-20 lg:pt-24 xl:pt-28 2xl:pt-32">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-10 text-center lg:text-left">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                Mais que <span className="text-amber-400">contabilidade</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-amber-400 font-medium">
                Apoio, presença e confiança
              </p>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Especialistas em MEI e Simples Nacional em Fortaleza. 
                Atendimento humanizado e soluções completas para que você 
                foque no crescimento do seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-amber-600 text-black px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 lg:py-4 rounded-full hover:bg-amber-500 transition-colors font-medium text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-auto"
              >
                Conheça nossos serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="border-2 border-amber-600 text-amber-400 px-4 sm:px-6 lg:px-8 xl:px-10 py-2 sm:py-3 lg:py-4 rounded-full hover:bg-amber-600 hover:text-black transition-colors font-medium text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-auto"
              >
                Fale conosco
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 pt-4 sm:pt-6 lg:pt-8">
              <div className="text-center">
                <div className="bg-amber-900/30 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3 border border-amber-600/30">
                  <CheckCircle className="h-4 sm:h-5 lg:h-6 xl:h-8 w-4 sm:w-5 lg:w-6 xl:w-8 text-amber-400" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-gray-300 leading-tight">Atendimento Humanizado</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3 border border-amber-600/30">
                  <Users className="h-4 sm:h-5 lg:h-6 xl:h-8 w-4 sm:w-5 lg:w-6 xl:w-8 text-amber-400" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-gray-300 leading-tight">Equipe Experiente</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3 border border-amber-600/30">
                  <Clock className="h-4 sm:h-5 lg:h-6 xl:h-8 w-4 sm:w-5 lg:w-6 xl:w-8 text-amber-400" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-gray-300 leading-tight">Pontualidade</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-10 sm:w-12 lg:w-16 xl:w-20 h-10 sm:h-12 lg:h-16 xl:h-20 flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3 border border-amber-600/30">
                  <Shield className="h-4 sm:h-5 lg:h-6 xl:h-8 w-4 sm:w-5 lg:w-6 xl:w-8 text-amber-400" />
                </div>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-gray-300 leading-tight">Transparência</p>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-12 text-white relative overflow-hidden border border-amber-600/20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjQ1LDE1OCwxMSwwLjEpIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 text-amber-400">Por que escolher a Mariano Contabilidade?</h3>
                <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 sm:h-5 lg:h-6 xl:h-7 w-4 sm:w-5 lg:w-6 xl:w-7 text-amber-400 mr-2 sm:mr-3 lg:mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Especialistas em MEI e Simples Nacional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 sm:h-5 lg:h-6 xl:h-7 w-4 sm:w-5 lg:w-6 xl:w-7 text-amber-400 mr-2 sm:mr-3 lg:mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Atendimento presencial e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 sm:h-5 lg:h-6 xl:h-7 w-4 sm:w-5 lg:w-6 xl:w-7 text-amber-400 mr-2 sm:mr-3 lg:mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Localizado no coração de Fortaleza</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 sm:h-5 lg:h-6 xl:h-7 w-4 sm:w-5 lg:w-6 xl:w-7 text-amber-400 mr-2 sm:mr-3 lg:mr-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Linguagem simples e acessível</span>
                  </li>
                </ul>
                <div className="mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 lg:p-6 xl:p-8 bg-amber-900/20 rounded-lg border border-amber-600/30">
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl italic text-amber-300">
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
