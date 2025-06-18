
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram } from 'lucide-react';
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
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Estamos prontos para ajudar seu negócio. Fale conosco e descubra como 
            podemos simplificar sua contabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Informações de Contato */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-100">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                Fale Conosco
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe está pronta para atender você com toda atenção e carinho que seu negócio merece.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50 border-l-4 border-blue-600">
                <div className="bg-blue-600 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-700 font-medium">(85) 9 8238-4438</p>
                  <p className="text-sm text-gray-500">Atendimento de segunda à sexta</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50 border-l-4 border-green-600">
                <div className="bg-green-600 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-700 font-medium">marianocontabilidade@hotmail.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-amber-50 border-l-4 border-amber-600">
                <div className="bg-amber-600 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Localização</h4>
                  <p className="text-gray-700 font-medium">Fortaleza - CE</p>
                  <p className="text-sm text-gray-500">RUA CASTRO E SILVA 942 CENTRO FORTALEZA - CE CEP: 60030-010</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-purple-50 border-l-4 border-purple-600">
                <div className="bg-purple-600 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-700 font-medium">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-sm text-gray-500">Atendimento presencial e online</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-pink-50 border-l-4 border-pink-600">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full flex-shrink-0">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                  <a 
                    href="https://www.instagram.com/marianocontabilidades?igsh=Ynhwa2d4ZDh0MnFu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-pink-600 hover:text-pink-700 transition-colors font-medium"
                  >
                    @marianocontabilidades
                  </a>
                  <p className="text-sm text-gray-500">Siga-nos para dicas e novidades</p>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="pt-8">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <img src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png" alt="WhatsApp" className="h-5 w-5 mr-2" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800" 
                  placeholder="Seu nome completo" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone (opcional)
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-800" 
                  placeholder="(85) 9 1234-5678" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  rows={5} 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-800" 
                  placeholder="Como podemos ajudar você? Conte-nos sobre seu negócio e suas necessidades..." 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-all duration-300 font-medium flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <img src="/lovable-uploads/9bd6a7da-f007-4903-a3b5-6a7e1c4e6a47.png" alt="WhatsApp" className="h-5 w-5 mr-2" />
                Enviar via WhatsApp
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p className="text-sm text-blue-800">
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
