
import React from 'react';
import { Building2, Heart, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Sobre a Mariano Contabilidade
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 max-w-4xl mx-auto px-4">
            Um escritório contábil que vai além dos números, oferecendo apoio completo 
            para o crescimento do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white">
              Nossa História e Compromisso
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
              A Mariano Contabilidade é um escritório localizado no coração de Fortaleza, 
              especializado em soluções contábeis para MEIs, pequenas empresas e negócios 
              do Simples Nacional.
            </p>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
              Com uma equipe experiente, atendimento humanizado e um ambiente acolhedor, 
              oferecemos suporte completo para que empreendedores possam focar no crescimento 
              de seus negócios, enquanto cuidamos da parte burocrática.
            </p>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
              Nosso compromisso é com a organização, transparência e proximidade, entregando 
              não apenas números, mas segurança e tranquilidade para quem empreende.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-8 sm:w-10 lg:w-12 xl:w-16 2xl:w-20 h-8 sm:h-10 lg:h-12 xl:h-16 2xl:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                <Building2 className="h-4 sm:h-5 lg:h-6 xl:h-8 2xl:h-10 w-4 sm:w-5 lg:w-6 xl:w-8 2xl:w-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">Localização Estratégica</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300">No coração de Fortaleza</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-8 sm:w-10 lg:w-12 xl:w-16 2xl:w-20 h-8 sm:h-10 lg:h-12 xl:h-16 2xl:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                <Heart className="h-4 sm:h-5 lg:h-6 xl:h-8 2xl:h-10 w-4 sm:w-5 lg:w-6 xl:w-8 2xl:w-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">Atendimento Humanizado</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300">Proximidade e acolhimento</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-8 sm:w-10 lg:w-12 xl:w-16 2xl:w-20 h-8 sm:h-10 lg:h-12 xl:h-16 2xl:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                <Users className="h-4 sm:h-5 lg:h-6 xl:h-8 2xl:h-10 w-4 sm:w-5 lg:w-6 xl:w-8 2xl:w-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">Equipe Experiente</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300">Profissionais qualificados</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 xl:p-8 2xl:p-10 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-full w-8 sm:w-10 lg:w-12 xl:w-16 2xl:w-20 h-8 sm:h-10 lg:h-12 xl:h-16 2xl:h-20 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 xl:mb-6">
                <TrendingUp className="h-4 sm:h-5 lg:h-6 xl:h-8 2xl:h-10 w-4 sm:w-5 lg:w-6 xl:w-8 2xl:w-10 text-black" />
              </div>
              <h4 className="font-bold text-white mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">Foco no Crescimento</h4>
              <p className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300">Seu negócio em primeiro lugar</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16 text-black text-center">
          <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Especialistas em MEI e Simples Nacional
          </h3>
          <p className="text-black/80 text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl max-w-4xl mx-auto">
            Traduzimos o universo contábil para uma linguagem simples, acessível e próxima 
            da realidade de quem está no comércio ou nos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
