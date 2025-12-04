import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  scrolled: boolean;
  onLeadCapture: (service?: string) => void;
}

export default function Header({ scrolled, onLeadCapture }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-3 gap-2">
          <div className="flex-1 md:flex-none flex justify-center md:justify-start min-w-0">
            <button
              type="button"
              onClick={() => scrollToSection('hero')}
              className="flex items-center transition-opacity hover:opacity-80 focus:opacity-80 max-w-full"
            >
              <Logo />
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Início', 'Sobre', 'Procedimentos', 'Resultados', 'Depoimentos', 'Contato'].map((item) => {
              let id = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              if (id === 'inicio') id = 'hero';
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                  className="text-sm font-body font-light tracking-wide text-[#1e1e1e] hover:text-[#c8a09b] transition-colors"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => onLeadCapture('Avaliação Geral')}
              className="px-6 py-2.5 bg-[#c8a09b] text-white text-sm font-light tracking-wide hover:bg-[#d9b6af] transition-all duration-300 rounded-sm"
            >
              Agende sua Avaliação
            </button>
          </div>

          <button
            className="md:hidden text-[#1e1e1e] flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {['Início', 'Sobre', 'Procedimentos', 'Resultados', 'Depoimentos', 'Contato'].map((item) => {
              let id = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
              if (id === 'inicio') id = 'hero';
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(id)}
                    className="block w-full text-left text-sm font-body font-light tracking-wide text-[#1e1e1e] hover:text-[#c8a09b] py-2"
                >
                  {item}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                onLeadCapture('Avaliação Geral');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-center px-6 py-2.5 bg-[#c8a09b] text-white text-sm font-light tracking-wide hover:bg-[#d9b6af] transition-all duration-300 rounded-sm"
            >
              Agende sua Avaliação
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
