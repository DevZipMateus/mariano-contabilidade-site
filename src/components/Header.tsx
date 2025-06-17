
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-2' : 'bg-black/80 backdrop-blur-sm py-2 sm:py-4'
    }`}>
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
            <picture>
              <source 
                media="(max-width: 640px)" 
                srcSet="/lovable-uploads/a2c0f4ea-e371-4050-a863-687d3a8d7cc9.png" 
                sizes="40px"
              />
              <img 
                src="/lovable-uploads/a2c0f4ea-e371-4050-a863-687d3a8d7cc9.png" 
                alt="Mariano Contabilidade Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain flex-shrink-0"
                loading="eager"
              />
            </picture>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white truncate">
                Mariano Contabilidade
              </h1>
              <p className="text-xs sm:text-sm text-amber-400 font-medium truncate">
                Contabilidade Humanizada
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm xl:text-base"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm xl:text-base"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('missao')}
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium text-sm xl:text-base"
            >
              Missão
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-amber-600 text-black px-4 xl:px-6 py-2 rounded-full hover:bg-amber-500 transition-colors font-medium text-sm xl:text-base"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 sm:space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('missao')}
                className="text-left text-gray-300 hover:text-amber-400 transition-colors font-medium"
              >
                Missão
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-amber-600 text-black px-6 py-2 rounded-full hover:bg-amber-500 transition-colors font-medium text-center mx-auto block w-fit"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
