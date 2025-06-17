import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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

    // Simular envio (aqui você integraria com um backend real)
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!"
    });

    // Limpar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços da Mariano Contabilidade.";
  const whatsappUrl = `https://wa.me/5585982384438?text=${encodeURIComponent(whatsappMessage)}`;
  return <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para ajudar seu negócio. Fale conosco e descubra como 
            podemos simplificar sua contabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Fale Conosco
              </h3>
              <p className="text-gray-600 mb-8">
                Nossa equipe está pronta para atender você com toda atenção e carinho que seu negócio merece.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(85) 9 8238-4438</p>
                  <p className="text-sm text-gray-500">Atendimento de segunda à sexta</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                  <p className="text-gray-600">marianocontabilidade@hotmail.com</p>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Localização</h4>
                  <p className="text-gray-600">Fortaleza - CE</p>
                  <p className="text-sm text-gray-500">No coração da cidade</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda à Sexta: 8h às 18h</p>
                  <p className="text-sm text-gray-500">Atendimento presencial e online</p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" placeholder="Seu nome completo" required />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors" placeholder="seu@email.com" required />
              </div>

              

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none" placeholder="Como podemos ajudar você? Conte-nos sobre seu negócio e suas necessidades..." required />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
                <Send className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Política de Privacidade:</strong> Seus dados são tratados com total sigilo e utilizados 
                apenas para entrarmos em contato sobre nossos serviços contábeis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;