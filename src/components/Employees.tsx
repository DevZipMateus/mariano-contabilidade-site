
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Jackson Pereira",
      position: "Contador – CRC: CE-026056-O/5",
      sector: "Setor de mentoria e suporte contábil",
      image: "/lovable-uploads/17f95454-5c14-4473-a5ce-ee0f4440bb6d.png",
      description: "Responsável pelo apoio técnico e estratégico para os contadores e as empresas, com orientações personalizadas, revisão de processos e atualizações normativas. Soluções práticas para o dia a dia do escritório contábil."
    },
    {
      id: 2,
      name: "Mariana Rodrigues",
      position: "Secretaria",
      sector: "Setor de atendimento ao cliente",
      image: "/lovable-uploads/c3737cad-82c3-4240-afc9-0421d8426ee5.png",
      description: "Responsável por acolher, orientar e acompanhar clientes em todas as etapas do serviço. Atua com foco em agilidade, clareza na comunicação e excelência no relacionamento, garantindo uma experiência humanizada e eficiente."
    },
    {
      id: 3,
      name: "Mariano Junior",
      position: "Contador – CRC: CE-014818/O-5",
      sector: "Setor Fiscal tributário",
      image: "/lovable-uploads/81a31972-7313-419e-a2c3-6ff86461c215.png",
      description: "Responsável pela apuração de impostos, entrega de obrigações acessórias e orientação sobre regimes tributários. Atua com foco na conformidade fiscal e no planejamento tributário estratégico para empresas de diversos portes."
    },
    {
      id: 4,
      name: "Paloma Mariano",
      position: "Contadora – CRC: CE-027945/O-5",
      sector: "Setor Administrativo e departamento pessoal",
      image: "/lovable-uploads/8d5c4d41-1288-4567-9011-1c047bb46d91.png",
      description: "Responsável pela gestão interna, organização de processos e rotinas trabalhistas. Atua garantindo eficiência operacional, conformidade legal e suporte completo ao cliente e à equipe."
    },
    {
      id: 5,
      name: "Ubiratan Oliveira",
      position: "Contador – CRC: CE-014574-O/8",
      sector: "Setor de Legalização",
      image: "/lovable-uploads/550b1856-b498-424e-b3d1-778a284729ec.png",
      description: "Responsável por abertura, alteração, regularização e baixa de empresas. Atua junto a órgãos públicos para garantir a conformidade legal do CNPJ, alvarás, licenças e registros necessários à atividade empresarial."
    }
  ];

  return (
    <section id="funcionarios" className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
            Nossa Equipe
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 xl:w-24 2xl:w-32 h-1 bg-blue-600 mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Conheça os profissionais dedicados que fazem da Mariano Contabilidade 
            uma referência em atendimento humanizado e excelência contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {employees.map(employee => (
            <Card key={employee.id} className="bg-white border-blue-200 hover:border-blue-400 transition-all duration-300 group h-full shadow-lg hover:shadow-xl">
              <CardContent className="p-3 sm:p-4 lg:p-6 xl:p-8 text-center h-full flex flex-col">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <div className="w-16 sm:w-20 lg:w-24 xl:w-32 2xl:w-36 h-16 sm:h-20 lg:h-24 xl:h-32 2xl:h-36 mx-auto mb-2 sm:mb-3 lg:mb-4 rounded-lg overflow-hidden transition-all shadow-lg">
                    <img 
                      src={employee.image} 
                      alt={employee.name} 
                      className="w-full h-full object-cover object-center" 
                      loading="lazy" 
                    />
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">
                      {employee.name}
                    </h3>
                    
                    <p className="text-blue-600 font-medium mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base xl:text-lg">
                      {employee.position}
                    </p>
                    
                    <p className="text-blue-500 font-medium mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base">
                      {employee.sector}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {employee.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 lg:mt-12 xl:mt-16">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 italic">
            "Uma equipe unida, comprometida com o seu sucesso"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employees;
