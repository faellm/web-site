import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Palette, Smartphone, TrendingUp, MessageSquare, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: Palette, text: "Design exclusivo e adaptado à marca do cliente" },
  { icon: Smartphone, text: "Site responsivo para todos os dispositivos" },
  { icon: TrendingUp, text: "Otimização para SEO (para ser encontrado no Google)" },
  { icon: MessageSquare, text: "Integração com WhatsApp e redes sociais" },
  { icon: Wrench, text: "Suporte técnico incluso para sua tranquilidade" }
];

const CriacaoSitesPromocionalPage = ({ onOrcamentoClick }) => {
  return (
    <>
      <Helmet>
        <title>Criação de Sites Profissionais a partir de R$450,00 | Before Tech</title>
        <meta
          name="description"
          content="Criação de sites profissionais a partir de R$450. Tenha um site rápido, responsivo, com SEO otimizado e entrega em até 2 semanas. Ideal para pequenas empresas."
        />
        <meta
          name="keywords"
          content="criação de site barato, site profissional para empresas, criação de sites rápidos, site acessível, criação de site em até 2 semanas"
        />
      </Helmet>
      <div className="pt-32 pb-20 tech-pattern overflow-x-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-black mb-4">
              Criação de Sites Profissionais a partir de <span className="gradient-text">R$450,00</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Na Before Tech, criamos sites modernos, responsivos e acessíveis, perfeitos para pequenas empresas e autônomos que desejam uma presença online de impacto sem gastar uma fortuna.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <img  alt="Exemplo de um site profissional sendo exibido em um laptop e um celular" className="rounded-2xl shadow-2xl glow-effect-purple" src="https://images.unsplash.com/photo-1625708974337-fb8fe9af5711" />
          </motion.div>

          <div className="py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">Tudo que você precisa para <span className="gradient-text">decolar online</span>.</h2>
                <p className="text-gray-400">
                  Nossa solução de criação de sites foi pensada para ser completa, rápida e acessível. Veja os benefícios:
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-6 h-6 text-pink-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                  {benefits.map((benefit, index) => (
                      <div key={index} className="glass-effect p-6 rounded-xl text-center flex flex-col items-center justify-center h-40">
                          <benefit.icon className="w-8 h-8 mb-2 gradient-text" />
                          <p className="text-sm font-semibold">{benefit.text.split('(')[0].trim()}</p>
                      </div>
                  ))}
                  <div className="glass-effect p-6 rounded-xl text-center flex flex-col items-center justify-center h-40 bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                      <p className="text-2xl font-bold">e mais!</p>
                  </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center bg-black/20 rounded-2xl p-10 mt-10"
          >
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Não perca mais tempo com soluções amadoras. Invista em um site profissional com preço justo e tenha sua nova ferramenta de vendas online em <span className="text-white font-bold">até 2 semanas!</span>
            </p>
            <Button
              onClick={onOrcamentoClick}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
            >
              Solicite um Orçamento no WhatsApp <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CriacaoSitesPromocionalPage;