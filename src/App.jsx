import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import LandingPage from '@/pages/LandingPage';
import PortfolioPage from '@/pages/PortfolioPage';
import CriacaoDeSitesPage from '@/pages/servicos/CriacaoDeSitesPage';
import ConsultoriaInovacaoPage from '@/pages/servicos/ConsultoriaInovacaoPage';
import IdentidadeOnlinePage from '@/pages/servicos/IdentidadeOnlinePage';
import SiteParaBiosPage from '@/pages/servicos/SiteParaBiosPage';
import ScrollToTop from '@/components/shared/ScrollToTop';
import ContactFormDialog from '@/components/shared/ContactFormDialog';
import ServicosPage from '@/pages/ServicosPage';

// Portfolio Project Pages
import EspacoEventosPage from '@/pages/portfolio-projects/EspacoEventosPage';
import ArCondicionadoPage from '@/pages/portfolio-projects/ArCondicionadoPage';
import EscritorioAdvocaciaPage from '@/pages/portfolio-projects/EscritorioAdvocaciaPage';
import ConsultorioOdontologicoPage from '@/pages/portfolio-projects/ConsultorioOdontologicoPage';
import ConcessionariaVeiculosPage from '@/pages/portfolio-projects/ConcessionariaVeiculosPage';
import ImobiliariaPage from '@/pages/portfolio-projects/ImobiliariaPage';
import CriacaoSitesPromocionalPage from '@/pages/CriacaoSitesPromocionalPage';
import PizzariaBoaVistaPage from '@/pages/menu/PizzariaBoaVistaPage';

function App() {
  const { toast } = useToast();
  const [isContactDialogOpen, setContactDialogOpen] = useState(false);

  const showToast = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento!",
      description: "Esta área estará disponível em breve.",
    });
  };

  const handleOpenContactDialog = () => setContactDialogOpen(true);

  const handleOrcamentoClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um projeto.");
    window.open(`https://wa.me/5541999274030?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen gradient-bg">
      <ScrollToTop />
      <Toaster />
      <ContactFormDialog isOpen={isContactDialogOpen} onOpenChange={setContactDialogOpen} />
      <Header onOpenContactDialog={handleOpenContactDialog} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage onOpenContactDialog={handleOpenContactDialog} onShowToast={showToast} onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/portfolio" element={<PortfolioPage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/servicos" element={<ServicosPage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/servicos/criacao-de-sites" element={<CriacaoDeSitesPage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/servicos/consultoria-inovacao" element={<ConsultoriaInovacaoPage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/servicos/identidade-online" element={<IdentidadeOnlinePage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/servicos/site-para-bios" element={<SiteParaBiosPage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/criacao-de-sites-profissionais" element={<CriacaoSitesPromocionalPage onOrcamentoClick={handleOrcamentoClick} />} />
          <Route path="/menu-descomplicado/pizzaria-boa-vista" element={<PizzariaBoaVistaPage />} />

          {/* Portfolio Project Routes */}
          <Route path="/portfolio/espaco-de-eventos" element={<EspacoEventosPage />} />
          <Route path="/portfolio/ar-condicionado" element={<ArCondicionadoPage />} />
          <Route path="/portfolio/escritorio-de-advocacia" element={<EscritorioAdvocaciaPage />} />
          <Route path="/portfolio/consultorio-odontologico" element={<ConsultorioOdontologicoPage />} />
          <Route path="/portfolio/concessionaria-de-veiculos" element={<ConcessionariaVeiculosPage />} />
          <Route path="/portfolio/imobiliaria" element={<ImobiliariaPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;