import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import { Button } from '@/components/ui/button';
import { Thermometer, Zap, ShieldCheck, Wrench } from 'lucide-react';

const ArCondicionadoPage = () => {
  return (
    <ProjectPageLayout>
      <div className="bg-blue-900 text-white">
        <header className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold">Conforto e Clima Ideal o Ano Inteiro</h1>
            <p className="mt-4 text-lg text-blue-200">Instalação, manutenção e reparo de ar condicionado com técnicos certificados. Solicite um orçamento rápido e gratuito.</p>
            <Button size="lg" className="mt-8 bg-yellow-400 text-blue-900 hover:bg-yellow-500">Orçamento Gratuito</Button>
          </div>
          <div className="md:w-1/2">
            <img  alt="Família feliz em uma sala de estar climatizada" className="rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1581342997451-0215a38cf1cf" />
          </div>
        </header>
        
        <section className="py-20 bg-blue-800 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Por que nos escolher?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-4">
                <Thermometer className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold">Eficiência Energética</h3>
                <p className="text-blue-200">Equipamentos modernos que economizam na sua conta de luz.</p>
              </div>
              <div className="text-center p-4">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold">Técnicos Qualificados</h3>
                <p className="text-blue-200">Profissionais experientes para um serviço seguro e eficaz.</p>
              </div>
              <div className="text-center p-4">
                <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold">Instalação Rápida</h3>
                <p className="text-blue-200">Agendamos e executamos o serviço com agilidade.</p>
              </div>
              <div className="text-center p-4">
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold">Garantia de Serviço</h3>
                <p className="text-blue-200">Sua satisfação e conforto são nossa prioridade.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 text-center">
            <p>Atendemos toda a região. Entre em contato!</p>
        </footer>
      </div>
    </ProjectPageLayout>
  );
};

export default ArCondicionadoPage;