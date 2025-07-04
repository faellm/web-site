import React from 'react';
import ServicePageLayout from './ServicePageLayout';

const ConsultoriaInovacaoPage = ({ onOrcamentoClick }) => {
  const pageData = {
    hero: {
      title: "Consultoria em Inovação",
      subtitle: "Alinhe tecnologia e estratégia para impulsionar o crescimento sustentável do seu negócio."
    },
    benefits: {
      items: [
        { title: "Diagnóstico Tecnológico Preciso", description: "Analisamos seus processos e sistemas atuais para identificar pontos de melhoria e oportunidades." },
        { title: "Estratégia Personalizada", description: "Desenvolvemos um plano de ação claro e alinhado aos seus objetivos de negócio." },
        { title: "Otimização de Processos", description: "Implementamos ferramentas e metodologias que aumentam a eficiência e reduzem custos." },
        { title: "Vantagem Competitiva", description: "Posicione sua empresa à frente da concorrência com soluções inovadoras." },
        { title: "Cultura de Inovação", description: "Ajudamos a fomentar um ambiente onde novas ideias são incentivadas e implementadas." },
        { title: "Retorno Sobre o Investimento (ROI)", description: "Focamos em soluções que trazem resultados mensuráveis e um ROI acelerado." }
      ]
    },
    process: {
      steps: [
        { title: "Imersão e Diagnóstico", description: "Mergulhamos no seu negócio para entender seus desafios e metas." },
        { title: "Desenvolvimento da Estratégia", description: "Criamos um roadmap de inovação com ações, prazos e KPIs." },
        { title: "Implementação e Acompanhamento", description: "Auxiliamos na execução do plano e monitoramos o progresso de perto." },
        { title: "Análise de Resultados", description: "Medimos o impacto das ações e ajustamos a estratégia para otimização contínua." }
      ]
    },
    faq: {
      items: [
        { question: "Para que tipo de empresa é a consultoria?", answer: "Nossa consultoria é para qualquer empresa, de startups a grandes corporações, que deseje usar a tecnologia e a inovação como ferramentas estratégicas para crescer e se destacar no mercado." },
        { question: "Como medimos o sucesso da consultoria?", answer: "O sucesso é medido através de Indicadores Chave de Performance (KPIs) definidos no início do projeto. Eles podem incluir aumento de receita, redução de custos, melhoria na eficiência, satisfação do cliente, entre outros." },
        { question: "Qual o nível de envolvimento da minha equipe?", answer: "A colaboração é fundamental. O envolvimento da sua equipe é crucial para o sucesso, pois eles possuem o conhecimento profundo do negócio. Trabalhamos em conjunto para co-criar as melhores soluções." }
      ]
    }
  };

  return <ServicePageLayout {...pageData} onOrcamentoClick={onOrcamentoClick} />;
};

export default ConsultoriaInovacaoPage;