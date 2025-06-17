
import React from 'react';
import { Calculator, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mariano Contabilidade</h3>
                <p className="text-sm text-gray-300">Contabilidade Humanizada</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Mais que contabilidade. Apoio, presença e confiança. Especialistas em MEI e 
              Simples Nacional, oferecemos atendimento humanizado no coração de Fortaleza.
            </p>
            <p className="text-blue-400 font-medium italic">
              "Assumimos a contabilidade dos nossos clientes como se fosse nossa"
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('missao')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Missão e Valores
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">(85) 9 8238-4438</p>
                  <p className="text-xs text-gray-400">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">marianocontabilidade@hotmail.com</p>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Fortaleza - CE</p>
                  <p className="text-xs text-gray-400">No coração da cidade</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p>&copy; 2024 Mariano Contabilidade. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Feito com</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>para empreendedores</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            CNPJ: XX.XXX.XXX/XXXX-XX | CRC: XXXXX | 
            Responsável Técnico: [Nome do Responsável] - CRC XXXXX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
