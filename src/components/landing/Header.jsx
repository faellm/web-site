import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';

const Header = ({ onOpenContactDialog }) => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <motion.div whileHover={{ scale: 1.05 }}>
              <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/fb071005-5e81-4e6a-b36a-591920033843/34cfd6c48447f988e4f0cd7cecdef988.png" alt="Before Tech Logo" className="h-12 w-auto" />
          </motion.div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#servicos" className="text-gray-300 hover:text-pink-400 transition-colors">Serviços</a>
          <Link to="/portfolio" className="text-gray-300 hover:text-pink-400 transition-colors">Portfólio</Link>
          <a href="/#contato" className="text-gray-300 hover:text-pink-400 transition-colors">Contato</a>
          <div className="flex items-center space-x-4">
             <a href="https://www.instagram.com/beforetech/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/before-tech/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
          </div>
          <Button onClick={onOpenContactDialog} className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            Começar Projeto
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;