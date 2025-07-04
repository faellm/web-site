import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioCard = ({ title, description, imageText, altText }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.03 }}
      className="glass-effect rounded-2xl overflow-hidden h-full flex flex-col group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img  
          alt={altText}
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
          src="https://images.unsplash.com/photo-1599154835218-8bce9b84d5f0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 text-sm flex-grow">{description}</p>
        <div className="mt-4 text-pink-400 font-semibold flex items-center">
            Ver Projeto
            <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;