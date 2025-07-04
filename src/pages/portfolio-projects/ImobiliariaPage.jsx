import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import { Button } from '@/components/ui/button';
import { Home, Building, Map, Key } from 'lucide-react';

const ImobiliariaPage = () => {
  return (
    <ProjectPageLayout>
      <div className="bg-white text-gray-800">
        <header className="bg-sky-700 text-white">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-extrabold">O imóvel dos seus sonhos está aqui</h1>
              <p className="mt-4 text-xl text-sky-100">Encontre casas, apartamentos e terrenos com a assessoria dos melhores corretores do mercado.</p>
            </div>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                    <input type="text" placeholder="Cidade ou Bairro" className="p-3 rounded-md text-gray-800" />
                    <select className="p-3 rounded-md text-gray-800">
                        <option>Casa</option>
                        <option>Apartamento</option>
                        <option>Terreno</option>
                    </select>
                    <Button className="w-full bg-yellow-400 text-sky-800 hover:bg-yellow-500 p-3">Buscar Imóveis</Button>
                </div>
            </div>
          </div>
        </header>

        <main className="py-20 px-6 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Imóveis em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img  alt="Casa moderna com piscina" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1667141535040-f7223decd4b2" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Casa de Luxo</h3>
                <p className="text-gray-600">4 quartos, 5 banheiros</p>
                <p className="text-sky-700 text-2xl font-bold mt-2">R$ 2.500.000</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img  alt="Apartamento com vista para a cidade" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1681563009521-feda19915bad" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Apartamento Moderno</h3>
                <p className="text-gray-600">3 quartos, 2 banheiros</p>
                <p className="text-sky-700 text-2xl font-bold mt-2">R$ 950.000</p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img  alt="Terreno amplo em condomínio fechado" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1564931674174-0601546deb9f" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">Terreno em Condomínio</h3>
                <p className="text-gray-600">1000m²</p>
                <p className="text-sky-700 text-2xl font-bold mt-2">R$ 600.000</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProjectPageLayout>
  );
};

export default ImobiliariaPage;