import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Espaço de Eventos',
    slug: 'espaco-de-eventos',
    description: 'Landing page elegante para reserva de locais, com galeria de fotos e calendário de eventos.',
    imageText: 'Ilustração de um site para espaço de eventos com design sofisticado',
    altText: 'Ilustração de um website para um salão de eventos chique'
  },
  {
    title: 'Instalação de Ar Condicionado',
    slug: 'ar-condicionado',
    description: 'Página focada em conversão, com formulário de orçamento rápido e selos de certificação.',
    imageText: 'Ilustração de um site para serviços de ar condicionado, mostrando um ambiente climatizado',
    altText: 'Ilustração de um website para uma empresa de ar condicionado'
  },
  {
    title: 'Escritório de Advocacia',
    slug: 'escritorio-de-advocacia',
    description: 'Site sóbrio e profissional que transmite confiança, com áreas de atuação e perfil dos advogados.',
    imageText: 'Ilustração de um site para um escritório de advocacia com design moderno e sério',
    altText: 'Ilustração de um website para um escritório de advocacia'
  },
  {
    title: 'Consultório Odontológico',
    slug: 'consultorio-odontologico',
    description: 'Design limpo e acolhedor, com agendamento online e informações sobre tratamentos.',
    imageText: 'Ilustração de um site para um consultório odontológico, com um sorriso em destaque',
    altText: 'Ilustração de um website para uma clínica odontológica'
  },
  {
    title: 'Concessionária de Veículos',
    slug: 'concessionaria-de-veiculos',
    description: 'Página dinâmica para promover vendas, com catálogo de carros e simulação de financiamento.',
    imageText: 'Ilustração de um site para uma concessionária de veículos com um carro esportivo em destaque',
    altText: 'Ilustração de um website para uma concessionária de carros'
  },
  {
    title: 'Imobiliária',
    slug: 'imobiliaria',
    description: 'Plataforma visual com busca avançada de imóveis, tour virtual e contato direto com corretores.',
    imageText: 'Ilustração de um site para uma imobiliária mostrando uma casa moderna e luxuosa',
    altText: 'Ilustração de um website para uma imobiliária de alto padrão'
  }
];

const PortfolioPage = ({ onOrcamentoClick }) => {
  return (
    <div className="pt-32 pb-20 tech-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            Nosso <span className="gradient-text">Portfólio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore alguns dos projetos que criamos para impulsionar negócios como o seu. Clique para ver uma demonstração ao vivo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/portfolio/${item.slug}`}>
                <PortfolioCard
                  title={item.title}
                  description={item.description}
                  imageText={item.imageText}
                  altText={item.altText}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
           <h2 className="text-3xl font-bold mb-4">Gostou do que viu?</h2>
           <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Vamos criar juntos a identidade online que seu negócio merece.
           </p>
           <Button 
                onClick={onOrcamentoClick}
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
              >
                Começar Meu Projeto Agora <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;