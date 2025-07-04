import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTA = ({ onOpenContactDialog, onShowToast }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos criar a identidade online 
            perfeita para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onOpenContactDialog}
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6"
            >
              Solicitar Orçamento Gratuito
            </Button>
            <Button 
              onClick={onShowToast}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-pink-600 text-lg px-8 py-6"
            >
              Agendar Consultoria
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;