import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const About = ({ onShowToast }) => {
  return (
    <section id="sobre" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              alt="Escritório moderno da Before Tech com equipamentos de última geração"
              className="rounded-2xl shadow-2xl w-full"
             src="https://images.unsplash.com/photo-1684563983781-ce52a026f139" />
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Sobre a <span className="gradient-text">Before Tech</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Somos especialistas em transformar empresas tradicionais em marcas digitais de sucesso. 
              Nossa missão é democratizar o acesso à tecnologia, oferecendo soluções personalizadas 
              que atendem às necessidades específicas de cada cliente.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Com uma abordagem consultiva e foco em resultados, ajudamos empresas a construir 
              sua identidade online do zero, implementando estratégias de inovação que geram 
              crescimento sustentável.
            </p>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={onShowToast}
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
              >
                Conhecer Equipe
              </Button>
              <Button 
                onClick={onShowToast}
                variant="outline" 
                size="lg" 
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black"
              >
                Nossa História
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;