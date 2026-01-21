import { Link } from 'react-router-dom';
import controllerIcon from '@/assets/images/backgrounds/controller-icon.png';


export const CallToActionMid = () => {
  const scrollToSchedule = () => {
    const element = document.getElementById('schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f071a] via-[#1a0b2e] to-[#0f071a]" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            ¿Listo <br />
            <span className="text-white">para el desafío?</span>
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-start max-w-lg">
          <p className="text-gray-300 text-lg mb-8 text-center md:text-left">
            No dejes pasar la oportunidad de ser parte del evento gamedev más importante de Arequipa.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/inscripcion"
              onClick={() => window.scrollTo(0, 0)}
              className="cursor-pointer bg-cyan-400 hover:bg-cyan-300 text-black font-black px-8 py-3 rounded-md transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)] uppercase tracking-wider text-sm"
            >
              Inscribirme ahora
            </Link>

            <button
              onClick={scrollToSchedule}
              className="cursor-pointer border-2 border-cyan-400/50 hover:border-cyan-400 text-cyan-400 font-bold px-8 py-3 rounded-md transition-all bg-transparent hover:bg-cyan-400/10 uppercase tracking-wider text-sm"
            >
              Ver Cronograma
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            src={controllerIcon}
            alt="Game Controller"
            className="w-32 h-32 object-contain animate-pulse opacity-80 rotate-10"
            style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))' }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
};
export default CallToActionMid;