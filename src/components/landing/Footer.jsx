import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="py-16 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
                <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/fb071005-5e81-4e6a-b36a-591920033843/34cfd6c48447f988e4f0cd7cecdef988.png" alt="Before Tech Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Criamos identidade online para empresas que ainda não têm. 
              Sites profissionais e consultoria em inovação tecnológica.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/beforetech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black h-10 w-10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/before-tech/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black h-10 w-10">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/servicos/criacao-de-sites" className="hover:text-pink-400 transition-colors">Criação de Sites</a></li>
              <li><a href="/servicos/consultoria-inovacao" className="hover:text-pink-400 transition-colors">Consultoria Tech</a></li>
              <li><a href="/servicos/identidade-online" className="hover:text-pink-400 transition-colors">Identidade Online</a></li>
               <li><a href="/servicos/site-para-bios" className="hover:text-pink-400 transition-colors">Site para Bios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-3 text-pink-400"/>contato@beforetech.com.br</li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-3 text-pink-400"/>+55 (41) 99927-4030</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-3 text-pink-400"/>Curitiba, PR</li>
              <li className="flex items-center"><Clock className="w-4 h-4 mr-3 text-pink-400"/>Atendimento 24h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Before Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;