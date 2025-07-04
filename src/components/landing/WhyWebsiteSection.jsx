import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, TrendingUp, Clock, Users, Shield, Globe } from 'lucide-react';

const WhyWebsiteSection = ({ onOrcamentoClick }) => {
  const reasons = [
    {
      icon: Search,
      title: "Ser Encontrado no Google",
      description: "Clientes procuram seus serviços online. Sem site, você não existe para eles."
    },
    {
      icon: TrendingUp,
      title: "Credibilidade e Confiança",
      description: "Um site profissional transmite seriedade e aumenta a confiança dos clientes."
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Seu negócio funciona mesmo quando você está dormindo."
    },
    {
      icon: Users,
      title: "Alcançar Mais Clientes",
      description: "Expanda seu mercado além da sua região geográfica."
    },
    {
      icon: Shield,
      title: "Competir com Concorrentes",
      description: "Seus concorrentes já estão online. Não fique para trás."
    },
    {
      icon: Globe,
      title: "Presença Digital Completa",
      description: "Integre redes sociais, WhatsApp e outras ferramentas digitais."
    }
  ];

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Por que sua empresa <span className="gradient-text">precisa de um site?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Em 2024, não ter presença online é como não existir para seus clientes. 
            Veja por que um site profissional é essencial para o sucesso do seu negócio:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-4">
            Não deixe seus clientes procurarem você e encontrarem seus concorrentes!
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Cada dia sem um site profissional é uma oportunidade perdida. 
            Comece hoje mesmo a construir sua presença digital e veja seu negócio crescer.
          </p>
          <Button
            onClick={onOrcamentoClick}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6"
          >
            Quero Meu Site Agora!
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWebsiteSection;