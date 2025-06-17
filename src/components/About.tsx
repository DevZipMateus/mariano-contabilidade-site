
import React from 'react';
import { Building2, Heart, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Sobre a Mariano Contabilidade
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um escritório contábil que vai além dos números, oferecendo apoio completo 
            para o crescimento do seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Nossa História e Compromisso
            </h3>
            <p className="text-gray-300 leading-relaxed">
              A Mariano Contabilidade é um escritório localizado no coração de Fortaleza, 
              especializado em soluções contábeis para MEIs, pequenas empresas e negócios 
              do Simples Nacional.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Com uma equipe experiente, atendimento humanizado e um ambiente acolhedor, 
              oferecemos suporte completo para que empreendedores possam focar no crescimento 
              de seus negócios, enquanto cuidamos da parte burocrática.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nosso compromisso é com a organização, transparência e proximidade, entregando 
              não apenas números, mas segurança e tranquilidade para quem empreende.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-black" />
              </div>
              <h4 className="font-bold text-white mb-2">Localização Estratégica</h4>
              <p className="text-sm text-gray-300">No coração de Fortaleza</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h4 className="font-bold text-white mb-2">Atendimento Humanizado</h4>
              <p className="text-sm text-gray-300">Proximidade e acolhimento</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h4 className="font-bold text-white mb-2">Equipe Experiente</h4>
              <p className="text-sm text-gray-300">Profissionais qualificados</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl text-center border border-amber-600/20">
              <div className="bg-amber-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h4 className="font-bold text-white mb-2">Foco no Crescimento</h4>
              <p className="text-sm text-gray-300">Seu negócio em primeiro lugar</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 lg:p-12 text-black text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Especialistas em MEI e Simples Nacional
          </h3>
          <p className="text-black/80 text-lg max-w-3xl mx-auto">
            Traduzimos o universo contábil para uma linguagem simples, acessível e próxima 
            da realidade de quem está no comércio ou nos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
