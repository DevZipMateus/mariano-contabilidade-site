
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
    <section id="funcionarios" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa Equipe
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-amber-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Conheça os profissionais dedicados que fazem da Mariano Contabilidade 
            uma referência em atendimento humanizado e excelência contábil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {employees.map((employee) => (
            <Card key={employee.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="mb-4 sm:mb-6">
                  <Avatar className="w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-3 sm:mb-4 ring-4 ring-amber-500/20 group-hover:ring-amber-500/40 transition-all">
                    <AvatarImage 
                      src={employee.image} 
                      alt={employee.name}
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 640px) 96px, 128px"
                    />
                    <AvatarFallback className="bg-amber-500 text-black text-lg sm:text-2xl font-bold">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {employee.name}
                </h3>
                
                <p className="text-amber-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                  {employee.position}
                </p>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {employee.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-base sm:text-lg text-gray-300 italic">
            "Uma equipe unida, comprometida com o seu sucesso"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Employees;
