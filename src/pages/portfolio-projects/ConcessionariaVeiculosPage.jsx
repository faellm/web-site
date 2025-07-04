import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import { Button } from '@/components/ui/button';
import { Car, Gauge, Users, Search } from 'lucide-react';

const ConcessionariaVeiculosPage = () => {
  return (
    <ProjectPageLayout>
      <div className="bg-gray-900 text-white">
        <header className="relative h-[70vh]">
          <img  alt="Carro esportivo vermelho em uma estrada sinuosa" className="absolute inset-0 w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1593382805641-7fd3c6161846" />
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-wider uppercase">Encontre seu Próximo Carro</h1>
            <p className="mt-4 text-xl text-gray-300">Veículos novos e seminovos com as melhores condições.</p>
            <div className="mt-8 w-full max-w-2xl">
              <div className="relative">
                <input type="text" placeholder="Qual carro você procura?" className="w-full p-4 rounded-full bg-white/20 backdrop-blur-sm border-0 focus:ring-2 focus:ring-red-500 text-lg" />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 rounded-full" size="icon"><Search/></Button>
              </div>
            </div>
          </div>
        </header>

        <section className="py-20 px-6 container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Destaques da Semana</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img  alt="Carro sedan de luxo prateado" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1568074532275-b57393b08c64" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Sedan Executivo</h3>
                <p className="text-red-500 text-xl font-semibold mt-2">R$ 150.000</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img  alt="SUV familiar branco" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1677517859847-0e750bfd13a9" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">SUV Familiar</h3>
                <p className="text-red-500 text-xl font-semibold mt-2">R$ 180.000</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img  alt="Carro compacto hatch amarelo" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1701314929427-eef2dd679306" />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Hatch Compacto</h3>
                <p className="text-red-500 text-xl font-semibold mt-2">R$ 85.000</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">Ver todo o estoque</Button>
          </div>
        </section>
      </div>
    </ProjectPageLayout>
  );
};

export default ConcessionariaVeiculosPage;