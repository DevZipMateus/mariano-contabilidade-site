
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const OfficeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const officeImages = [
    {
      id: 1,
      src: "/lovable-uploads/b379372c-af0e-40c8-9ee7-a0561f6750a8.png",
      alt: "Escritório Mariano Contabilidade - Ambiente de trabalho"
    },
    {
      id: 2,
      src: "/lovable-uploads/5affc37c-c4d3-4d83-9c1c-4d99c1e3ed22.png",
      alt: "Equipe Mariano Contabilidade no escritório"
    },
    {
      id: 3,
      src: "/lovable-uploads/a722bd15-bce2-4dc0-9df8-f58a884497cd.png",
      alt: "Equipe Mariano Contabilidade reunida"
    },
    {
      id: 4,
      src: "/lovable-uploads/a0615a0e-25e5-4a4d-a337-cdd09af39d1d.png",
      alt: "Espaço de atendimento do escritório"
    },
    {
      id: 5,
      src: "/lovable-uploads/07655888-322a-4353-822d-10d67240cca4.png",
      alt: "Área de trabalho da equipe"
    },
    {
      id: 6,
      src: "/lovable-uploads/4fd04c1a-47d2-4adc-b5bd-62bcf9e9d8a2.png",
      alt: "Vista geral do escritório"
    },
    {
      id: 7,
      src: "/lovable-uploads/141a9e93-c0ee-4d7c-9715-779bede35e85.png",
      alt: "Fachada do escritório Mariano Contabilidade"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === officeImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [officeImages.length]);

  return (
    <section id="escritorio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso Escritório
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Conheça nossa estrutura física e o ambiente onde trabalhamos 
            diariamente para oferecer o melhor atendimento contábil.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {officeImages.map((image, index) => (
                <CarouselItem 
                  key={image.id}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                  style={{
                    display: index === currentIndex ? 'block' : 'none'
                  }}
                >
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                    <picture>
                      <source 
                        media="(max-width: 640px)" 
                        srcSet={image.src} 
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Indicadores do carrossel */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {officeImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-500 scale-110' 
                    : 'bg-gray-500 hover:bg-amber-400'
                }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-300 italic">
            "Um ambiente profissional e acolhedor para atender nossos clientes"
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfficeCarousel;
