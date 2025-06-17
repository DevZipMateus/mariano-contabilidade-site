
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Criar mensagem personalizada para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. 

${formData.message}

Meu e-mail: ${formData.email}
${formData.phone ? `Telefone: ${formData.phone}` : ''}`;

    const whatsappUrl = `https://wa.me/5585982384438?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para nossa conversa no WhatsApp!"
    });
  };

  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Mariano Contabilidade.";
  const whatsappUrl = `https://wa.me/5585982384438?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar seu negócio. Fale conosco e descubra como 
            podemos simplificar sua contabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-300 mb-8">
                Nossa equipe está pronta para atender você com toda atenção e carinho que seu negócio merece.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-300">(85) 9 8238-4438</p>
                  <p className="text-sm text-gray-400">Atendimento de segunda à sexta</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">E-mail</h4>
                  <p className="text-gray-300">marianocontabilidade@hotmail.com</p>
                  <p className="text-sm text-gray-400">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Localização</h4>
                  <p className="text-gray-300">Fortaleza - CE</p>
                  <p className="text-sm text-gray-400">No coração da cidade</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-300">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-sm text-gray-400">Atendimento presencial e online</p>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
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

          {/* Formulário de Contato */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors text-white placeholder-gray-400" 
                  placeholder="Seu nome completo" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  E-mail *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors text-white placeholder-gray-400" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefone (opcional)
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors text-white placeholder-gray-400" 
                  placeholder="(85) 9 1234-5678" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  rows={5} 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent transition-colors resize-none text-white placeholder-gray-400" 
                  placeholder="Como podemos ajudar você? Conte-nos sobre seu negócio e suas necessidades..." 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png"
                  alt="WhatsApp"
                  className="h-5 w-5 mr-2"
                />
                Enviar via WhatsApp
              </button>
            </form>

            <div className="mt-6 p-4 bg-amber-900/20 rounded-lg border border-amber-600/30">
              <p className="text-sm text-amber-300">
                <strong>Política de Privacidade:</strong> Seus dados são tratados com total sigilo e utilizados 
                apenas para entrarmos em contato sobre nossos serviços contábeis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
