import { Sparkles } from 'lucide-react';
import heroImage from '../assets/logos/IMG_8624.JPG';

interface HeroProps {
  onLeadCapture: (service?: string) => void;
}

export default function Hero({ onLeadCapture }: HeroProps) {

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-[#f3e1db] via-[#d9b6af]/20 to-[#f3e1db]" itemScope itemType="https://schema.org/MedicalBusiness">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMTIgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNjOGEwOWIiIHN0cm9rZS13aWR0aD0iLjUiIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-16 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Textos - Acima no mobile, esquerda no desktop */}
          <div className="text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8 order-1 lg:order-1">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 bg-white/60 backdrop-blur-sm rounded-full">
              <Sparkles size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#c8a09b] flex-shrink-0" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-body font-light tracking-widest text-[#1e1e1e] uppercase whitespace-nowrap">Especialista em Harmonização Orofacial</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-normal text-[#1e1e1e] tracking-tight leading-tight px-2 sm:px-0">
              A arte de realçar sua beleza com{' '}
              <span className="text-[#c8a09b] italic font-light">naturalidade e precisão</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-body font-light text-[#1e1e1e]/80 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              Especialista em Harmonização Orofacial em Manaus, com foco em resultados sutis, harmônicos e elegantes.
            </p>

            {/* Botões - Dentro dos textos no desktop (oculto no mobile) */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <button
                type="button"
                onClick={() => onLeadCapture('Avaliação Geral')}
                className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#c8a09b] text-white text-xs sm:text-sm md:text-base font-light tracking-wide hover:bg-[#d9b6af] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Agendar Avaliação
              </button>
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/80 backdrop-blur-sm text-[#1e1e1e] text-xs sm:text-sm md:text-base font-light tracking-wide hover:bg-white transition-all duration-300 rounded-sm text-center"
              >
                Conheça mais
              </a>
            </div>
          </div>

          {/* Imagem - Meio no mobile, direita no desktop */}
          <div className="relative order-2 lg:order-2 mb-0 sm:mb-8 lg:mb-0 px-2 sm:px-0">
            <div className="aspect-[3/4] max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none bg-gradient-to-br from-[#d9b6af] to-[#c8a09b] rounded-sm shadow-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Dra. Lidiane Sarmento - Especialista em Harmonização Orofacial em Manaus"
                className="w-full h-full object-cover object-[center_35%]"
                loading="eager"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-[#f3e1db] rounded-full -z-10"></div>
            <div className="hidden sm:block absolute -top-6 -left-6 w-16 sm:w-24 h-16 sm:h-24 bg-white/50 rounded-full -z-10"></div>
          </div>

          {/* Botões - Abaixo da imagem no mobile (oculto no desktop) */}
          <div className="flex lg:hidden flex-col gap-2.5 sm:gap-3 md:gap-4 justify-center px-2 sm:px-0 order-3">
            <button
              type="button"
              onClick={() => onLeadCapture('Avaliação Geral')}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#c8a09b] text-white text-xs sm:text-sm md:text-base font-light tracking-wide hover:bg-[#d9b6af] transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mx-auto"
            >
              Agendar Avaliação
            </button>
            <a
              href="#sobre"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/80 backdrop-blur-sm text-[#1e1e1e] text-xs sm:text-sm md:text-base font-light tracking-wide hover:bg-white transition-all duration-300 rounded-sm text-center mx-auto"
            >
              Conheça mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
