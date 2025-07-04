import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceHero = ({ title, subtitle, onOrcamentoClick }) => (
  <section className="pt-32 pb-20 tech-pattern">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-7xl font-black mb-6">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Button 
          onClick={onOrcamentoClick}
          size="lg" 
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg px-8 py-6 pulse-glow"
        >
          Solicite um Orçamento <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

const ServiceBenefits = ({ benefits }) => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">Benefícios Reais para seu Negócio</h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceProcess = ({ steps }) => (
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
          Como <span className="gradient-text">Funciona</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Nosso processo é transparente e colaborativo, garantindo os melhores resultados.
        </p>
      </motion.div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2"></div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center glass-effect p-6 rounded-xl z-10"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServiceFAQ = ({ faqs }) => (
  <section className="py-20">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-black mb-6">
          Perguntas <span className="gradient-text">Frequentes</span>
        </h2>
      </motion.div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-300 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const ServiceCTA = ({ onOrcamentoClick }) => (
  <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-700">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
          Vamos conversar sobre seu projeto?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Estamos prontos para ajudar a levar seu negócio para o próximo nível.
        </p>
        <Button 
          onClick={onOrcamentoClick}
          size="lg" 
          className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6"
        >
          Solicitar Orçamento Gratuito
        </Button>
      </motion.div>
    </div>
  </section>
);

const ServicePageLayout = ({ hero, benefits, process, faq, onOrcamentoClick }) => {
  return (
    <>
      <ServiceHero title={hero.title} subtitle={hero.subtitle} onOrcamentoClick={onOrcamentoClick} />
      <ServiceBenefits benefits={benefits.items} />
      <ServiceProcess steps={process.steps} />
      <ServiceFAQ faqs={faq.items} />
      <ServiceCTA onOrcamentoClick={onOrcamentoClick} />
    </>
  );
};

export default ServicePageLayout;