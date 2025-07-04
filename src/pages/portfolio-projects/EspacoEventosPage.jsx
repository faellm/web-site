import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Mail } from 'lucide-react';

const EspacoEventosPage = () => {
  return (
    <ProjectPageLayout>
      <div className="bg-gray-900">
        <header className="relative h-[60vh] flex items-center justify-center text-center text-white">
          <img  alt="Salão de festas luxuosamente decorado para um casamento" className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1689147445865-ac36635bae1e" />
          <div className="relative z-10 p-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Celebre Momentos Inesquecíveis</h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">O espaço perfeito para seus eventos, de casamentos a conferências corporativas.</p>
            <Button size="lg" className="mt-8 bg-pink-600 hover:bg-pink-700">Reservar uma Data</Button>
          </div>
        </header>

        <section className="py-20 px-6 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Diferenciais</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-6 bg-gray-800 rounded-lg">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-semibold mb-2">Flexibilidade de Datas</h3>
              <p>Agende seu evento com a flexibilidade que você precisa.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-semibold mb-2">Localização Privilegiada</h3>
              <p>Fácil acesso e estacionamento para todos os seus convidados.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <Users className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-semibold mb-2">Capacidade Versátil</h3>
              <p>Espaços que se adaptam a eventos de todos os tamanhos.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Pronto para Planejar seu Evento?</h2>
            <p className="text-lg text-gray-300 mb-8">Entre em contato e solicite um orçamento personalizado.</p>
            <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white">
              <Mail className="mr-2 h-5 w-5" /> Fale Conosco
            </Button>
          </div>
        </section>
      </div>
    </ProjectPageLayout>
  );
};

export default EspacoEventosPage;