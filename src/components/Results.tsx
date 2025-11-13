import { Image } from 'lucide-react';

// Importar imagens quando disponíveis (descomente quando adicionar as imagens)
// import resultadoHarmonizacao from '../assets/procedimentos/resultado-harmonizacao.jpg';
// import resultadoPreenchimento from '../assets/procedimentos/resultado-preenchimento.jpg';
// import resultadoToxina from '../assets/procedimentos/resultado-toxina.jpg';
// import resultadoBioestimuladores from '../assets/procedimentos/resultado-bioestimuladores.jpg';
// import resultadoLifting from '../assets/procedimentos/resultado-lifting.jpg';
// import resultadoCompleto from '../assets/procedimentos/resultado-completo.jpg';

const results = [
  { 
    id: 1, 
    category: 'Harmonização Facial',
    image: null // Substitua por: resultadoHarmonizacao quando disponível
  },
  { 
    id: 2, 
    category: 'Preenchimento Labial',
    image: null // Substitua por: resultadoPreenchimento quando disponível
  },
  { 
    id: 3, 
    category: 'Toxina Botulínica',
    image: null // Substitua por: resultadoToxina quando disponível
  },
  { 
    id: 4, 
    category: 'Bioestimuladores',
    image: null // Substitua por: resultadoBioestimuladores quando disponível
  },
  { 
    id: 5, 
    category: 'Lifting Facial',
    image: null // Substitua por: resultadoLifting quando disponível
  },
  { 
    id: 6, 
    category: 'Harmonização Completa',
    image: null // Substitua por: resultadoCompleto quando disponível
  }
];

export default function Results() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {results.map((result) => (
            <div
              key={result.id}
              className="group relative aspect-[3/4] bg-gradient-to-br from-[#f3e1db] to-[#d9b6af] rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {result.image ? (
                <>
                  <img
                    src={result.image}
                    alt={`Resultado antes e depois - ${result.category}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-body font-light">{result.category}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#c8a09b]/30">
                    <Image size={48} className="mb-4" strokeWidth={1.5} />
                    <p className="text-sm font-body font-light text-center px-4">
                      Antes & Depois<br />
                      {result.category}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-body font-light">{result.category}</p>
                  </div>
                </>
              )}
            </div>
          ))}
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
