import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

interface ContactProps {
  onLeadCapture: (service?: string) => void;
}

export default function Contact({ onLeadCapture }: ContactProps) {

  return (
    <section id="contato" className="py-20 lg:py-32 bg-gradient-to-br from-[#c8a09b] to-[#d9b6af] text-white" itemScope itemType="https://schema.org/ContactPoint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-body font-light tracking-widest mb-3 sm:mb-4 text-white/80 uppercase">AGENDE SUA AVALIAÇÃO</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal tracking-tight mb-4 sm:mb-6">
                A sua melhor versão está a um passo
              </h2>
              <p className="text-base sm:text-lg font-body font-light text-white/90">
                Agende sua avaliação e descubra o poder da harmonização natural.
                Estamos prontos para transformar seus sonhos em realidade com
                segurança, técnica e cuidado.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onLeadCapture('Avaliação pelo WhatsApp')}
              className="w-full sm:w-auto inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#c8a09b] text-sm sm:text-base font-light tracking-wide hover:bg-white/90 transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Agendar pelo WhatsApp
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin size={20} className="sm:w-6 sm:h-6 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base sm:text-lg font-display font-normal mb-1 sm:mb-2 tracking-tight">
                    Localização
                  </h3>
                  <p className="text-xs sm:text-sm font-body font-light text-white/90 leading-relaxed">
                    Britannia Park Offices<br />
                    Torre Stanford, Sala 504<br />
                    Av. Coronel Teixeira, 6225 - Ponta Negra
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <Phone size={20} className="sm:w-6 sm:h-6 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base sm:text-lg font-display font-normal mb-1 sm:mb-2 tracking-tight">
                    Telefone
                  </h3>
                  <p className="text-xs sm:text-sm font-body font-light text-white/90">
                    (92) 98212-3626
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <Mail size={20} className="sm:w-6 sm:h-6 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base sm:text-lg font-display font-normal mb-1 sm:mb-2 tracking-tight">
                    E-mail
                  </h3>
                  <p className="text-xs sm:text-sm font-body font-light text-white/90 break-words">
                    contato@dralidianearmento.com.br
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <Clock size={20} className="sm:w-6 sm:h-6 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base sm:text-lg font-display font-normal mb-1 sm:mb-2 tracking-tight">
                    Horário de Atendimento
                  </h3>
                  <p className="text-xs sm:text-sm font-body font-light text-white/90 leading-relaxed">
                    Segunda a Sexta: 9h às 18h<br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-sm hover:bg-white/20 transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <Instagram size={20} className="sm:w-6 sm:h-6 flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-base sm:text-lg font-display font-normal mb-1 sm:mb-2 tracking-tight">
                    Redes Sociais
                  </h3>
                  <a
                    href="https://instagram.com/dralidianearmento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-body font-light text-white/90 hover:text-white transition-colors break-words"
                  >
                    @dra.lidianecatundasarmento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
