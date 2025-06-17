
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Jackson",
      position: "Contador - Setor de Suporte e Mentoria",
      image: "/lovable-uploads/58eba7ca-3554-4b4f-953a-16fc6603f4ef.png",
      description: "Especialista em contabilidade empresarial com mais de 15 anos de experiência."
    },
    {
      id: 2,
      name: "Mariana",
      position: "Setor de Atendimento ao Cliente",
      image: "/lovable-uploads/e3746a72-5bbc-4cc9-ab30-8bcca99e20eb.png",
      description: "Responsável pelo atendimento ao cliente e processamento de documentos."
    },
    {
      id: 3,
      name: "Mariano Junior",
      position: "Contador - Setor Fiscal",
      image: "/lovable-uploads/09a23d1e-f4a6-4d37-b827-b54c416ba0dc.png",
      description: "Especialista em MEI e Simples Nacional, focado em pequenas empresas."
    },
    {
      id: 4,
      name: "Paloma Mariano",
      position: "Setor Pessoal",
      image: "/lovable-uploads/83aab254-deb2-433f-a31a-e3d9dce47a4d.png",
      description: "Responsável pela parte fiscal e tributária dos nossos clientes."
    },
    {
      id: 5,
      name: "Ubiratan",
      position: "Setor Legalização",
      image: "/lovable-uploads/6914000a-2e95-4f6b-84b2-bd694b640489.png",
      description: "Consultor especializado em planejamento tributário e estratégias fiscais."
    }
  ];

  return (
    <section id="funcionarios" className="py-8 sm:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-12">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
            Nossa Equipe
          </h2>
          <div className="w-12 sm:w-16 lg:w-20 xl:w-24 2xl:w-32 h-1 bg-amber-500 mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Conheça os profissionais dedicados que fazem da Mariano Contabilidade 
            uma referência em atendimento humanizado e excelência contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {employees.map((employee) => (
            <Card key={employee.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-3 sm:p-4 lg:p-6 xl:p-8 text-center">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <Avatar className="w-16 sm:w-20 lg:w-24 xl:w-32 2xl:w-36 h-16 sm:h-20 lg:h-24 xl:h-32 2xl:h-36 mx-auto mb-2 sm:mb-3 lg:mb-4 ring-4 ring-amber-500/20 group-hover:ring-amber-500/40 transition-all bg-gray-700/30">
                    <AvatarImage 
                      src={employee.image} 
                      alt={employee.name}
                      className="object-contain object-center transition-all duration-300"
                      loading="lazy"
                      sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, (max-width: 1280px) 128px, 144px"
                    />
                    <AvatarFallback className="bg-amber-500 text-black text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {employee.name}
                </h3>
                
                <p className="text-amber-400 font-medium mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-sm lg:text-base xl:text-lg">
                  {employee.position}
                </p>
                
                <p className="text-gray-300 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed">
                  {employee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8 lg:mt-12 xl:mt-16">
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 italic">
            "Uma equipe unida, comprometida com o seu sucesso"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employees;
