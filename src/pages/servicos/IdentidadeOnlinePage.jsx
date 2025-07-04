import React from 'react';
import ServicePageLayout from './ServicePageLayout';

const IdentidadeOnlinePage = ({ onOrcamentoClick }) => {
  const pageData = {
    hero: {
      title: "Construção de Identidade Online",
      subtitle: "Crie uma marca digital forte e memorável que conecta com seu público e gera autoridade."
    },
    benefits: {
      items: [
        { title: "Branding Coerente e Forte", description: "Garantimos que sua marca seja consistente em todos os pontos de contato digitais." },
        { title: "Posicionamento de Mercado", description: "Definimos como sua marca deve ser percebida pelo público para se destacar." },
        { title: "Conteúdo Estratégico", description: "Produzimos conteúdo que atrai, engaja e converte seu público-alvo." },
        { title: "Presença em Múltiplos Canais", description: "Construímos e otimizamos sua presença onde seus clientes estão, como redes sociais e Google." },
        { title: "Engajamento do Público", description: "Criamos uma comunidade em torno da sua marca, gerando lealdade e defesa." },
        { title: "Reconhecimento e Autoridade", description: "Transformamos sua empresa em uma referência no seu setor de atuação." }
      ]
    },
    process: {
      steps: [
        { title: "Análise de Marca e Público", description: "Estudamos sua marca, seu mercado e quem você quer alcançar." },
        { title: "Definição da Estratégia", description: "Planejamos a voz, o tom, os canais e o tipo de conteúdo a ser criado." },
        { title: "Criação de Ativos Digitais", description: "Desenvolvemos os elementos visuais e textuais que compõem sua identidade." },
        { title: "Lançamento e Gestão", description: "Implementamos a estratégia e gerenciamos sua presença online para garantir o crescimento." }
      ]
    },
    faq: {
      items: [
        { question: "Este serviço inclui a gestão de redes sociais?", answer: "Sim, a gestão de redes sociais pode ser uma parte fundamental da construção da sua identidade online. Adaptamos o escopo do projeto às suas necessidades, podendo incluir a gestão completa ou a consultoria estratégica para seus canais." },
        { question: "O que são 'ativos digitais'?", answer: "Ativos digitais são todos os elementos online que representam sua marca. Isso inclui seu site, perfis em redes sociais, logotipo, paleta de cores, templates de postagens, e-books, vídeos, e qualquer outro material digital que comunique sua identidade." },
        { question: "Qual a diferença entre identidade online e apenas ter um site?", answer: "Ter um site é ter um endereço na web. Ter uma identidade online é garantir que esse site, junto com todas as outras presenças digitais, conte uma história coesa, transmita os valores da sua marca e crie uma conexão emocional com o público." }
      ]
    }
  };

  return <ServicePageLayout {...pageData} onOrcamentoClick={onOrcamentoClick} />;
};

export default IdentidadeOnlinePage;