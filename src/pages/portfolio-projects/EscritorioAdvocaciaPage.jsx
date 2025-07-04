import React from 'react';
import ProjectPageLayout from './ProjectPageLayout';
import { Button } from '@/components/ui/button';
import { Gavel, Landmark, Users, Scale } from 'lucide-react';

const EscritorioAdvocaciaPage = () => {
  return (
    <ProjectPageLayout>
      <div className="bg-[#1a202c] text-gray-200">
        <header className="container mx-auto px-6 py-20 flex items-center justify-between">
            <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-white">Defesa, Estratégia e Justiça</h1>
                <p className="mt-4 text-lg text-gray-400">Escritório de advocacia com especialistas em diversas áreas do direito, comprometidos com a sua causa.</p>
                <Button size="lg" className="mt-8 bg-amber-700 hover:bg-amber-800">Agendar Consulta</Button>
            </div>
            <div className="hidden lg:block">
                <Scale size={128} className="text-amber-600 opacity-50" />
            </div>
        </header>

        <section id="areas" className="py-20 bg-[#2d3748]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Áreas de Atuação</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 border border-gray-600 rounded-lg">
                        <Landmark className="w-10 h-10 mb-3 text-amber-600" />
                        <h3 className="text-xl font-semibold text-white">Direito Empresarial</h3>
                        <p className="mt-2 text-gray-400">Assessoria completa para sua empresa.</p>
                    </div>
                     <div className="p-6 border border-gray-600 rounded-lg">
                        <Gavel className="w-10 h-10 mb-3 text-amber-600" />
                        <h3 className="text-xl font-semibold text-white">Direito Criminal</h3>
                        <p className="mt-2 text-gray-400">Defesa técnica e especializada em todas as fases.</p>
                    </div>
                    <div className="p-6 border border-gray-600 rounded-lg">
                        <Users className="w-10 h-10 mb-3 text-amber-600" />
                        <h3 className="text-xl font-semibold text-white">Direito de Família</h3>
                        <p className="mt-2 text-gray-400">Soluções para questões familiares e sucessões.</p>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="py-10 text-center text-gray-500">
            <p>Advocacia & Consultoria Jurídica &copy; 2025</p>
        </footer>
      </div>
    </ProjectPageLayout>
  );
};

export default EscritorioAdvocaciaPage;