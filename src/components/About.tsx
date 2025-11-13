import { Award, Heart, Users } from 'lucide-react';
import aboutImage from '../assets/logos/IMG_8628.JPG';

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-white" itemScope itemType="https://schema.org/Person">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] max-w-sm mx-auto lg:max-w-none bg-gradient-to-br from-[#f3e1db] to-[#d9b6af] rounded-sm shadow-xl overflow-hidden">
              <img
                src={aboutImage}
                alt="Dra. Lidiane Sarmento em ambiente clínico - Clínica de Harmonização Orofacial em Manaus"
                className="w-full h-full object-cover object-[center_35%]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div>
              <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#c8a09b] mb-3 sm:mb-4 uppercase">CONHEÇA A ESPECIALISTA</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#1e1e1e] tracking-tight">
                Dra. Lidiane Sarmento
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-[#1e1e1e]/80 font-body font-light text-sm sm:text-base">
              <p>
                Com anos de experiência dedicados à arte da harmonização orofacial,
                minha missão é realçar a beleza natural de cada paciente através de
                técnicas avançadas e um olhar clínico apurado.
              </p>
              <p>
                Acredito que os melhores resultados são aqueles que respeitam a
                individualidade e preservam a expressão autêntica de cada pessoa.
                Cada procedimento é personalizado, pensado nos mínimos detalhes para
                alcançar harmonia, equilíbrio e naturalidade.
              </p>
              <p>
                Meu compromisso é oferecer não apenas excelência técnica, mas também
                um atendimento humanizado, onde você se sente acolhida e segura em
                cada etapa da sua jornada estética.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4">
              <div className="text-center p-3 sm:p-4">
                <Award size={28} className="sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#c8a09b]" strokeWidth={1.5} />
                <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]">Certificações Internacionais</p>
              </div>
              <div className="text-center p-3 sm:p-4">
                <Users size={28} className="sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#c8a09b]" strokeWidth={1.5} />
                <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]">Mais de 1000 pacientes</p>
              </div>
              <div className="text-center p-3 sm:p-4">
                <Heart size={28} className="sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-[#c8a09b]" strokeWidth={1.5} />
                <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]">Atendimento humanizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
