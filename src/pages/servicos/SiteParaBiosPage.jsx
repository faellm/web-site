import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, X, AlertTriangle, CheckCircle, Smartphone, TrendingUp, Users } from 'lucide-react';

const wrongExamples = [
  "Apenas link do WhatsApp na bio",
  "Link direto para uma rede social",
  "Link para um PDF ou documento",
  "Nenhum link na bio"
];

const rightBenefits = [
  {
    icon: Users,
    title: "Apresentação Profissional",
    description: "Mostre quem você é, seus serviços e conquiste a confiança dos visitantes"
  },
  {
    icon: TrendingUp,
    title: "Múltiplas Conversões",
    description: "Direcione para WhatsApp, site principal, produtos e muito mais"
  },
  {
    icon: Smartphone,
    title: "Design Mobile-First",
    description: "Otimizado para celular, onde seus seguidores vão acessar"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Briefing Personalizado",
    description: "Entendemos seu negócio, público e objetivos para criar a estratégia perfeita"
  },
  {
    step: "2", 
    title: "Design e Desenvolvimento",
    description: "Criamos um site único, atrativo e otimizado para conversão"
  },
  {
    step: "3",
    title: "Entrega e Configuração",
    description: "Entregamos pronto para usar e te ensinamos como atualizar o link na bio"
  }
];

const faqItems = [
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer: "Normalmente entre 3 a 5 dias úteis, dependendo da complexidade do projeto."
  },
  {
    question: "Posso fazer alterações depois?",
    answer: "Sim! Oferecemos suporte para pequenas alterações e você pode solicitar atualizações."
  },
  {
    question: "Funciona para qualquer tipo de negócio?",
    answer: "Sim! Atendemos consultores, empresas, influencers, artistas e qualquer profissional."
  },
  {
    question: "O site fica no meu nome?",
    answer: "Sim! O domínio e hospedagem ficam em seu nome, você tem total controle."
  }
];

const SiteParaBiosPage = ({ onOrcamentoClick }) => {
  return (
    <>
      <Helmet>
        <title>Site para Bio do Instagram | Link na Bio Profissional | Before Tech</title>
        <meta
          name="description"
          content="Crie um site profissional para o link da bio do Instagram. Pare de usar apenas WhatsApp! Aumente conversões com uma página personalizada e atrativa."
        />
        <meta
          name="keywords"
          content="site para bio, link na bio, instagram bio, site instagram, link bio profissional"
        />
      </Helmet>
      
      <div className="pt-32 pb-20 tech-pattern overflow-x-hidden">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Instagram className="w-8 h-8 text-pink-500" />
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                NOVO SERVIÇO
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              Site Profissional para <span className="gradient-text">Link da Bio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Pare de desperdiçar o link mais valioso do seu Instagram! Crie uma página personalizada 
              que apresenta você, seus serviços e converte seguidores em clientes de verdade.
            </p>
            <Button
              onClick={onOrcamentoClick}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
            >
              Quero Meu Site para Bio
            </Button>
          </motion.div>

          {/* Wrong vs Right Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Wrong Way */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <X className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-red-400">Jeito ERRADO</h3>
              </div>
              <p className="text-gray-300 mb-6">
                A maioria das pessoas comete esses erros na bio do Instagram:
              </p>
              <ul className="space-y-3">
                {wrongExamples.map((example, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{example}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-red-900/30 rounded-lg">
                <p className="text-sm text-red-300">
                  <strong>Resultado:</strong> Você perde oportunidades de negócio e seus seguidores não sabem como te contratar!
                </p>
              </div>
            </motion.div>

            {/* Right Way */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-green-400">Jeito CERTO</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Com um site profissional para bio, você consegue:
              </p>
              <ul className="space-y-4">
                {rightBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <benefit.icon className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">{benefit.title}</h4>
                      <p className="text-sm text-gray-300">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-green-900/30 rounded-lg">
                <p className="text-sm text-green-300">
                  <strong>Resultado:</strong> Mais credibilidade, mais conversões e mais clientes!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Example Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-3xl font-bold mb-8">Veja como fica na prática:</h3>
            <img  
              alt="Exemplo de site para bio do Instagram em um smartphone"
              className="rounded-2xl shadow-2xl max-w-md mx-auto glow-effect-purple"
             src="https://images.unsplash.com/photo-1625708974337-fb8fe9af5711" />
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Como funciona nosso <span className="gradient-text">processo</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl p-10"
          >
            <h2 className="text-3xl font-bold mb-4">
              Transforme seu Instagram em uma máquina de vendas!
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Não deixe mais nenhum seguidor escapar. Tenha um site profissional que converte 
              visitantes em clientes e eleva sua presença digital a outro nível.
            </p>
            <Button
              onClick={onOrcamentoClick}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
            >
              Solicitar Orçamento no WhatsApp
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SiteParaBiosPage;