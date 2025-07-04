import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MenuSquare } from 'lucide-react';

const OnlineMenu = () => {
  return (
    <section className="py-20 tech-pattern">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:order-last"
          >
            <img  
              alt="Smartphone em mesa de pizzaria exibindo um cardápio digital moderno. Ao fundo, um forno à lenha e uma pizza saindo."
              className="rounded-2xl shadow-2xl w-full max-w-md"
             src="https://images.unsplash.com/photo-1625708974337-fb8fe9af5711" />
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
             <p className="text-sm text-gray-400 mt-4">Exemplo real: <a href="/menu-descomplicado/pizzaria-boa-vista" className="underline hover:text-pink-400">beforetech.com.br/menu-descomplicado/pizzaria-boa-vista</a></p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OnlineMenu;