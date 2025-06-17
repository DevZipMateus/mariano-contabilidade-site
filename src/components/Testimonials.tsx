
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Charles Nobre Franco",
      handle: "@suagaragemoficial",
      text: "Desde 2013, a equipe da Mariano Contabilidade tem sido uma parceira fundamental na minha jornada. Sou muito grato pelo profissionalismo, dedicação e compromisso com que sempre conduziram tudo. Foram anos de confiança, crescimento e muito trabalho — e saber que posso contar com vocês faz toda a diferença. Obrigado por estarem sempre presentes com atenção e excelência. Que nossa parceria continue rendendo muitos frutos!"
    },
    {
      name: "Tatiano Ribeiro",
      handle: "@ribeiromoveis_projetados",
      text: "Estou completamente satisfeito com o serviço de contabilidade que recebi. Desde o início, a equipe foi profissional, atenciosa e extremamente competente. Esclareceram todas as minhas dúvidas com paciência, me orientaram com excelência sobre finanças e planejamento, e contribuíram diretamente para a organização e o crescimento da minha empresa. A agilidade e a precisão no atendimento me passaram muita confiança. Recomendo a quem busca um serviço contábil sério, transparente e comprometido."
    },
    {
      name: "Ciro Mariano",
      handle: "@profciromariano",
      text: "Comecei minha vida profissional na Mariano Contabilidade e foi lá que construí a base que me levou até onde estou hoje. Aprendi muito sobre Departamento Pessoal e ganhei experiência que me abriu portas. Hoje atuo na área de educação, formando novos profissionais, e sou muito grato por tudo que vivi nesse início. A Mariano foi mais que um primeiro emprego — foi o início de uma trajetória com propósito."
    },
    {
      name: "Noeliza Almeida",
      handle: "@hojepodece",
      text: "Escolher a Mariano Contabilidade foi uma das melhores decisões que já tomei, me orientaram de forma clara e objetiva e dentro da legalidade. Profissionais atenciosos, comprometidos e sempre disponíveis para tirar dúvidas e ajudar."
    },
    {
      name: "Camila Mariane",
      handle: "@marielasoficial",
      text: "Com a Mariano contabilidade finalmente consegui colocar em ordem as questões financeiras da empresa, me salvou, super de confiança!!"
    }
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-16 lg:py-20 bg-gray-900/50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Depoimentos
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Veja o que nossos clientes dizem sobre nossa contabilidade humanizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 hover:-translate-y-1 group relative"
            >
              <Quote className="h-6 sm:h-8 w-6 sm:w-8 text-amber-400 mb-3 sm:mb-4 opacity-50" />
              
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic line-clamp-6">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="bg-amber-600/20 p-1.5 sm:p-2 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                  <Star className="h-3 sm:h-4 w-3 sm:w-4 text-amber-400" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-white text-xs sm:text-sm truncate">{testimonial.name}</h4>
                  <p className="text-amber-400 text-xs truncate">{testimonial.handle}</p>
                </div>
              </div>

              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-amber-600/20 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Faça parte da nossa família de clientes satisfeitos
            </h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Junte-se a centenas de empreendedores que confiam na Mariano Contabilidade 
              para cuidar da parte contábil de seus negócios.
            </p>
            <a
              href="https://wa.me/5585982384438?text=Olá! Gostaria de conhecer os serviços da Mariano Contabilidade."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base"
            >
              <picture>
                <img 
                  src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png"
                  alt="WhatsApp"
                  className="h-4 sm:h-5 w-4 sm:w-5 mr-2 object-contain"
                  loading="lazy"
                />
              </picture>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
