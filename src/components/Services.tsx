
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
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções contábeis completas para MEIs, pequenas empresas e negócios do Simples Nacional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-amber-600/20 hover:border-amber-600/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`${service.color} p-3 rounded-lg w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-amber-600/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Por que escolher nossos serviços?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Especialização em MEI e Simples Nacional</h4>
                    <p className="text-gray-300 text-sm">Conhecimento profundo das regras e benefícios destes regimes tributários.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Atendimento Presencial</h4>
                    <p className="text-gray-300 text-sm">Relacionamento próximo e atendimento personalizado em nosso escritório.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Linguagem Simples</h4>
                    <p className="text-gray-300 text-sm">Explicamos tudo de forma clara e acessível, sem complicações.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Cumprimento de Prazos</h4>
                    <p className="text-gray-300 text-sm">Pontualidade e organização em todas as obrigações e entregas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-amber-600/20">
              <h4 className="text-xl font-bold text-white mb-4">Precisa de ajuda?</h4>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer 
                com organização e tranquilidade.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="bg-amber-600 p-2 rounded-full mr-3">
                    <img 
                      src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png"
                      alt="WhatsApp"
                      className="h-4 w-4"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telefone/WhatsApp</p>
                    <p className="text-amber-400">(85) 9 8238-4438</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-600 p-2 rounded-full mr-3">
                    <FileText className="h-4 w-4 text-black" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">E-mail</p>
                    <p className="text-amber-400">marianocontabilidade@hotmail.com</p>
                  </div>
                </div>
              </div>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png"
                  alt="WhatsApp"
                  className="h-5 w-5 mr-2"
                />
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
