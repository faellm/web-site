import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = ({ onOrcamentoClick, onPortfolioClick }) => {
  return (
    <section className="pt-32 pb-20 tech-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="gradient-text block">Criação de Sites Profissionais</span>
              e Presença Digital para Empresas
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transformamos negócios offline em marcas online com sites otimizados para o Google, 
              design responsivo e consultoria em inovação digital. Conquiste autoridade, 
              visibilidade e resultados com a presença digital certa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onOrcamentoClick}
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
              >
                Solicitar Orçamento <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={onPortfolioClick}
                variant="outline" 
                size="lg" 
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black text-lg px-8 py-6"
              >
                Ver Portfólio
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="floating-animation">
              <img     
                alt="Imagem moderna e profissional mostrando uma mão segurando um smartphone com a tela exibindo um site responsivo elegante. Ao fundo, um ambiente de trabalho minimalista (como uma mesa com notebook, xícara de café e bloco de anotações). O site na tela do celular deve ter visual limpo e tecnológico, com cores sóbrias como azul escuro e branco. A imagem deve transmitir inovação, presença digital e profissionalismo."
                className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1625708974337-fb8fe9af5711" />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-pink-400" />
                <span className="text-sm font-semibold">100% Projetos Entregues</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;