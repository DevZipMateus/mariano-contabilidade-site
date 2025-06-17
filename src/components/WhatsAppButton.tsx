
import React from 'react';

const WhatsAppButton = () => {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Mariano Contabilidade.";
  const whatsappUrl = `https://wa.me/5585982384438?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 hover:scale-110 transition-all duration-300 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/ba6eac11-1b40-4b7a-80ad-b6a31ec599fc.png"
        alt="WhatsApp"
        className="h-16 w-16 drop-shadow-lg"
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale conosco no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
