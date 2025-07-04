import React from 'react';
import ServicePageLayout from './ServicePageLayout';

const CriacaoDeSitesPage = ({ onOrcamentoClick }) => {
  const pageData = {
    hero: {
      title: "Criação de Sites Profissionais",
      subtitle: "Transforme sua presença online com um site moderno, rápido e otimizado para resultados."
    },
    benefits: {
      items: [
        { title: "Design Exclusivo e Moderno", description: "Criamos um visual único que reflete a identidade da sua marca e atrai seu público-alvo." },
        { title: "Totalmente Responsivo", description: "Seu site funcionará perfeitamente em desktops, tablets e smartphones." },
        { title: "Otimizado para SEO", description: "Estrutura preparada para que os motores de busca encontrem e classifiquem bem seu site." },
        { title: "Alta Performance e Velocidade", description: "Sites rápidos que melhoram a experiência do usuário e a conversão." },
        { title: "Gerenciamento Fácil de Conteúdo", description: "Autonomia para você atualizar informações importantes sem precisar de um programador." },
        { title: "Segurança Robusta", description: "Implementamos as melhores práticas para proteger seu site e os dados dos seus clientes." }
      ]
    },
    process: {
      steps: [
        { title: "Briefing e Planejamento", description: "Entendemos seus objetivos para traçar a melhor estratégia para o seu site." },
        { title: "Design e UI/UX", description: "Criamos a interface e a experiência do usuário, focando na usabilidade e conversão." },
        { title: "Desenvolvimento", description: "Codificamos o site com as tecnologias mais modernas e eficientes do mercado." },
        { title: "Revisão e Lançamento", description: "Ajustamos os detalhes finais com você e colocamos seu novo site no ar." }
      ]
    },
    faq: {
      items: [
        { question: "Quanto tempo leva para criar um site?", answer: "O tempo varia conforme a complexidade do projeto. Um site institucional pode levar de 4 a 8 semanas, enquanto projetos mais complexos podem levar mais tempo. Sempre definimos um cronograma claro no início." },
        { question: "Vocês oferecem manutenção após o lançamento?", answer: "Sim! Oferecemos planos de manutenção e suporte contínuo para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente." },
        { question: "O site será realmente meu?", answer: "Com certeza. Após a conclusão e pagamento final, você terá todos os direitos e acessos ao seu site. Nós fornecemos toda a documentação e credenciais necessárias." },
        { question: "Meu site vai aparecer no Google?", answer: "Sim. Todos os nossos sites são desenvolvidos com as melhores práticas de SEO (Otimização para Mecanismos de Busca) para garantir uma boa indexação e visibilidade no Google e outros buscadores." }
      ]
    }
  };

  return <ServicePageLayout {...pageData} onOrcamentoClick={onOrcamentoClick} />;
};

export default CriacaoDeSitesPage;