import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, MenuSquare, Globe, Lightbulb, Rocket, CheckCircle, Instagram } from 'lucide-react';

const ServicosPage = ({ onOrcamentoClick }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const otherServices = [
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
    <HelmetProvider>
      <div className="overflow-x-hidden">
        <Helmet>
          <title>Nossos Serviços - Soluções Digitais para sua Empresa | Before Tech</title>
          <meta name="description" content="Explore os serviços da Before Tech: otimização de Google Meu Negócio, cardápios online, criação de sites profissionais, consultoria em inovação e mais. Impulsione sua presença digital." />
        </Helmet>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-24 text-center bg-black/20"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black mb-4">Nossas <span className="gradient-text">Soluções Digitais</span></h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Da visibilidade local à otimização de vendas, temos a ferramenta certa para sua empresa decolar no mundo digital.
            </p>
          </div>
        </motion.section>

        <section id="google-meu-negocio" className="py-20 bg-black/10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Seja Encontrado no Google por{' '}
                  <span className="gradient-text">Clientes da Sua Região</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Apareça nas buscas e no Google Maps no momento exato em que seus clientes te procuram. Otimizamos seu perfil no Google Meu Negócio com foco em resultados locais: fotos profissionais, horários, categorias, avaliações reais, link para seu site e WhatsApp. Ideal para restaurantes, salões, lojas e qualquer empresa com atendimento físico.
                </p>
                <Button
                  onClick={onOrcamentoClick}
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Quero Aparecer no Google <MapPin className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <img-replace
                  alt="Pessoa segurando celular com busca 'pizzaria perto de mim' no Google Maps, destacando um negócio local. Fundo de uma pizzaria de bairro."
                  className="rounded-2xl shadow-2xl w-full max-w-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="cardapio-online" className="py-20 tech-pattern">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center lg:order-last"
              >
                <img-replace
                  alt="Smartphone em mesa de pizzaria exibindo um cardápio digital moderno. Ao fundo, um forno à lenha e uma pizza saindo."
                  className="rounded-2xl shadow-2xl w-full max-w-md"
                />
              </motion.div>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:order-first"
              >
                <h2 className="text-4xl lg:text-5xl font-black mb-6">
                  Seu Cardápio Digital com{' '}
                  <span className="gradient-text">Link Personalizado</span>
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Criamos páginas de cardápio modernas, leves e acessíveis por celular com link personalizado no nosso domínio. Ideal para ser adicionado ao Google Meu Negócio, compartilhado no WhatsApp ou lido por QR Code no balcão. Atualize seus produtos com facilidade, sem depender de terceiros. Seu negócio, sua autonomia.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black text-lg px-8 py-6"
                >
                  <Link to="/menu-descomplicado/pizzaria-boa-vista">
                    Ver Cardápio de Exemplo <MenuSquare className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="outros-servicos" className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-6">
                Mais Serviços para <span className="gradient-text">Impulsionar seu Negócio</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {otherServices.map((service, index) => (
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
                      className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300 flex-grow flex flex-col"
                    >
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
      </div>
    </HelmetProvider>
  );
};

export default ServicosPage;