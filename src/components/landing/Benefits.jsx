import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Search, Zap, Shield, TrendingUp, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { icon: Monitor, title: "Design Responsivo", description: "Sites que funcionam perfeitamente em todos os dispositivos" },
    { icon: Search, title: "SEO Otimizado", description: "Apareça no topo do Google e atraia mais clientes" },
    { icon: Zap, title: "Performance Alta", description: "Sites rápidos que convertem visitantes em clientes" },
    { icon: Shield, title: "Segurança Total", description: "Proteção completa contra ameaças digitais" },
    { icon: TrendingUp, title: "Crescimento Garantido", description: "Estratégias que impulsionam seu negócio" },
    { icon: Clock, title: "Entrega Rápida", description: "Projetos concluídos dentro do prazo estabelecido" }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Por que escolher a <span className="gradient-text">Before Tech?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combinamos expertise técnica com visão estratégica para entregar resultados excepcionais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;