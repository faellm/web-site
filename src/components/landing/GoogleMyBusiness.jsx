import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const GoogleMyBusiness = ({ onOrcamentoClick }) => {
  return (
    <section className="py-20 bg-black/20">
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
            <img  
              alt="Pessoa segurando celular com busca 'pizzaria perto de mim' no Google Maps, destacando um negócio local. Fundo de uma pizzaria de bairro."
              className="rounded-2xl shadow-2xl w-full max-w-md"
             src="https://images.unsplash.com/photo-1695596687696-ba251561842d" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMyBusiness;