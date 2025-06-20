
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const Mission = () => {
  return (
    <section id="missao" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Missão, Visão e Valores
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Os princípios que guiam nosso trabalho e nosso compromisso com você
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-amber-600/20">
            <div className="bg-amber-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Target className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
            <p className="text-gray-300 leading-relaxed">
              Oferecer soluções contábeis com seriedade, clareza e acolhimento, contribuindo 
              para o crescimento sustentável de micro e pequenas empresas. Atuar com proximidade 
              e comprometimento, traduzindo o mundo contábil para a linguagem do empreendedor.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-amber-600/20">
            <div className="bg-amber-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Eye className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
            <p className="text-gray-300 leading-relaxed">
              Ser reconhecida como referência em contabilidade humanizada no Ceará, 
              especialmente para MEIs e empresas do Simples Nacional, sendo lembrada 
              pela confiança, excelência e relacionamento próximo com o cliente.
            </p>
          </div>

          {/* Valores Preview */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-amber-600/20">
            <div className="bg-amber-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Valores</h3>
            <p className="text-gray-300 leading-relaxed">
              Ética, comprometimento, clareza, empatia, pontualidade, proximidade 
              e atualização constante. Princípios que norteiam cada atendimento 
              e cada serviço prestado.
            </p>
          </div>
        </div>

        {/* Valores Detalhados */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-amber-600/20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
            Nossos Valores em Detalhes
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/20">
              <h4 className="font-bold text-amber-400 mb-2">Ética</h4>
              <p className="text-gray-300 text-sm">
                Atuamos com integridade e responsabilidade em cada serviço prestado.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/20">
              <h4 className="font-bold text-amber-400 mb-2">Comprometimento</h4>
              <p className="text-gray-300 text-sm">
                Assumimos a contabilidade dos nossos clientes como se fosse nossa.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/20">
              <h4 className="font-bold text-amber-400 mb-2">Clareza</h4>
              <p className="text-gray-300 text-sm">
                Explicamos o complexo de forma simples e acessível.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/20">
              <h4 className="font-bold text-amber-400 mb-2">Empatia</h4>
              <p className="text-gray-300 text-sm">
                Respeitamos a jornada de cada cliente com escuta ativa e atendimento acolhedor.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/20">
              <h4 className="font-bold text-amber-400 mb-2">Pontualidade</h4>
              <p className="text-gray-300 text-sm">
                Cumprimos prazos e obrigações com rigor e organização.
              </p>
            </div>

            <div className="bg-gray-900/50 p-6 rounded-xl border border-amber-600/20">
              <h4 className="font-bold text-amber-400 mb-2">Proximidade</h4>
              <p className="text-gray-300 text-sm">
                Mantemos um atendimento direto, humanizado e sempre disponível.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gray-900/50 p-6 rounded-xl border border-amber-600/20 text-center">
            <h4 className="font-bold text-amber-400 mb-2">Atualização Constante</h4>
            <p className="text-gray-300">
              Buscamos conhecimento contínuo para entregar sempre o melhor serviço aos nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
