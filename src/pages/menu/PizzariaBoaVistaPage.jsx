import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, Pizza, Scaling, Send, Star } from 'lucide-react';

const PizzariaBoaVistaPage = () => {
  const flavors = [
    { name: "Margherita", price: 42.00, description: "Molho de tomate, muçarela fresca, manjericão e azeite.", image: "Pizza Margherita clássica com tomate e manjericão fresco em um prato" },
    { name: "Calabresa", price: 45.00, description: "Muçarela, calabresa fatiada, cebola e azeitonas pretas.", image: "Pizza de calabresa com fatias grossas e cebola roxa" },
    { name: "Portuguesa", price: 48.00, description: "Presunto, ovos, cebola, ervilha, azeitonas e muçarela.", image: "Pizza Portuguesa colorida com ovos cozidos e presunto" },
    { name: "Frango com Catupiry", price: 52.00, description: "Frango desfiado coberto com o autêntico Catupiry cremoso.", image: "Pizza de frango com catupiry cremoso e dourado" },
    { name: "Quatro Queijos", price: 55.00, description: "Uma combinação perfeita de muçarela, provolone, parmesão e gorgonzola.", image: "Pizza de quatro queijos derretendo com diferentes texturas" },
    { name: "Napolitana", price: 46.00, description: "Muçarela, rodelas de tomate, parmesão e alho fresco.", image: "Pizza Napolitana com fatias de tomate vermelho vivo e queijo parmesão" },
    { name: "Bacon com Cheddar", price: 53.00, description: "Cheddar cremoso e fatias crocantes de bacon.", image: "Pizza de bacon com cheddar derretido e crocante" },
    { name: "Muçarela", price: 40.00, description: "A clássica pizza de muçarela com molho de tomate especial.", image: "Pizza de muçarela simples e deliciosa com borda crocante" },
    { name: "Lombo Canadense", price: 51.00, description: "Lombo canadense fatiado com cebola e cobertura de muçarela.", image: "Pizza de lombo canadense com anéis de cebola" },
    { name: "Atum com Cebola", price: 49.00, description: "Atum sólido, cebola fatiada e um toque de azeite.", image: "Pizza de atum com cebola branca e azeitonas" },
    { name: "Presunto e Queijo", price: 44.00, description: "A combinação que nunca falha: presunto e muçarela.", image: "Pizza de presunto e queijo clássica e bem recheada" },
    { name: "Palmito", price: 48.00, description: "Palmito macio em pedaços com cobertura de muçarela.", image: "Pizza de palmito com pedaços generosos e azeitonas verdes" },
    { name: "Milho com Bacon", price: 47.00, description: "Milho verde fresquinho com bacon crocante e muçarela.", image: "Pizza de milho com bacon crocante e queijo derretido" },
    { name: "Frango com Milho", price: 48.00, description: "Frango desfiado e milho verde sobre uma base de muçarela.", image: "Pizza de frango com milho com aparência suculenta" },
    { name: "Pepperoni", price: 54.00, description: "Fatias de pepperoni picante com muçarela de alta qualidade.", image: "Pizza de pepperoni com fatias perfeitamente redondas e queijo borbulhante" },
    { name: "Carne Seca com Catupiry", price: 58.00, description: "Carne seca desfiada e temperada com Catupiry cremoso.", image: "Pizza de carne seca com catupiry e cebolinha" },
    { name: "Rúcula com Tomate Seco", price: 50.00, description: "Muçarela de búfala, rúcula fresca e tomate seco.", image: "Pizza de rúcula com tomate seco e lascas de parmesão" },
    { name: "Vegetariana", price: 46.00, description: "Mix de vegetais frescos: pimentão, cebola, azeitona e milho.", image: "Pizza vegetariana colorida com pimentões e brócolis" },
    { name: "Moda da Casa", price: 59.00, description: "Ingredientes selecionados pelo nosso chef para uma experiência única.", image: "Pizza especial da casa com ingredientes variados e aparência gourmet" },
    { name: "Toscana", price: 47.00, description: "Calabresa moída, muçarela e um toque de pimenta.", image: "Pizza toscana com calabresa moída e queijo dourado" },
    { name: "Champignon com Queijo", price: 49.00, description: "Champignons frescos fatiados com muçarela e provolone.", image: "Pizza de champignon com queijo derretido e ervas" },
    { name: "Coração com Alho", price: 52.00, description: "Coração de galinha ao alho e óleo com cobertura de muçarela.", image: "Pizza de coração de galinha com alho frito por cima" },
    { name: "Brócolis com Catupiry", price: 51.00, description: "Brócolis fresquinhos com bacon e cobertura de Catupiry.", image: "Pizza de brócolis com catupiry e pedaços de bacon" },
    { name: "Costela BBQ", price: 57.00, description: "Costela desfiada ao molho barbecue e cebola roxa.", image: "Pizza de costela com molho barbecue e anéis de cebola roxa" },
    { name: "Chocolate com Morango (Doce)", price: 55.00, description: "Deliciosa pizza doce com chocolate derretido e morangos frescos.", image: "Pizza doce de chocolate com morangos frescos e raspas de chocolate" }
  ];

  const featuredFlavors = flavors.slice(3, 6);

  const sizes = [
    { name: "Broto", slices: 4 },
    { name: "Pequena", slices: 6 },
    { name: "Média", slices: 8 },
    { name: "Grande", slices: 10 },
    { name: "Família", slices: 12 },
  ];

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent("Olá! Gostaria de fazer um pedido pelo cardápio digital.");
    window.open(`https://wa.me/5541999274030?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <HelmetProvider>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Helmet>
          <title>Cardápio Digital da Pizzaria Boa Vista</title>
          <meta name="description" content="Confira o cardápio digital atualizado da Pizzaria Boa Vista com 25 sabores e 5 tamanhos. Ideal para pedidos rápidos por WhatsApp e Google." />
        </Helmet>

        <header className="relative h-[60vh] min-h-[400px] text-white flex items-center justify-center text-center">
          <img-replace 
            alt="Ambiente rústico e aconchegante de uma pizzaria com um forno a lenha ao fundo" 
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 px-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg gradient-text">Pizzaria Boa Vista</h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">O sabor da verdadeira pizza artesanal, direto do forno para você.</p>
          </motion.div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><Star className="text-yellow-400 w-8 h-8" /> Destaques da Casa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredFlavors.map((flavor, index) => (
                <motion.div
                  key={flavor.name}
                  className="bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/20 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <img-replace alt={flavor.image} className="w-full h-64 object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">{flavor.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{flavor.description}</p>
                     <div className="text-right mt-auto">
                        <span className="text-2xl font-bold text-white bg-black/30 px-3 py-1 rounded-md">
                            {flavor.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><Pizza className="text-pink-400 w-8 h-8" />Nosso Cardápio Completo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flavors.map((flavor, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg group transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/20 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <img-replace alt={flavor.image} className="w-full h-56 object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-pink-400 mb-2">{flavor.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{flavor.description}</p>
                    <div className="text-right mt-auto">
                      <span className="text-xl font-bold text-white bg-black/30 px-3 py-1 rounded-md">
                        {flavor.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><Scaling className="text-pink-400 w-8 h-8" />Tamanhos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {sizes.map((size, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/70 p-6 rounded-xl shadow-lg border border-transparent hover:border-pink-400 transition-all duration-300"
                >
                  <p className="text-2xl font-bold text-pink-400">{size.name}</p>
                  <p className="text-gray-300 mt-1">{size.slices} fatias</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3"><Camera className="text-teal-400 w-8 h-8" />Nossa Galeria</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img-replace alt="Close-up de um pizzaiolo abrindo a massa de pizza com farinha" className="w-full h-full object-cover aspect-square"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img-replace alt="Clientes sorrindo e comendo pizza em uma mesa de madeira rústica" className="w-full h-full object-cover aspect-square"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img-replace alt="Fachada da pizzaria à noite com luzes de néon e ambiente acolhedor" className="w-full h-full object-cover aspect-square"/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-lg shadow-lg">
                    <img-replace alt="Detalhe de uma pizza de pepperoni saindo do forno a lenha com queijo borbulhando" className="w-full h-full object-cover aspect-square"/>
                </motion.div>
            </div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-20"
          >
            <Button
              onClick={handleWhatsAppOrder}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-lg px-10 py-8 pulse-glow rounded-full"
            >
              Fazer Pedido pelo WhatsApp <Send className="ml-3 w-6 h-6" />
            </Button>
          </motion.div>
        </main>
        
        <footer className="text-center py-8 mt-12 border-t border-gray-700/50">
            <p className="text-gray-400">Cardápio Digital por <a href="https://before-tech.com" target="_blank" rel="noopener noreferrer" className="font-bold text-pink-400 hover:underline">Before Tech</a></p>
        </footer>
      </div>
    </HelmetProvider>
  );
};

export default PizzariaBoaVistaPage;