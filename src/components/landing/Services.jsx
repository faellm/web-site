import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Lightbulb, Rocket, CheckCircle, Instagram, MapPin, MenuSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Google Meu Negócio",
      description: "Apareça no mapa e seja encontrado por clientes na sua região.",
      features: ["Otimização de Perfil", "Visibilidade Local", "Mais Clientes"],
      link: "/servicos#google-meu-negocio",
      isNew: true
    },
    {
      icon: MenuSquare,
      title: "Cardápio Online",
      description: "Um cardápio digital moderno, rápido e com link personalizado.",
      features: ["Link Personalizado", "Fácil Atualização", "Design Moderno"],
      link: "/servicos#cardapio-online",
      isNew: true
    },
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Sites profissionais e responsivos que representam sua marca com excelência.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Alta"],
      link: "/servicos/criacao-de-sites"
    },
    {
      icon: Instagram,
      title: "Site para Bios",
      description: "Sites personalizados para o link da bio do Instagram. Pare de usar apenas WhatsApp!",
      features: ["Link Único", "Design Atrativo", "Conversão Alta"],
      link: "/servicos/site-para-bios"
    },
    {
      icon: Lightbulb,
      title: "Consultoria em Inovação",
      description: "Estratégias tecnológicas personalizadas para impulsionar seu negócio.",
      features: ["Análise Digital", "Estratégia Tech", "Roadmap Personalizado"],
      link: "/servicos/consultoria-inovacao"
    },
    {
      icon: Rocket,
      title: "Identidade Online",
      description: "Construímos sua presença digital do zero com identidade única.",
      features: ["Branding Digital", "Presença Online", "Estratégia de Marca"],
      link: "/servicos/identidade-online"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos soluções completas para empresas que querem marcar presença no mundo digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Link to={service.link} className="flex flex-col h-full">
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 flex-grow flex flex-col relative ${
                    service.isNew ? 'border-pink-500/50' : ''
                  }`}
                >
                  {service.isNew && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NOVO!
                    </div>
                  )}
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className="w-full mt-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  >
                    <span>Saiba Mais</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;