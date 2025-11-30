import { Heart, UserCheck, Building2, Award, Zap, Shield } from 'lucide-react';

const differentials = [
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada paciente é único e recebe um plano de tratamento exclusivo'
  },
  {
    icon: UserCheck,
    title: 'Resultados Naturais',
    description: 'Foco em harmonização respeitando suas características únicas'
  },
  {
    icon: Building2,
    title: 'Estrutura Moderna',
    description: 'Ambiente acolhedor e equipado com tecnologia de ponta'
  },
  {
    icon: Award,
    title: 'Experiência e Certificações',
    description: 'Formação sólida e atualização constante em técnicas avançadas'
  },
  {
    icon: Zap,
    title: 'Tecnologia de Ponta',
    description: 'Equipamentos modernos e produtos premium de qualidade internacional'
  },
  {
    icon: Shield,
    title: 'Segurança e Confiança',
    description: 'Protocolos rigorosos de segurança em todos os procedimentos'
  }
];

export default function Differentials() {
  return (
    <section className="py-12 sm:py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#c8a09b] mb-3 sm:mb-4 uppercase">DIFERENCIAIS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#1e1e1e] tracking-tight">
            Por que escolher a Dra. Lidiane Sarmento?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 group hover:bg-[#f3e1db]/30 rounded-sm transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-[#f3e1db] group-hover:bg-[#c8a09b] transition-colors duration-300">
                <item.icon
                  size={24}
                  className="sm:w-7 sm:h-7 text-[#c8a09b] group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-display font-normal text-[#1e1e1e] mb-2 sm:mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
