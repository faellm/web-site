import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import { Button } from '@/components/ui/button';
import { Smile, Calendar, Heart, Award } from 'lucide-react';

const ConsultorioOdontologicoPage = () => {
  return (
    <ProjectPageLayout>
      <div className="bg-white text-gray-800">
        <header className="relative bg-teal-500 text-white">
          <div className="container mx-auto px-6 py-24 text-center">
            <Smile className="w-24 h-24 mx-auto mb-4" />
            <h1 className="text-5xl font-bold">Cuidando do seu Sorriso, Transformando Vidas</h1>
            <p className="mt-4 text-xl text-teal-100">Odontologia moderna e humanizada para toda a família.</p>
            <Button size="lg" className="mt-8 bg-white text-teal-600 hover:bg-gray-100">Agende sua Avaliação</Button>
          </div>
        </header>

        <section className="py-20 px-6 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-700">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Clareamento</h3>
              <p>Conquiste um sorriso mais branco e radiante.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Implantes</h3>
              <p>Recupere a função e a estética do seu sorriso.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Ortodontia</h3>
              <p>Alinhamento perfeito para um sorriso saudável.</p>
            </div>
            <div className="text-center p-6 bg-gray-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">Limpeza</h3>
              <p>Prevenção e saúde bucal em primeiro lugar.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-teal-50 px-6">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-teal-800 mb-4">Tecnologia e Conforto para Você</h2>
              <p className="text-lg mb-6">Utilizamos equipamentos de ponta para garantir um tratamento preciso, rápido e confortável. Nosso ambiente foi pensado para que você se sinta relaxado e seguro.</p>
              <div className="space-y-4">
                <div className="flex items-center"><Award className="w-6 h-6 mr-3 text-teal-600" /><span>Profissionais Especializados</span></div>
                <div className="flex items-center"><Heart className="w-6 h-6 mr-3 text-teal-600" /><span>Atendimento Humanizado</span></div>
              </div>
            </div>
            <div>
              <img  alt="Interior de um consultório odontológico moderno e bem equipado" className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1629909615957-be38d48fbbe6" />
            </div>
          </div>
        </section>
      </div>
    </ProjectPageLayout>
  );
};

export default ConsultorioOdontologicoPage;