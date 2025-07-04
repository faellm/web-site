import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Services from '@/components/landing/Services';
import Benefits from '@/components/landing/Benefits';
import About from '@/components/landing/About';
import CTA from '@/components/landing/CTA';
import PromoBanner from '@/components/landing/PromoBanner';
import WhyWebsiteSection from '@/components/landing/WhyWebsiteSection';
import GoogleMyBusiness from '@/components/landing/GoogleMyBusiness';
import OnlineMenu from '@/components/landing/OnlineMenu';

const LandingPage = ({ onOpenContactDialog, onShowToast, onOrcamentoClick }) => {
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  return (
    <>
      <Hero onOrcamentoClick={onOrcamentoClick} onPortfolioClick={handlePortfolioClick} />
      <Stats />
      <WhyWebsiteSection onOrcamentoClick={onOrcamentoClick} />
      <GoogleMyBusiness onOrcamentoClick={onOrcamentoClick} />
      <OnlineMenu />
      <Services />
      <PromoBanner />
      <Benefits />
      <About onShowToast={onShowToast} />
      <CTA onOpenContactDialog={onOpenContactDialog} onShowToast={onShowToast} />
    </>
  );
};

export default LandingPage;