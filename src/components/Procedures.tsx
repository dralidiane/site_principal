import { Sparkles, Smile, Droplet, Layers, ArrowUpCircle } from 'lucide-react';

const procedures = [
  {
    icon: Sparkles,
    title: 'Harmonização Facial',
    description: 'Técnicas avançadas para realçar suas características naturais e promover equilíbrio facial através de procedimentos personalizados.'
  },
  {
    icon: Smile,
    title: 'Toxina Botulínica',
    description: 'Tratamento para suavização de linhas de expressão e prevenção do envelhecimento (Botox), mantendo a naturalidade dos movimentos faciais.'
  },
  {
    icon: Droplet,
    title: 'Preenchimento Labial',
    description: 'Definição e volume natural dos lábios, respeitando as proporções do rosto e criando resultados harmônicos e elegantes.'
  },
  {
    icon: Layers,
    title: 'Bioestimuladores de Colágeno',
    description: 'Estímulo natural da produção de colágeno para rejuvenescimento progressivo e duradouro com resultados sutis e naturais.'
  },
  {
    icon: ArrowUpCircle,
    title: 'Lifting Facial sem Cirurgia',
    description: 'Técnicas minimamente invasivas para lifting e rejuvenescimento facial, promovendo firmeza e contornos definidos.'
  }
];

export default function Procedures() {
  return (
    <section id="procedimentos" className="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-[#f3e1db] via-white to-[#f3e1db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#c8a09b] mb-3 sm:mb-4 uppercase">PROCEDIMENTOS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#1e1e1e] tracking-tight mb-4 sm:mb-6">
            Tratamentos personalizados para realçar sua beleza natural
          </h2>
          <p className="text-base sm:text-lg font-body font-light text-[#1e1e1e]/70">
            Cada procedimento é cuidadosamente planejado para garantir resultados harmônicos, sutis e naturais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <procedure.icon
                size={36}
                className="sm:w-10 sm:h-10 text-[#c8a09b] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="text-xl sm:text-2xl font-display font-normal text-[#1e1e1e] mb-3 sm:mb-4 tracking-tight">
                {procedure.title}
              </h3>
              <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]/70">
                {procedure.description}
              </p>
            </div>
          ))}

          <div className="bg-gradient-to-br from-[#c8a09b] to-[#d9b6af] p-6 sm:p-8 rounded-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white">
            <Sparkles size={36} className="sm:w-10 sm:h-10 mb-4 sm:mb-6" strokeWidth={1.5} />
            <h3 className="text-xl sm:text-2xl font-display font-normal mb-3 sm:mb-4 tracking-tight">
              Tecnologias Avançadas
            </h3>
            <p className="text-xs sm:text-sm font-body font-light mb-4 sm:mb-6">
              Conheça nossos procedimentos com equipamentos de última geração para resultados extraordinários.
            </p>
            <a
              href="#procedimentos-avancados"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('procedimentos-avancados')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block text-sm font-light tracking-wide text-white border-b border-white/50 hover:border-white transition-colors"
            >
              Saiba mais →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
