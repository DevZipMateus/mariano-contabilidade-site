import React from 'react';
import { Phone, Mail, MapPin, Heart, Instagram, Users } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-black text-white py-8 sm:py-12 border-t border-amber-600/20">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <picture>
                <img 
                  src="/lovable-uploads/a2c0f4ea-e371-4050-a863-687d3a8d7cc9.png" 
                  alt="Mariano Contabilidade Logo" 
                  className="h-8 sm:h-10 w-auto object-contain"
                  loading="lazy"
                />
              </picture>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Mariano Contabilidade</h3>
                <p className="text-xs sm:text-sm text-amber-400">Contabilidade Humanizada</p>
              </div>
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Mais que contabilidade. Apoio, presença e confiança. Especialistas em MEI e 
              Simples Nacional, oferecemos atendimento humanizado no coração de Fortaleza.
            </p>
            <p className="text-amber-400 font-medium italic text-sm sm:text-base">
              "Assumimos a contabilidade dos nossos clientes como se fosse nossa"
            </p>
            
            {/* Instagram Link */}
            <div className="mt-4">
              <a 
                href="https://www.instagram.com/marianocontabilidades?igsh=Ynhwa2d4ZDh0MnFu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Instagram className="h-4 sm:h-5 w-4 sm:w-5" />
                <span className="text-sm sm:text-base">@marianocontabilidades</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('missao')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Missão e Valores
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('funcionarios')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Nossa Equipe
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('escritorio')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Nosso Escritório
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('depoimentos')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-amber-400 transition-colors text-left text-sm sm:text-base">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contato</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <Phone className="h-3 sm:h-4 w-3 sm:w-4 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">(85) 9 8238-4438</p>
                  <p className="text-xs text-gray-500">WhatsApp disponível</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-3 sm:h-4 w-3 sm:w-4 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm break-all">marianocontabilidade@hotmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-3 sm:h-4 w-3 sm:w-4 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">Fortaleza - CE</p>
                  <p className="text-xs text-gray-500">No coração da cidade</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsáveis Técnicos */}
        <div className="mt-8 sm:mt-10 border-t border-gray-800 pt-6 sm:pt-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="h-5 w-5 text-amber-400" />
              <h4 className="text-lg sm:text-xl font-bold text-white">Responsáveis Técnicos</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <p className="text-amber-400 font-medium text-sm sm:text-base">Mariano Junior</p>
                <p className="text-gray-300 text-xs sm:text-sm">CRC: 014818</p>
              </div>
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <p className="text-amber-400 font-medium text-sm sm:text-base">Paloma Mariano</p>
                <p className="text-gray-300 text-xs sm:text-sm">CRC: CE-027945/O</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-6 sm:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            <p>© 2025 Mariano Contabilidade. Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center text-gray-400 text-xs sm:text-sm">
            <span>Feito com</span>
            <Heart className="h-3 sm:h-4 w-3 sm:w-4 text-red-500 mx-1" />
            <span>para empreendedores</span>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-xs text-gray-500">
            CNPJ: XX.XXX.XXX/XXXX-XX | 
            Responsáveis Técnicos: Mariano Junior - CRC 014818 | Paloma Mariano - CRC CE-027945/O
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
