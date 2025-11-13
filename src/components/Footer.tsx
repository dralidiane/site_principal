import { Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e1e1e] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-3 sm:mb-4 flex justify-center sm:justify-start">
              <Logo variant="light" logoType="footer" />
            </div>
            <p className="text-xs sm:text-sm font-body font-light text-white/70 mt-3 sm:mt-4 text-center sm:text-left">
              Especialista em Harmonização Orofacial dedicada a realçar sua beleza natural
              com técnicas precisas e resultados harmônicos.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-display font-normal mb-3 sm:mb-4 tracking-tight">
              Links Rápidos
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Início', 'Sobre', 'Procedimentos', 'Resultados', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs sm:text-sm font-body font-light text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-display font-normal mb-3 sm:mb-4 tracking-tight">
              Redes Sociais
            </h4>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/dra.lidianecatundasarmento/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#c8a09b] rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://facebook.com/dralidianearmento"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#c8a09b] rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm font-body font-light text-white/70">
            {currentYear} Dra. Lidiane Sarmento. Todos os direitos reservados.
          </p>
          <p className="text-gray-300 text-xs mt-4">
            Desenvolvido por{' '}
            <a
              href="https://www.kvgroupbr.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors duration-300 font-semibold"
            >
              KV <span className="text-yellow-400 font-bold">Group</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
