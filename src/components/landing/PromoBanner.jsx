import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const PromoBanner = () => {
  return (
    <section className="py-16 tech-pattern">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-300" />
              <p className="font-bold text-lg text-white">Oferta Especial</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Criação de Sites Profissionais
            </h2>
            <p className="text-white/90 text-lg">
              Sua presença online com preço acessível e entrega em até 2 semanas.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold text-lg px-8 py-7"
            >
              <Link to="/criacao-de-sites-profissionais">
                Saiba Mais <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;