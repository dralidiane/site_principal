import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Santos',
    procedure: 'Harmonização Facial',
    text: 'A Dra. Lidiane tem um olhar único para harmonização. Os resultados superaram minhas expectativas, mantendo minha naturalidade. Me sinto confiante e feliz!',
    rating: 5
  },
  {
    name: 'Ana Paula Oliveira',
    procedure: 'Preenchimento Labial',
    text: 'Profissionalismo impecável! A Doutora entendeu exatamente o que eu queria e o resultado ficou perfeito. Lábios naturais e proporcionais.',
    rating: 5
  },
  {
    name: 'Juliana Costa',
    procedure: 'Toxina Botulínica',
    text: 'Atendimento maravilhoso do início ao fim. A Dra. Lidiane é extremamente cuidadosa e atenciosa. Recomendo de olhos fechados!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-12 sm:py-20 lg:py-32 bg-gradient-to-br from-[#f3e1db] via-white to-[#f3e1db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-body font-light tracking-widest text-[#c8a09b] mb-3 sm:mb-4 uppercase">DEPOIMENTOS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-[#1e1e1e] tracking-tight mb-4 sm:mb-6">
            O que dizem nossas pacientes
          </h2>
          <p className="text-base sm:text-lg font-body font-light text-[#1e1e1e]/70">
            A satisfação e confiança de quem já viveu essa experiência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote size={28} className="sm:w-8 sm:h-8 text-[#c8a09b]/20 mb-3 sm:mb-4" strokeWidth={1.5} />

              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="sm:w-4 sm:h-4 fill-[#c8a09b] text-[#c8a09b]"
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]/80 mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-[#c8a09b]/20 pt-3 sm:pt-4">
                <p className="text-xs sm:text-sm font-body font-light text-[#1e1e1e]">{testimonial.name}</p>
                <p className="text-[10px] sm:text-xs font-body font-light text-[#c8a09b] mt-1">{testimonial.procedure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
