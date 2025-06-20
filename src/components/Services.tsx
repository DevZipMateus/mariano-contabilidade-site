
import React from 'react';
import { FileText, Calculator, Building, Users, MapPin, Headphones, CheckCircle, Briefcase } from 'lucide-react';

const Services = () => {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Mariano Contabilidade.";
  const whatsappUrl = `https://wa.me/5585982384438?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: Building,
      title: "Abertura e Regularização de Empresas",
      description: "Processo completo de abertura de MEI, EIRELI, LTDA e regularização empresarial.",
      color: "bg-amber-600"
    },
    {
      icon: FileText,
      title: "Declaração do Imposto de Renda",
      description: "Pessoa Física e Jurídica com segurança e dentro dos prazos legais.",
      color: "bg-amber-600"
    },
    {
      icon: Calculator,
      title: "Emissão de Notas Fiscais",
      description: "Controle e emissão de notas fiscais e cumprimento de obrigações mensais.",
      color: "bg-amber-600"
    },
    {
      icon: Users,
      title: "Folha de Pagamento",
      description: "Gestão completa da folha de pagamento e obrigações trabalhistas.",
      color: "bg-amber-600"
    },
    {
      icon: MapPin,
      title: "Endereço Fiscal",
      description: "Serviços de endereço fiscal e escritório virtual para sua empresa.",
      color: "bg-amber-600"
    },
    {
      icon: Headphones,
      title: "Consultoria MEI",
      description: "Orientação especializada para microempreendedores individuais.",
      color: "bg-amber-600"
    },
    {
      icon: Briefcase,
      title: "Atendimento Personalizado",
      description: "Atendimento presencial e consultoria sob medida para seu negócio.",
      color: "bg-amber-600"
    },
    {
      icon: CheckCircle,
      title: "Simples Nacional",
      description: "Especialistas em enquadramento e gestão do Simples Nacional.",
      color: "bg-amber-600"
    }
  ];

  return (
    <section id="servicos" className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-black">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 max-w-4xl mx-auto px-4">
            Soluções contábeis completas para MEIs, pequenas empresas e negócios do Simples Nacional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-3 sm:p-4 lg:p-6 xl:p-8 rounded-xl border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`${service.color} p-1.5 sm:p-2 lg:p-3 xl:p-4 rounded-lg w-8 sm:w-10 lg:w-12 xl:w-16 h-8 sm:h-10 lg:h-12 xl:h-16 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 xl:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-4 sm:h-5 lg:h-6 xl:h-8 w-4 sm:w-5 lg:w-6 xl:w-8 text-black" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-white mb-1 sm:mb-2 lg:mb-3">{service.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-amber-600/20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                Por que escolher nossos serviços?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Especialização em MEI e Simples Nacional</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Conhecimento profundo das regras e benefícios destes regimes tributários.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Atendimento Presencial</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Relacionamento próximo e atendimento personalizado em nosso escritório.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Linguagem Simples</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Explicamos tudo de forma clara e acessível, sem complicações.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 sm:h-6 w-5 sm:w-6 text-amber-400 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">Cumprimento de Prazos</h4>
                    <p className="text-gray-300 text-xs sm:text-sm">Pontualidade e organização em todas as obrigações e entregas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-amber-600/20">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4">Precisa de ajuda?</h4>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer 
                com organização e tranquilidade.
              </p>
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center">
                  <div className="bg-amber-600 p-2 rounded-full mr-3 flex-shrink-0">
                    <picture>
                      <img 
                        src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png"
                        alt="WhatsApp"
                        className="h-3 sm:h-4 w-3 sm:w-4 object-contain"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base">Telefone/WhatsApp</p>
                    <p className="text-amber-400 text-sm sm:text-base">(85) 9 8238-4438</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-600 p-2 rounded-full mr-3 flex-shrink-0">
                    <FileText className="h-3 sm:h-4 w-3 sm:w-4 text-black" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm sm:text-base">E-mail</p>
                    <p className="text-amber-400 text-xs sm:text-sm break-all">marianocontabilidade@hotmail.com</p>
                  </div>
                </div>
              </div>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center text-sm sm:text-base"
              >
                <picture>
                  <img 
                    src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png"
                    alt="WhatsApp"
                    className="h-4 sm:h-5 w-4 sm:w-5 mr-2 object-contain"
                    loading="lazy"
                  />
                </picture>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
