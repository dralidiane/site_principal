import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import transform1 from '../assets/logos/transform1.webp';
import transform2 from '../assets/logos/transform2.webp';
import transform3 from '../assets/logos/transform3.webp';
import botoxImg from '../assets/logos/botox.webp';
import preenchimentoImg from '../assets/logos/preencimento.webp';
import papadaImg from '../assets/logos/papada.webp';

const results = [
  {
    id: 1,
    category: 'Harmonização Facial',
    image: transform1
  },
  {
    id: 2,
    category: 'Preenchimento Labial',
    image: transform2
  },
  {
    id: 3,
    category: 'Toxina Botulínica',
    image: transform3
  },
  {
    id: 4,
    category: 'Botox',
    image: botoxImg
  },
  {
    id: 5,
    category: 'Preenchimento',
    image: preenchimentoImg
  },
  {
    id: 6,
    category: 'Papada',
    image: papadaImg
  }
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? results.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === results.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="resultados" className="py-12 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#c8a09b] mb-3 sm:mb-4 uppercase">RESULTADOS REAIS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#1e1e1e] tracking-tight mb-4 sm:mb-6">
            A transformação natural que você merece
          </h2>
          <p className="text-base sm:text-lg font-body font-light text-[#1e1e1e]/70">
            Veja alguns dos resultados alcançados com técnicas precisas e olhar clínico apurado.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-md mx-auto">
          <style>{`
            .carousel-track {
              display: flex;
              gap: 0;
              transition: transform 0.5s ease-in-out;
            }
            
            /* All screens: Each image takes full width */
            .carousel-item {
              flex: 0 0 100%;
              max-width: 100%;
            }
          `}</style>

          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {results.map((result, index) => (
                <div
                  key={`${result.id}-${index}`}
                  className="carousel-item relative aspect-[3/4] bg-white rounded-sm overflow-hidden shadow-lg"
                >
                  <img
                    src={result.image}
                    alt={`Resultado antes e depois - ${result.category}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#c8a09b] p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#c8a09b] p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? 'w-8 h-2 bg-[#c8a09b]'
                  : 'w-2 h-2 bg-[#c8a09b]/30 hover:bg-[#c8a09b]/50'
                  }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]/60 italic px-4">
            * Resultados podem variar de acordo com cada paciente. Fotos meramente ilustrativas.
          </p>
        </div>
      </div>
    </section>
  );
}
