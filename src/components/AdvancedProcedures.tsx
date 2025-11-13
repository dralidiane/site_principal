import { Zap, Eye, Cpu, Syringe } from 'lucide-react';

interface AdvancedProceduresProps {
  onLeadCapture: (service?: string) => void;
}

// Importar imagens quando disponíveis (descomente quando adicionar as imagens)
// import laserCo2Img from '../assets/procedimentos/laser-co2.jpg';
// import blefaroplastiaImg from '../assets/procedimentos/blefaroplastia.jpg';
// import radiofrequenciaImg from '../assets/procedimentos/radiofrequencia.jpg';
// import fiosPdoImg from '../assets/procedimentos/fios-pdo.jpg';

const advancedProcedures = [
  {
    icon: Zap,
    title: 'Laser de CO₂ Ultrapulsado',
    subtitle: 'Pele Nova, Textura Renovada',
    benefit: 'Melhora rugas, manchas e textura com estímulo profundo de colágeno.',
    transformation: 'Pele lisa, firme e iluminada com segurança e precisão.',
    cta: 'Quero renovar minha pele',
    ctaId: 'laser-co2',
    image: null // Substitua por: laserCo2Img quando disponível
  },
  {
    icon: Eye,
    title: 'Blefaroplastia com Laser',
    subtitle: 'Olhar Descansado e Jovem',
    benefit: 'Reduz flacidez das pálpebras e rejuvenescimento do olhar sem cortes.',
    transformation: 'Um olhar mais aberto, firme e revitalizado.',
    cta: 'Quero rejuvenescer meu olhar',
    ctaId: 'blefaroplastia',
    image: null // Substitua por: blefaroplastiaImg quando disponível
  },
  {
    icon: Cpu,
    title: 'Radiofrequência Microagulhada Robótica',
    subtitle: 'Regeneração de Alta Performance',
    benefit: 'Combina tecnologia e precisão para tratar flacidez e cicatrizes.',
    transformation: 'Pele mais firme, poros reduzidos e textura uniforme.',
    cta: 'Quero revitalizar minha pele',
    ctaId: 'radiofrequencia',
    image: null // Substitua por: radiofrequenciaImg quando disponível
  },
  {
    icon: Syringe,
    title: 'Fios de PDO',
    subtitle: 'Sustentação e Rejuvenescimento Natural',
    benefit: 'Efeito lifting imediato e estímulo de colágeno a longo prazo.',
    transformation: 'Contornos firmes, traços definidos e rejuvenescimento sem cirurgia.',
    cta: 'Quero efeito lifting sem cortes',
    ctaId: 'fios-pdo',
    image: null // Substitua por: fiosPdoImg quando disponível
  }
];

export default function AdvancedProcedures({ onLeadCapture }: AdvancedProceduresProps) {
  return (
    <section id="procedimentos-avancados" className="py-12 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#c8a09b] mb-3 sm:mb-4 uppercase">TECNOLOGIAS AVANÇADAS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#1e1e1e] tracking-tight mb-4 sm:mb-6">
            Procedimentos de Alta Tecnologia
          </h2>
          <p className="text-base sm:text-lg font-body font-light text-[#1e1e1e]/70">
            Equipamentos de última geração combinados com técnica refinada para resultados extraordinários.
          </p>
        </div>

        <div className="space-y-12">
          {advancedProcedures.map((procedure, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''} order-1 lg:order-none`}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <procedure.icon
                      size={40}
                      className="sm:w-12 sm:h-12 text-[#c8a09b]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-normal text-[#1e1e1e] mb-2 tracking-tight">
                      {procedure.title}
                    </h3>
                    <p className="text-sm sm:text-base font-display font-light italic text-[#c8a09b]">
                      {procedure.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pl-0 sm:pl-12 lg:pl-16">
                  <div>
                    <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#1e1e1e]/60 mb-2 uppercase">
                      Benefício Principal
                    </p>
                    <p className="text-base sm:text-lg font-body font-light text-[#1e1e1e]">
                      {procedure.benefit}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#1e1e1e]/60 mb-2 uppercase">
                      Transformação
                    </p>
                    <p className="text-base sm:text-lg font-body font-light text-[#1e1e1e]">
                      {procedure.transformation}
                    </p>
                  </div>

                  {/* Botão CTA - Dentro do conteúdo no desktop (oculto no mobile) */}
                  <div className="pt-4 hidden lg:block">
                    <button
                      type="button"
                      onClick={() => onLeadCapture(procedure.title)}
                      className="w-full sm:w-auto inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-[#c8a09b] text-white text-xs sm:text-sm font-light tracking-wide hover:bg-[#d9b6af] transition-all duration-300 rounded-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      {procedure.cta}
                    </button>
                  </div>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} order-2 lg:order-none`}>
                <div className="aspect-[4/5] bg-gradient-to-br from-[#f3e1db] to-[#d9b6af] rounded-sm shadow-xl overflow-hidden">
                  {procedure.image ? (
                    <img
                      src={procedure.image}
                      alt={`Resultado do procedimento ${procedure.title}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#c8a09b]/30">
                      <div className="text-center">
                        <procedure.icon size={64} className="mx-auto mb-4" />
                        <p className="text-sm font-light">Resultado {procedure.title}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Botão CTA - Abaixo da imagem no mobile (oculto no desktop) */}
              <div className="flex lg:hidden justify-center order-3">
                <button
                  type="button"
                  onClick={() => onLeadCapture(procedure.title)}
                  className="w-full max-w-sm px-6 py-2.5 bg-[#c8a09b] text-white text-xs sm:text-sm font-light tracking-wide hover:bg-[#d9b6af] transition-all duration-300 rounded-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  {procedure.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <p className="text-xs sm:text-sm font-light text-[#1e1e1e]/60 italic max-w-2xl mx-auto px-4">
            Cada procedimento é realizado com tecnologia de ponta e protocolo de segurança rigoroso.
            Agende sua avaliação para conhecer qual é o ideal para sua pele.
          </p>
        </div>
      </div>
    </section>
  );
}
