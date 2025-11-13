import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  defaultService?: string;
  onClose: () => void;
  onSubmit: (payload: { name: string; phone: string; service: string }) => void;
}

const services = [
  'Avaliação Geral',
  'Laser de CO₂ Ultrapulsado',
  'Blefaroplastia com Laser',
  'Radiofrequência Microagulhada Robótica',
  'Fios de PDO',
  'Rejuvenescimento do Olhar',
  'Revitalização da Pele',
  'Efeito Lifting sem Cortes'
];

export function LeadModal({ isOpen, defaultService, onClose, onSubmit }: LeadModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');

  const uniqueServices = useMemo(() => {
    const baseServices = services.slice();
    if (defaultService && !baseServices.includes(defaultService)) {
      baseServices.unshift(defaultService);
    }
    return baseServices;
  }, [defaultService]);

  useEffect(() => {
    if (isOpen) {
      setService(defaultService ?? '');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setName('');
      setPhone('');
      setService('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, defaultService]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim() || !service.trim()) {
      return;
    }
    onSubmit({
      name: name.trim(),
      phone: phone.trim(),
      service: service.trim()
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-8 transition-opacity duration-200"
      style={{ animation: 'fadeIn 0.2s ease-out' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-lg rounded-xl bg-white p-4 sm:p-6 md:p-8 shadow-2xl mx-2 sm:mx-4"
        style={{ animation: 'slideUp 0.3s ease-out' }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 sm:right-3 md:right-4 top-2 sm:top-3 md:top-4 p-1 sm:p-1.5 rounded-full hover:bg-[#f3e1db] transition-colors duration-200 text-[#1e1e1e]/60 hover:text-[#1e1e1e]"
          aria-label="Fechar"
        >
          <X size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
        </button>
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <header className="space-y-1.5 sm:space-y-2 pr-6 sm:pr-8">
            <p className="text-[10px] sm:text-xs font-body font-light tracking-widest text-[#c8a09b] uppercase">
              Vamos conversar
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-normal text-[#1e1e1e] tracking-tight leading-tight">
              Preencha seus dados para agendar pelo WhatsApp
            </h3>
          </header>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="lead-name" className="block text-xs sm:text-sm font-body font-light text-[#1e1e1e]/80 mb-1.5 sm:mb-2">
                Nome
              </label>
              <input
                id="lead-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Como podemos te chamar?"
                className="w-full rounded-lg border border-[#c8a09b]/40 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-body font-light text-[#1e1e1e] shadow-sm outline-none transition-all duration-200 focus:border-[#c8a09b] focus:ring-2 focus:ring-[#c8a09b]/20 hover:border-[#c8a09b]/60"
                required
              />
            </div>

            <div>
              <label htmlFor="lead-phone" className="block text-xs sm:text-sm font-body font-light text-[#1e1e1e]/80 mb-1.5 sm:mb-2">
                Telefone
              </label>
              <input
                id="lead-phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="(92) 00000-0000"
                className="w-full rounded-lg border border-[#c8a09b]/40 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-body font-light text-[#1e1e1e] shadow-sm outline-none transition-all duration-200 focus:border-[#c8a09b] focus:ring-2 focus:ring-[#c8a09b]/20 hover:border-[#c8a09b]/60"
                required
              />
            </div>

            <div>
              <label htmlFor="lead-service" className="block text-xs sm:text-sm font-body font-light text-[#1e1e1e]/80 mb-1.5 sm:mb-2">
                Serviço de interesse
              </label>
              <select
                id="lead-service"
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="w-full rounded-lg border border-[#c8a09b]/40 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-body font-light text-[#1e1e1e] shadow-sm outline-none transition-all duration-200 focus:border-[#c8a09b] focus:ring-2 focus:ring-[#c8a09b]/20 hover:border-[#c8a09b]/60 cursor-pointer"
                required
              >
                <option value="">Selecione uma opção</option>
                {uniqueServices.map((serviceOption) => (
                  <option key={serviceOption} value={serviceOption}>
                    {serviceOption}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#c8a09b] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-body font-light tracking-wide text-white transition-all duration-200 hover:bg-[#d9b6af] hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Continuar no WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


