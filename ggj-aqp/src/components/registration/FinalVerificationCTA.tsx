import { useNavigate } from 'react-router-dom';

export const FinalVerificationCTA = () => {
  const navigate = useNavigate();

  const goToFaqs = () => {
    navigate('/');

    setTimeout(() => {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        const faqSectionAlt = document.getElementById('faq-section');
        faqSectionAlt?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150); 
  };

  return (
    <section className="relative py-24 w-full bg-[#06020d] overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute left-0 bottom-0 w-1/2 h-full opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%236d28d9' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 30px',
            maskImage: 'linear-gradient(to right, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
          }}
        />
        <div 
          className="absolute right-0 bottom-0 w-1/2 h-full opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%236d28d9' fill-opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 30px',
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            ¿Ya completaste ambos registros?
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <button
            onClick={() => navigate('/')}
            className="cursor-pointer bg-cyan-400 hover:bg-cyan-300 text-black font-black px-8 py-3 rounded-md transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] uppercase tracking-wider text-sm"
          >
            SÍ, ESTOY LISTO
          </button>

          <button
            onClick={goToFaqs}
            className="cursor-pointer border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-bold px-10 py-4 rounded-md transition-all bg-transparent hover:bg-cyan-400/10 uppercase tracking-wider text-sm"
          >
            TENGO DUDAS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalVerificationCTA;