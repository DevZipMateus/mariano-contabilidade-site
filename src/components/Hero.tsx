
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
    <section id="inicio" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 lg:pt-24">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Mais que <span className="text-amber-400">contabilidade</span>
              </h1>
              <p className="text-xl lg:text-2xl text-amber-400 font-medium">
                Apoio, presença e confiança
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Especialistas em MEI e Simples Nacional em Fortaleza. 
                Atendimento humanizado e soluções completas para que você 
                foque no crescimento do seu negócio.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('servicos')}
                className="bg-amber-600 text-black px-8 py-3 rounded-full hover:bg-amber-500 transition-colors font-medium text-lg"
              >
                Conheça nossos serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="border-2 border-amber-600 text-amber-400 px-8 py-3 rounded-full hover:bg-amber-600 hover:text-black transition-colors font-medium text-lg"
              >
                Fale conosco
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-amber-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 border border-amber-600/30">
                  <CheckCircle className="h-8 w-8 text-amber-400" />
                </div>
                <p className="text-sm font-medium text-gray-300">Atendimento Humanizado</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 border border-amber-600/30">
                  <Users className="h-8 w-8 text-amber-400" />
                </div>
                <p className="text-sm font-medium text-gray-300">Equipe Experiente</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 border border-amber-600/30">
                  <Clock className="h-8 w-8 text-amber-400" />
                </div>
                <p className="text-sm font-medium text-gray-300">Pontualidade</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2 border border-amber-600/30">
                  <Shield className="h-8 w-8 text-amber-400" />
                </div>
                <p className="text-sm font-medium text-gray-300">Transparência</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 text-white relative overflow-hidden border border-amber-600/20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjQ1LDE1OCwxMSwwLjEpIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">Por que escolher a Mariano Contabilidade?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Especialistas em MEI e Simples Nacional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Atendimento presencial e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Localizado no coração de Fortaleza</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Linguagem simples e acessível</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-amber-900/20 rounded-lg border border-amber-600/30">
                  <p className="text-sm italic text-amber-300">
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
