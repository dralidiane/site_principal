import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Procedures from './components/Procedures';
import AdvancedProcedures from './components/AdvancedProcedures';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LeadModal } from './components/LeadModal';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLeadModal = (service?: string) => {
    setSelectedService(service);
    setLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setLeadModalOpen(false);
  };

  const handleLeadSubmit = (payload: { name: string; phone: string; service: string }) => {
    const message = `Olá, meu nome é ${payload.name}. Tenho interesse em ${payload.service}. Meu telefone é ${payload.phone}.`;
    const phoneNumber = '5592982123626';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    closeLeadModal();
    window.location.href = whatsappUrl;
  };

  return (
    <div className="min-h-screen bg-[#f3e1db] overflow-x-hidden">
      <Header scrolled={scrolled} onLeadCapture={(service) => openLeadModal(service)} />
      <Hero onLeadCapture={(service) => openLeadModal(service)} />
      <About />
      <Procedures />
      <AdvancedProcedures onLeadCapture={(service) => openLeadModal(service)} />
      <Results />
      <Testimonials />
      <Differentials />
      <Contact onLeadCapture={(service) => openLeadModal(service)} />
      <Footer />
      <LeadModal
        isOpen={leadModalOpen}
        defaultService={selectedService}
        onClose={closeLeadModal}
        onSubmit={handleLeadSubmit}
      />
    </div>
  );
}

export default App;
